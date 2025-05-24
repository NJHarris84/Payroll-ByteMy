import { useQuery, useMutation } from '@apollo/client';
import { 
  GET_HOLIDAYS,
  GET_HOLIDAYS_BY_YEAR,
  GET_HOLIDAYS_BY_COUNTRY
} from '@/lib/graphql';
import { SYNC_HOLIDAYS } from '@/lib/graphql';

export function useHolidays(options = {}) {
  return useQuery(GET_HOLIDAYS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useHolidaysByYear(year: number, options = {}) {
  return useQuery(GET_HOLIDAYS_BY_YEAR, {
    variables: { year },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useHolidaysByCountry(countryCode: string, startDate: string, endDate: string, options = {}) {
  return useQuery(GET_HOLIDAYS_BY_COUNTRY, {
    variables: { countryCode, startDate, endDate },
    skip: !countryCode || !startDate || !endDate,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useSyncHolidays() {
  return useMutation(SYNC_HOLIDAYS);
}

// Helper hook to get holidays for current year in Australia
export function useAustralianHolidays() {
  const currentYear = new Date().getFullYear();
  const startDate = `${currentYear}-01-01`;
  const endDate = `${currentYear}-12-31`;
  
  return useHolidaysByCountry('AU', startDate, endDate);
}
