// app/(dashboard)/calendar/page.tsx
"use client"

import { ChevronLeft, ChevronRight, CalendarIcon, Download } from "lucide-react";
import { format, addMonths, subMonths, getDaysInMonth, startOfMonth, getDay, addDays } from "date-fns";
import { useQuery } from "@apollo/client";
import { useState } from "react";

import { Badge, Button, Calendar, Card, CardContent, CardDescription, CardHeader, CardTitle, PageLoading, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
import { GET_HOLIDAYS_BY_YEAR, GET_PAYROLLS } from "@/lib/graphql";

// Helper to format date for display
const formatDateForDisplay = (date: Date): string => {
  return new Intl.DateTimeFormat('en-AU', { 
    day: 'numeric', 
    month: 'short'
  }).format(date)
}

// Helper to get month name
const getMonthName = (date: Date): string => {
  return new Intl.DateTimeFormat('en-AU', { month: 'long', year: 'numeric' }).format(date)
}

// Helper to generate calendar days
const generateMonthDays = (year: number, month: number): Date[] => {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1))
}

// Helper to get day of week (0-6)
const getDayOfWeek = (date: Date): number => date.getDay()

// Interface for event types
interface CalendarEvent {
  id: string
  title: string
  date: Date
  type: 'payroll' | 'holiday' | 'leave'
  color: string
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()

  // Fetch payrolls
  const { loading: loadingPayrolls, error: payrollsError, data: payrollsData } = useQuery(GET_PAYROLLS)

  // Fetch holidays for current year
  const { loading: loadingHolidays, error: holidaysError, data: holidaysData } = useQuery(GET_HOLIDAYS_BY_YEAR, {
    variables: { year: currentYear }
  })

  // Process events when data is available
  const events: CalendarEvent[] = []
  
  // Add payrolls to events
  if (payrollsData?.payrolls) {
    payrollsData.payrolls.forEach((payroll: any) => {
      if (payroll.payroll_dates) {
        payroll.payroll_dates.forEach((date: any) => {
          const payrollDate = new Date(date.date)
          if (payrollDate.getMonth() === currentMonth && payrollDate.getFullYear() === currentYear) {
            events.push({
              id: `payroll-${date.id}`,
              title: payroll.name,
              date: payrollDate,
              type: 'payroll',
              color: 'bg-blue-500'
            })
          }
        })
      }
    })
  }
  
  // Add holidays to events
  if (holidaysData?.holidays) {
    holidaysData.holidays.forEach((holiday: any) => {
      const holidayDate = new Date(holiday.date)
      if (holidayDate.getMonth() === currentMonth && holidayDate.getFullYear() === currentYear) {
        events.push({
          id: `holiday-${holiday.id}`,
          title: holiday.name,
          date: holidayDate,
          type: 'holiday',
          color: 'bg-green-500'
        })
      }
    })
  }

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  // Get days in current month
  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  
  // Get first day of month (0-6, where 0 is Sunday)
  const firstDayOfMonth = getDayOfWeek(new Date(currentYear, currentMonth, 1))
  
  // Calculate empty cells for days before the 1st of the month
  const leadingEmptyCells = Array.from({ length: firstDayOfMonth }, (_, i) => i)

  // Show loading state while data is fetching
  if (loadingPayrolls || loadingHolidays) {
    return <PageLoading />
  }

  // Show error state if there's an error
  if (payrollsError || holidaysError) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
          <p className="text-muted-foreground">View payroll and holiday schedules</p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="text-destructive">
              Error loading calendar data: {payrollsError?.message || holidaysError?.message}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
        <p className="text-muted-foreground">View payroll and holiday schedules</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{getMonthName(currentDate)}</CardTitle>
            <CardDescription>Payroll schedule and public holidays</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={goToNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {/* Calendar header with day names */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-2 text-sm font-medium text-center">
                {day}
              </div>
            ))}
            
            {/* Empty cells for days before the 1st */}
            {leadingEmptyCells.map((_, index) => (
              <div key={`empty-${index}`} className="p-2 border rounded-md bg-muted/20"></div>
            ))}
            
            {/* Calendar days */}
            {daysInMonth.map((date) => {
              // Find events for this day
              const dayEvents = events.filter(event => 
                event.date.getDate() === date.getDate()
              )
              
              return (
                <div 
                  key={date.toISOString()} 
                  className={`p-2 border rounded-md min-h-[100px] ${
                    date.getDay() === 0 || date.getDay() === 6 ? 'bg-muted/20' : ''
                  }`}
                >
                  <div className="font-medium text-sm">{formatDateForDisplay(date)}</div>
                  
                  {/* Events for this day */}
                  <div className="mt-1 space-y-1">
                    {dayEvents.map(event => (
                      <div 
                        key={event.id} 
                        className={`text-xs p-1 rounded ${event.color} text-white truncate`}
                        title={event.title}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}