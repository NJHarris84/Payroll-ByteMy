// app/api/cron/generate-batch/route.ts
import { NextRequest, NextResponse } from "next/server";
import { addMonths, format } from "date-fns";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    // Authentication and authorization check
    const { userId, getToken } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
    }
    
    // Check user permissions
    const token = await getToken({ template: "hasura" });
    let userRole = "viewer";
    
    if (token) {
      try {
        const tokenParts = token.split('.');
        if (tokenParts.length >= 2) {
          const payload = JSON.parse(Buffer.from(tokenParts[1], 'base64').toString());
          userRole = payload['https://hasura.io/jwt/claims']['x-hasura-default-role'] || "viewer";
        }
      } catch (tokenError) {
        console.error("Failed to parse token:", tokenError);
        return NextResponse.json({ 
          error: "Invalid token format", 
          details: "Could not parse JWT token",
          code: "INVALID_TOKEN"
        }, { status: 401 });
      }
    }
    
    // Only allow certain roles to generate dates
    const allowedRoles = ['org_admin', 'admin', 'developer'];
    if (!allowedRoles.includes(userRole)) {
      return NextResponse.json({ 
        error: "Forbidden", 
        details: "You don't have permission to generate payroll dates",
        code: "FORBIDDEN"
      }, { status: 403 });
    }
    
    // Parse request body
    let requestBody;
    try {
      requestBody = await req.json();
    } catch (parseError) {
      return NextResponse.json({ 
        error: "Invalid request body", 
        details: "Could not parse JSON body",
        code: "INVALID_JSON"
      }, { status: 400 });
    }
    
    const { payrollIds, startDate } = requestBody;
    
    // Validate input
    if (!payrollIds || !Array.isArray(payrollIds) || payrollIds.length === 0) {
      return NextResponse.json({ 
        error: "Invalid input", 
        details: "Provide an array of payroll IDs",
        code: "INVALID_INPUT" 
      }, { status: 400 });
    }
    
    // Set up date range for generated dates
    const start = startDate ? new Date(startDate) : new Date();
    if (isNaN(start.getTime())) {
      return NextResponse.json({ 
        error: "Invalid startDate", 
        details: "The provided startDate is not a valid date",
        code: "INVALID_DATE" 
      }, { status: 400 });
    }
    
    const end = addMonths(start, 12); // Generate 12 months of dates
    
    // Format dates as YYYY-MM-DD
    const formatDate = (date: Date) => format(date, 'yyyy-MM-dd');
    
    // Process each payroll
    const results = {
      total: payrollIds.length,
      processed: 0,
      failed: 0,
      errors: [] as { payrollId: string, error: string, code?: string }[]
    };
    
    // Process payrolls in batches to avoid timeouts
    for (const payrollId of payrollIds) {
      try {
        console.log(`Processing payroll: ${payrollId}`);
        
        // Generate dates using the admin Apollo client
        const { data, errors } = await adminApolloClient.mutate({
          mutation: GENERATE_PAYROLL_DATES,
          variables: {
            payrollId,
            startDate: formatDate(start),
            endDate: formatDate(end)
          }
        });

        if (errors) {
          console.error(`Errors for payroll ${payrollId}:`, errors);
          results.failed++;
          results.errors.push({
            payrollId,
            error: errors.map((e: any) => e.message).join(', '),
            code: "GRAPHQL_ERROR"
          });
          continue;
        }

        // Check if dates were generated successfully
        if (!data?.generate_payroll_dates || data.generate_payroll_dates.length === 0) {
          console.warn(`No dates generated for payroll: ${payrollId}`);
          results.failed++;
          results.errors.push({
            payrollId,
            error: "No dates generated",
            code: "NO_DATES_GENERATED"
          });
          continue;
        }

        results.processed++;
        console.log(`Successfully processed payroll: ${payrollId}`);
      } catch (error) {
        console.error(`Error processing payroll ${payrollId}:`, error);
        results.failed++;
        results.errors.push({
          payrollId,
          error: error instanceof Error ? error.message : "Unknown error",
          code: error instanceof Error && (error as any).code ? (error as any).code : "PROCESSING_ERROR"
        });
      }
    }
    
    // Prepare and return response
    return NextResponse.json({
      success: results.processed > 0,
      message: `Processed ${results.processed} of ${results.total} payrolls`,
      total: results.total,
      processed: results.processed,
      failed: results.failed,
      errors: results.errors.length > 0 ? results.errors : undefined
    });
  } catch (error) {
    console.error("Error in batch processing:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorCode = error instanceof Error && (error as any).code ? (error as any).code : "SERVER_ERROR";
    
    return NextResponse.json({ 
      error: "Failed to process payrolls", 
      details: errorMessage,
      code: errorCode
    }, { status: 500 });
  }
}