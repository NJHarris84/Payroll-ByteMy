// app/api/payroll-dates/[payrollId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { adminApolloClient } from '@/lib/api';
import { GENERATE_PAYROLL_DATES } from '@/lib/graphql';
import { GET_PAYROLL_DATES } from '@/lib/graphql'; // Use the existing file
import { auth } from "@clerk/nextjs/server";

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
    
    // Calculate the number of entries to fetch
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
      success: true,
      dates: data.payroll_dates
    });
  } catch (error) {
    console.error("Error fetching payroll dates:", error);
    return NextResponse.json(
      { error: "Failed to fetch payroll dates", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
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

    // Call the database function to generate dates
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