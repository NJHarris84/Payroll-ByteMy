// lib/services/holiday-sync-service.ts
import { gql } from '@apollo/client'
import { adminApolloClient } from "@/lib/api/apollo-client.client"
import { SYNC_HOLIDAYS } from "@/lib/graphql";
import axios from "axios";

// Type definition for holiday API response
export interface PublicHoliday {
    date: string
    localName: string
    name: string
    countryCode: string
    fixed: boolean
    global: boolean
    counties?: string[]
    launchYear: number
    types: string[]
}

// Type definition for Nager.Date API response
export interface NagerDateHoliday {
    date: string
    localName: string
    name: string
    countryCode: string
    fixed: boolean
    global: boolean
    counties?: string[]
    launchYear: number
    types: string[]
}

// GraphQL mutation to insert holidays
const INSERT_HOLIDAYS_MUTATION = gql`
 mutation InsertHolidays($objects: [holidays_insert_input!]!) {
  insert_holidays(
    objects: $objects, 
    on_conflict: {
      constraint: holidays_pkey,
      update_columns: [
        date, 
        local_name,
        name, 
        country_code,
        region,
        is_fixed,
        is_global,
        launch_year,
        types, 
        updated_at
      ]
    }
  ) {
    affected_rows
    returning {
      id
      date
      local_name
      name
    }
  }
}
`

export async function fetchPublicHolidays(year: number, countryCode: string): Promise<PublicHoliday[]> {
    try {
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`)

        if (!response.ok) {
            throw new Error(`Failed to fetch holidays: ${response.statusText}`)
        }

        return await response.json()
    } catch (error) {
        console.error('Error fetching public holidays:', error)
        throw error
    }
}

export async function syncHolidaysForCountry(year: number, countryCode: string, region?: string) {
    try {
        // Fetch holidays from API
        const publicHolidays = await fetchPublicHolidays(year, countryCode);

        // Separate national holidays (counties = null) from state-specific ones
        const holidaysToInsert = publicHolidays.map(holiday => ({
            date: holiday.date,
            local_name: holiday.localName,
            name: holiday.name,
            country_code: holiday.countryCode,
            region: holiday.counties ? holiday.counties.map(c => c.replace(`${holiday.countryCode}-`, "")) : ["National"], // Fixed typo: courtyCode -> countryCode
            is_fixed: holiday.fixed,
            is_global: holiday.global,
            launch_year: holiday.launchYear,
            types: holiday.types,
            updated_at: new Date().toISOString()
        }));

        // Insert national holidays first (only once)
        if (!region) {  // Insert National Holidays only once (when region is undefined)
            const { data, errors } = await adminApolloClient.mutate({
                mutation: INSERT_HOLIDAYS_MUTATION,
                variables: { objects: holidaysToInsert }
            });

            if (errors) {
                console.error('GraphQL errors during national holiday sync:', errors);
                throw new Error('Failed to sync national holidays');
            }
            console.log(`Synced ${data.insert_holidays.affected_rows} national holidays for ${countryCode} in ${year}`);
        }

        return true;
    } catch (error) {
        console.error(`Error syncing holidays for ${countryCode} in ${year}:`, error);
        throw error;
    }
}

/**
 * Syncs Australian holidays from the Nager.Date API
 */
export async function syncAustralianHolidays(year: number = new Date().getFullYear()): Promise<{ success: boolean; message: string }> {
  try {
    console.log(`Syncing Australian holidays for year ${year}`);
    
    // Fetch holidays from Nager.Date API
    const response = await axios.get<NagerDateHoliday[]>(
      `https://date.nager.at/api/v3/PublicHolidays/${year}/AU`
    );
    
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error("Invalid response from Nager.Date API");
    }
    
    const holidays = response.data;
    console.log(`Fetched ${holidays.length} holidays from Nager.Date API`);
    
    // Transform the API response to our database format
    const formattedHolidays = holidays.map((holiday: NagerDateHoliday) => ({
      date: holiday.date,
      name: holiday.name,
      description: holiday.localName,
      is_national: holiday.global,
      state: holiday.global ? null : (holiday.counties?.[0] || null),
      holiday_type: "public",
      created_at: new Date(),
      updated_at: new Date()
    }));
    
    // Insert into database using the existing admin client
    const { data } = await adminApolloClient.mutate({
      mutation: SYNC_HOLIDAYS,
      variables: {
        holidays: formattedHolidays
      }
    });
    
    const affectedRows = data?.insert_holidays?.affected_rows || 0;
    console.log(`Successfully synced ${affectedRows} holidays`);
    
    return {
      success: true,
      message: `Successfully synced ${affectedRows} Australian holidays for ${year}`
    };
  } catch (error) {
    console.error("Error syncing holidays:", error);
    return {
      success: false,
      message: `Failed to sync holidays: ${error instanceof Error ? error.message : "Unknown error"}`
    };
  }
}

/**
 * Syncs multiple years of holidays
 */
export async function syncMultipleYears(startYear: number = new Date().getFullYear(), years: number = 3): Promise<{ success: boolean; message: string }> {
  try {
    let totalSynced = 0;
    const errors: string[] = [];
    
    for (let i = 0; i < years; i++) {
      const year = startYear + i;
      try {
        const result = await syncAustralianHolidays(year);
        if (result.success) {
          totalSynced++;
          console.log(`Successfully synced holidays for ${year}`);
        } else {
          errors.push(`Failed to sync ${year}: ${result.message}`);
          console.error(`Failed to sync holidays for ${year}:`, result.message);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        errors.push(`Error syncing ${year}: ${errorMessage}`);
        console.error(`Error syncing holidays for ${year}:`, error);
      }
    }
    
    if (errors.length > 0) {
      return {
        success: false,
        message: `Partial sync completed. ${totalSynced}/${years} years synced successfully. Errors: ${errors.join('; ')}`
      };
    }
    
    return {
      success: true,
      message: `Successfully synced holidays for ${totalSynced} years (${startYear}-${startYear + years - 1})`
    };
  } catch (error) {
    console.error("Error in syncMultipleYears:", error);
    return {
      success: false,
      message: `Failed to sync multiple years: ${error instanceof Error ? error.message : "Unknown error"}`
    };
  }
}