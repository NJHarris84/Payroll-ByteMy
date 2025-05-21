// app/api/payroll-dates/[payrollId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { adminApolloClient } from "@/lib/apollo-client";
import { GENERATE_PAYROLL_DATES } from "@/graphql/mutations/payroll_dates/generatePayrollDates";

// GraphQL query to get payroll dates
const GET_PAYROLL_DATES = gql`
  query GetPayrollDates($payrollId: uuid!, $limit: Int) {
    payroll_dates(
      where: {payroll_id: {_eq: $payrollId}},
      order_by: {adjusted_eft_date: asc},
      limit: $limit
    ) {
      id
      original_eft_date
      adjusted_eft_date
      processing_date
      notes
    }
  }
`;

export async function GET(
  req: NextRequest,
  { params }: { params: { payrollId: string } }
) {
  try {
    // Check authentication
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const { payrollId } = params;
    const searchParams = req.nextUrl.searchParams;
    const months = parseInt(searchParams.get("months") || "12");
    
    // Calculate the number of entries to fetch (approximation based on cycle)
    // For monthly, we need 12 entries per year
    // For weekly, we need 52 entries per year
    // We'll use a rough average of 30 entries per year to be safe
    const limit = Math.max(12, Math.ceil(months * 2.5));
    
    // Fetch payroll dates
    const { data } = await adminApolloClient.query({
      query: GET_PAYROLL_DATES,
      variables: {
        payrollId,
        limit
      }
    });
    
    return NextResponse.json({ 
      dates: data.payroll_dates 
    });
  } catch (error) {
    console.error("Error fetching payroll dates:", error);
    return NextResponse.json({ 
      error: "Failed to fetch payroll dates", 
      details: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { payrollId: string } }
) {
  try {
    const { startDate, endDate, maxDates = 52 } = await req.json();
    const payrollId = params.payrollId;

    if (!payrollId) {
      return NextResponse.json({ error: "Missing payroll ID" }, { status: 400 });
    }

    // Call the database function to generate dates using the existing admin client
    const { data, errors } = await adminApolloClient.mutate({
      mutation: GENERATE_PAYROLL_DATES,
      variables: {
        payrollId,
        startDate,
        endDate,
        maxDates
      }
    });

    if (errors) {
      console.error("GraphQL errors:", errors);
      return NextResponse.json({ error: "Failed to generate payroll dates", details: errors }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      dates: data.generate_payroll_dates
    });
  } catch (error) {
    console.error("Error generating payroll dates:", error);
    return NextResponse.json(
      { error: "Failed to generate payroll dates", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}