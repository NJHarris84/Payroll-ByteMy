// app/api/cron/sync-holidays/route.ts
import { NextRequest, NextResponse } from "next/server";
import { syncAustralianHolidays, syncMultipleYears } from "@/lib/holiday-sync-service";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const years = parseInt(searchParams.get("years") || "3");
    const startYear = parseInt(searchParams.get("startYear") || new Date().getFullYear().toString());
    
    // If single year requested
    if (years === 1) {
      const result = await syncAustralianHolidays(startYear);
      return NextResponse.json(result);
    }
    
    // Multiple years requested
    const result = await syncMultipleYears(startYear, years);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Cron holiday sync error:", error);
    return NextResponse.json({ 
      error: "Failed to sync holidays via cron", 
      details: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}

// Also add POST method for manual triggers
export async function POST(req: NextRequest) {
  try {
    const { startYear = new Date().getFullYear(), years = 3 } = await req.json();
    
    // Sync multiple years
    const result = await syncMultipleYears(startYear, years);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Manual holiday sync error:", error);
    return NextResponse.json({ 
      error: "Failed to sync holidays", 
      details: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}

// Note: Configure this in vercel.json to run periodically