import { calculateNetPay, calculateTax, generatePayrollDates } from "@/lib/services/payroll-service";
import { PayrollDateType, PayrollCycle } from '@/types/interface';
import { addDays, format } from 'date-fns';

describe('Payroll Service', () => {
  describe('calculateTax', () => {
    test('calculates tax correctly for various income levels', () => {
      // Test case for tax-free threshold
      expect(calculateTax(18000)).toBeCloseTo(0);
      
      // Test case for first tax bracket
      expect(calculateTax(30000)).toBeCloseTo(2242);
      
      // Test case for second tax bracket
      expect(calculateTax(90000)).toBeCloseTo(19822);
      
      // Test case for third tax bracket
      expect(calculateTax(150000)).toBeCloseTo(43267);
      
      // Test case for highest tax bracket
      expect(calculateTax(200000)).toBeCloseTo(63267);
    });
    
    test('handles edge cases for tax calculation', () => {
      // Negative income should return 0 tax
      expect(calculateTax(-5000)).toBe(0);
      
      // Zero income should return 0 tax
      expect(calculateTax(0)).toBe(0);
      
      // Very high income should still calculate correctly
      expect(calculateTax(1000000)).toBeGreaterThan(0);
    });
  });
  
  describe('calculateNetPay', () => {
    test('calculates net pay correctly', () => {
      // Test with default deduction rate
      expect(calculateNetPay(100000, 0.1)).toBeCloseTo(67178); // 100000 - tax - 10% deductions
      
      // Test with no deductions
      expect(calculateNetPay(50000, 0)).toBeCloseTo(41592); // 50000 - tax only
      
      // Test with high deduction rate
      expect(calculateNetPay(80000, 0.25)).toBeCloseTo(45633); // 80000 - tax - 25% deductions
    });
    
    test('handles edge cases for net pay calculation', () => {
      // Zero income should return 0
      expect(calculateNetPay(0, 0.1)).toBe(0);
      
      // Negative income should return 0
      expect(calculateNetPay(-1000, 0.1)).toBe(0);
      
      // 100% deductions should return 0 after tax
      expect(calculateNetPay(50000, 1)).toBe(0);
      
      // Negative deductions should be treated as 0
      expect(calculateNetPay(50000, -0.1)).toEqual(calculateNetPay(50000, 0));
    });
  });
  
  describe('generatePayrollDates', () => {
    test('generates correct dates for weekly cycle with DOW type', () => {
      const startDate = new Date('2023-05-01'); // A Monday
      const cycle: PayrollCycle = { id: '1', name: 'weekly' };
      const dateType: PayrollDateType = { id: '1', name: 'DOW' };
      const processingDayOfWeek = 1; // Monday
      const paymentDayOffset = 3; // Payment 3 days after processing
      
      const result = generatePayrollDates(startDate, cycle, dateType, processingDayOfWeek, paymentDayOffset, 4);
      
      // Should generate 4 dates
      expect(result.length).toBe(4);
      
      // First date should be the start date (since it's already a Monday)
      expect(format(result[0].processingDate, 'yyyy-MM-dd')).toBe('2023-05-01');
      expect(format(result[0].paymentDate, 'yyyy-MM-dd')).toBe('2023-05-04');
      
      // Next dates should be 7 days apart
      expect(format(result[1].processingDate, 'yyyy-MM-dd')).toBe('2023-05-08');
      expect(format(result[1].paymentDate, 'yyyy-MM-dd')).toBe('2023-05-11');
      
      expect(format(result[2].processingDate, 'yyyy-MM-dd')).toBe('2023-05-15');
      expect(format(result[2].paymentDate, 'yyyy-MM-dd')).toBe('2023-05-18');
      
      expect(format(result[3].processingDate, 'yyyy-MM-dd')).toBe('2023-05-22');
      expect(format(result[3].paymentDate, 'yyyy-MM-dd')).toBe('2023-05-25');
    });
    
    test('generates correct dates for monthly cycle with EOM type', () => {
      const startDate = new Date('2023-05-01');
      const cycle: PayrollCycle = { id: '2', name: 'monthly' };
      const dateType: PayrollDateType = { id: '2', name: 'EOM' };
      const processingDayOfWeek = null; // Not used for EOM
      const paymentDayOffset = 2; // Payment 2 days after processing
      
      const result = generatePayrollDates(startDate, cycle, dateType, processingDayOfWeek, paymentDayOffset, 3);
      
      // Should generate 3 dates
      expect(result.length).toBe(3);
      
      // For EOM, processing dates should be last day of month
      expect(format(result[0].processingDate, 'yyyy-MM-dd')).toBe('2023-05-31');
      expect(format(result[0].paymentDate, 'yyyy-MM-dd')).toBe('2023-06-02');
      
      expect(format(result[1].processingDate, 'yyyy-MM-dd')).toBe('2023-06-30');
      expect(format(result[1].paymentDate, 'yyyy-MM-dd')).toBe('2023-07-02');
      
      expect(format(result[2].processingDate, 'yyyy-MM-dd')).toBe('2023-07-31');
      expect(format(result[2].paymentDate, 'yyyy-MM-dd')).toBe('2023-08-02');
    });
    
    test('handles holidays when generating payroll dates', () => {
      const startDate = new Date('2023-01-01');
      const cycle: PayrollCycle = { id: '1', name: 'weekly' };
      const dateType: PayrollDateType = { id: '1', name: 'DOW' };
      const processingDayOfWeek = 1; // Monday
      const paymentDayOffset = 3; // Payment 3 days after processing
      
      // Add a holiday on 2023-01-02 (the first Monday after startDate)
      const holidays = [new Date('2023-01-02')];
      
      const result = generatePayrollDates(
        startDate, 
        cycle, 
        dateType, 
        processingDayOfWeek, 
        paymentDayOffset, 
        2,
        holidays
      );
      
      // First processing date should be moved to next business day (Tuesday, Jan 3)
      expect(format(result[0].processingDate, 'yyyy-MM-dd')).toBe('2023-01-03');
      // Payment date is 3 days after processing
      expect(format(result[0].paymentDate, 'yyyy-MM-dd')).toBe('2023-01-06');
    });
  });
});
