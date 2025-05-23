import {
  isBusinessDay,
  getNextBusinessDay,
  getPreviousBusinessDay,
  getDateByDayOfWeek,
  getStartOfMonthDate,
  getEndOfMonthDate
} from '@/lib/utils/date-utils';

// Mock holidays for testing
const mockHolidays = [
  new Date('2023-01-01'), // New Year's Day
  new Date('2023-01-26'), // Australia Day
  new Date('2023-04-07'), // Good Friday
];

describe('Date Utilities', () => {
  describe('isBusinessDay', () => {
    test('should return false for weekends', () => {
      const saturday = new Date('2023-05-06'); // Saturday
      const sunday = new Date('2023-05-07'); // Sunday
      
      expect(isBusinessDay(saturday, mockHolidays)).toBe(false);
      expect(isBusinessDay(sunday, mockHolidays)).toBe(false);
    });
    
    test('should return false for holidays', () => {
      const holiday = new Date('2023-01-01'); // New Year's Day
      
      expect(isBusinessDay(holiday, mockHolidays)).toBe(false);
    });
    
    test('should return true for business days', () => {
      const monday = new Date('2023-05-08'); // Monday
      const friday = new Date('2023-05-12'); // Friday
      
      expect(isBusinessDay(monday, mockHolidays)).toBe(true);
      expect(isBusinessDay(friday, mockHolidays)).toBe(true);
    });
  });
  
  describe('getNextBusinessDay', () => {
    test('should return the next business day', () => {
      const friday = new Date('2023-05-05'); // Friday
      const expectedNextBusinessDay = new Date('2023-05-08'); // Monday
      
      const result = getNextBusinessDay(friday, mockHolidays);
      
      expect(result.getDate()).toBe(expectedNextBusinessDay.getDate());
      expect(result.getMonth()).toBe(expectedNextBusinessDay.getMonth());
      expect(result.getFullYear()).toBe(expectedNextBusinessDay.getFullYear());
    });
    
    test('should skip holidays', () => {
      const beforeHoliday = new Date('2023-01-25'); // Day before Australia Day
      const expectedNextBusinessDay = new Date('2023-01-27'); // Day after Australia Day
      
      const result = getNextBusinessDay(beforeHoliday, mockHolidays);
      
      expect(result.getDate()).toBe(expectedNextBusinessDay.getDate());
      expect(result.getMonth()).toBe(expectedNextBusinessDay.getMonth());
      expect(result.getFullYear()).toBe(expectedNextBusinessDay.getFullYear());
    });
  });
  
  describe('getPreviousBusinessDay', () => {
    test('should return the previous business day', () => {
      const monday = new Date('2023-05-08'); // Monday
      const expectedPreviousBusinessDay = new Date('2023-05-05'); // Friday
      
      const result = getPreviousBusinessDay(monday, mockHolidays);
      
      expect(result.getDate()).toBe(expectedPreviousBusinessDay.getDate());
      expect(result.getMonth()).toBe(expectedPreviousBusinessDay.getMonth());
      expect(result.getFullYear()).toBe(expectedPreviousBusinessDay.getFullYear());
    });
    
    test('should skip holidays', () => {
      const afterHoliday = new Date('2023-01-27'); // Day after Australia Day
      const expectedPreviousBusinessDay = new Date('2023-01-25'); // Day before Australia Day
      
      const result = getPreviousBusinessDay(afterHoliday, mockHolidays);
      
      expect(result.getDate()).toBe(expectedPreviousBusinessDay.getDate());
      expect(result.getMonth()).toBe(expectedPreviousBusinessDay.getMonth());
      expect(result.getFullYear()).toBe(expectedPreviousBusinessDay.getFullYear());
    });
  });
  
  describe('getDateByDayOfWeek', () => {
    test('should return date with specified day of week', () => {
      const baseDate = new Date('2023-05-01'); // Monday (day 1)
      
      // Test getting Wednesday (day 3)
      const wednesday = getDateByDayOfWeek(baseDate, 3);
      expect(wednesday.getDay()).toBe(3);
      
      // Test getting Sunday (day 0)
      const sunday = getDateByDayOfWeek(baseDate, 0);
      expect(sunday.getDay()).toBe(0);
    });
  });
  
  describe('getStartOfMonthDate', () => {
    test('should return the first day of the month', () => {
      const midMonth = new Date('2023-05-15');
      const expectedStartOfMonth = new Date('2023-05-01');
      
      const result = getStartOfMonthDate(midMonth);
      
      expect(result.getDate()).toBe(expectedStartOfMonth.getDate());
      expect(result.getMonth()).toBe(expectedStartOfMonth.getMonth());
      expect(result.getFullYear()).toBe(expectedStartOfMonth.getFullYear());
    });
  });
  
  describe('getEndOfMonthDate', () => {
    test('should return the last day of the month', () => {
      const midMonth = new Date('2023-05-15');
      const expectedEndOfMonth = new Date('2023-05-31');
      
      const result = getEndOfMonthDate(midMonth);
      
      expect(result.getDate()).toBe(expectedEndOfMonth.getDate());
      expect(result.getMonth()).toBe(expectedEndOfMonth.getMonth());
      expect(result.getFullYear()).toBe(expectedEndOfMonth.getFullYear());
    });
    
    test('should handle February in non-leap year', () => {
      const february = new Date('2023-02-15');
      const expectedEndOfMonth = new Date('2023-02-28');
      
      const result = getEndOfMonthDate(february);
      
      expect(result.getDate()).toBe(expectedEndOfMonth.getDate());
    });
    
    test('should handle February in leap year', () => {
      const february = new Date('2024-02-15');
      const expectedEndOfMonth = new Date('2024-02-29');
      
      const result = getEndOfMonthDate(february);
      
      expect(result.getDate()).toBe(expectedEndOfMonth.getDate());
    });
  });
});
