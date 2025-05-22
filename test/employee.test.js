const { calculateEmployeePay, Employee } = require('../lib/employee');

describe('Employee Management', () => {
  describe('Employee Class', () => {
    test('should create employee instance with correct properties', () => {
      const employee = new Employee({
        id: '123',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        salary: 75000,
        hourlyRate: null,
        taxFileNumber: '123456789',
        superannuation: 0.105, // 10.5%
        startDate: new Date('2022-01-15'),
      });
      
      expect(employee.id).toBe('123');
      expect(employee.firstName).toBe('John');
      expect(employee.lastName).toBe('Doe');
      expect(employee.email).toBe('john.doe@example.com');
      expect(employee.salary).toBe(75000);
      expect(employee.hourlyRate).toBeNull();
      expect(employee.taxFileNumber).toBe('123456789');
      expect(employee.superannuation).toBe(0.105);
      expect(employee.startDate).toEqual(new Date('2022-01-15'));
    });
    
    test('should calculate annual salary for hourly employees', () => {
      const hourlyEmployee = new Employee({
        id: '456',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        salary: null,
        hourlyRate: 35,
        hoursPerWeek: 38,
        taxFileNumber: '987654321',
        superannuation: 0.105,
        startDate: new Date('2022-03-01'),
      });
      
      // Annual salary = hourlyRate * hoursPerWeek * 52 weeks
      const expectedAnnualSalary = 35 * 38 * 52;
      expect(hourlyEmployee.getAnnualSalary()).toBe(expectedAnnualSalary);
    });
    
    test('should return correct full name', () => {
      const employee = new Employee({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        salary: 75000,
      });
      
      expect(employee.getFullName()).toBe('John Doe');
    });
    
    test('should calculate correct superannuation amount', () => {
      const employee = new Employee({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        salary: 100000,
        superannuation: 0.105, // 10.5%
      });
      
      // Super amount = salary * super rate
      expect(employee.calculateSuperannuation()).toBe(10500);
    });
    
    test('should calculate tenure correctly', () => {
      // Employee started 2 years ago
      const startDate = new Date();
      startDate.setFullYear(startDate.getFullYear() - 2);
      
      const employee = new Employee({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        salary: 75000,
        startDate,
      });
      
      expect(employee.getTenure()).toBe(2);
    });
  });
  
  describe('calculateEmployeePay function', () => {
    test('should calculate pay correctly for salaried employees', () => {
      const employee = {
        salary: 120000,
        taxFileNumber: '123456789',
        superannuation: 0.105,
        deductions: 0.02, // 2% additional deductions
      };
      
      const payPeriodDays = 14; // Fortnightly pay
      const result = calculateEmployeePay(employee, payPeriodDays);
      
      // Fortnightly gross = (120000 / 365) * 14
      const expectedGross = (120000 / 365) * 14;
      
      // Tax calculated on annualized amount
      const expectedTax = 29467 / 365 * 14; // Approximate tax for $120k
      
      // Super is 10.5% of gross
      const expectedSuper = expectedGross * 0.105;
      
      // Deductions are 2% of gross
      const expectedDeductions = expectedGross * 0.02;
      
      // Net = Gross - Tax - Deductions
      const expectedNet = expectedGross - expectedTax - expectedDeductions;
      
      expect(result.grossPay).toBeCloseTo(expectedGross, 2);
      expect(result.tax).toBeCloseTo(expectedTax, 2);
      expect(result.superannuation).toBeCloseTo(expectedSuper, 2);
      expect(result.deductions).toBeCloseTo(expectedDeductions, 2);
      expect(result.netPay).toBeCloseTo(expectedNet, 2);
    });
    
    test('should calculate pay correctly for hourly employees', () => {
      const employee = {
        hourlyRate: 40,
        hoursWorked: 76, // Two standard weeks
        taxFileNumber: '123456789',
        superannuation: 0.105,
        deductions: 0,
      };
      
      const result = calculateEmployeePay(employee, null, true); // isHourly = true
      
      // Gross = hourlyRate * hoursWorked
      const expectedGross = 40 * 76;
      
      // Tax calculated on annualized amount (40 * 38 * 52 = $79,040)
      const expectedTax = 16832 / 26 * 2; // Approximate fortnightly tax for $79k
      
      // Super is 10.5% of gross
      const expectedSuper = expectedGross * 0.105;
      
      // No deductions
      const expectedDeductions = 0;
      
      // Net = Gross - Tax
      const expectedNet = expectedGross - expectedTax;
      
      expect(result.grossPay).toBe(expectedGross);
      expect(result.tax).toBeCloseTo(expectedTax, 2);
      expect(result.superannuation).toBeCloseTo(expectedSuper, 2);
      expect(result.deductions).toBe(expectedDeductions);
      expect(result.netPay).toBeCloseTo(expectedNet, 2);
    });
    
    test('should handle overtime pay correctly', () => {
      const employee = {
        hourlyRate: 35,
        hoursWorked: 86, // 76 regular + 10 overtime
        standardHours: 76,
        overtimeRate: 1.5, // Time and a half
        taxFileNumber: '123456789',
        superannuation: 0.105,
        deductions: 0,
      };
      
      const result = calculateEmployeePay(employee, null, true);
      
      // Regular pay = hourlyRate * standardHours
      const regularPay = 35 * 76;
      
      // Overtime pay = hourlyRate * overtimeRate * overtimeHours
      const overtimePay = 35 * 1.5 * 10;
      
      // Gross = regularPay + overtimePay
      const expectedGross = regularPay + overtimePay;
      
      // Tax and other calculations should account for the total gross
      expect(result.grossPay).toBe(expectedGross);
      expect(result.regularHours).toBe(76);
      expect(result.overtimeHours).toBe(10);
      expect(result.overtimePay).toBe(overtimePay);
    });
  });
});
