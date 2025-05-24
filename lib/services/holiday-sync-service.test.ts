import { fetchHolidays, syncHolidaysToDatabase } from "@/lib/services/holiday-sync-service";
import { prisma } from "@/lib/db";

// Mock the prisma client
jest.mock('@/lib/db', () => ({
  prisma: {
    holiday: {
      findMany: jest.fn(),
      createMany: jest.fn(),
      deleteMany: jest.fn()
    },
    $transaction: jest.fn((callback) => callback(prisma))
  }
}));

// Mock fetch
global.fetch = jest.fn();

describe('Holiday Sync Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('fetchHolidays', () => {
    test('fetches holidays for the specified year and country', async () => {
      // Mock successful API response
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ([
          {
            date: '2023-01-01',
            localName: 'New Year\'s Day',
            name: 'New Year\'s Day',
            countryCode: 'AU',
            fixed: true,
            global: true,
            counties: null,
            launchYear: null,
            types: ['Public']
          },
          {
            date: '2023-01-26',
            localName: 'Australia Day',
            name: 'Australia Day',
            countryCode: 'AU',
            fixed: true,
            global: true,
            counties: null,
            launchYear: null,
            types: ['Public']
          }
        ])
      });
      
      const result = await fetchHolidays(2023, 'AU');
      
      // Check that fetch was called with correct URL
      expect(global.fetch).toHaveBeenCalledWith(
        'https://date.nager.at/api/v3/PublicHolidays/2023/AU'
      );
      
      // Check returned data
      expect(result).toHaveLength(2);
      expect(result[0].date).toBe('2023-01-01');
      expect(result[0].localName).toBe('New Year\'s Day');
      expect(result[1].date).toBe('2023-01-26');
      expect(result[1].localName).toBe('Australia Day');
    });
    
    test('handles API errors', async () => {
      // Mock failed API response
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found'
      });
      
      await expect(fetchHolidays(2023, 'XYZ')).rejects.toThrow(
        'Failed to fetch holidays: 404 Not Found'
      );
    });
    
    test('handles network errors', async () => {
      // Mock network error
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error('Network error')
      );
      
      await expect(fetchHolidays(2023, 'AU')).rejects.toThrow(
        'Network error'
      );
    });
  });
  
  describe('syncHolidaysToDatabase', () => {
    const mockHolidays = [
      {
        date: '2023-01-01',
        localName: 'New Year\'s Day',
        name: 'New Year\'s Day',
        countryCode: 'AU',
        fixed: true,
        global: true,
        counties: null,
        launchYear: null,
        types: ['Public']
      },
      {
        date: '2023-01-26',
        localName: 'Australia Day',
        name: 'Australia Day',
        countryCode: 'AU',
        fixed: true,
        global: true,
        counties: null,
        launchYear: null,
        types: ['Public']
      }
    ];
    
    test('syncs holidays to database', async () => {
      // Mock fetch to return holidays
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockHolidays
      });
      
      // Mock existing holidays in database
      (prisma.holiday.findMany as jest.Mock).mockResolvedValueOnce([
        {
          id: 'holiday-1',
          date: '2023-01-01',
          local_name: 'New Year\'s Day',
          name: 'New Year\'s Day',
          country_code: 'AU',
          year: 2023
        }
      ]);
      
      // Mock createMany and deleteMany
      (prisma.holiday.createMany as jest.Mock).mockResolvedValueOnce({ count: 1 });
      (prisma.holiday.deleteMany as jest.Mock).mockResolvedValueOnce({ count: 0 });
      
      const result = await syncHolidaysToDatabase(2023, 'AU');
      
      // Should have fetched holidays
      expect(global.fetch).toHaveBeenCalled();
      
      // Should have checked for existing holidays
      expect(prisma.holiday.findMany).toHaveBeenCalledWith({
        where: {
          year: 2023,
          country_code: 'AU'
        }
      });
      
      // Should have added new holidays
      expect(prisma.holiday.createMany).toHaveBeenCalled();
      
      // Should return the correct counts
      expect(result).toEqual({
        imported: 1,
        deleted: 0,
        total: 1
      });
    });
    
    test('handles database errors', async () => {
      // Mock fetch to return holidays
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockHolidays
      });
      
      // Mock database error
      (prisma.holiday.findMany as jest.Mock).mockRejectedValueOnce(
        new Error('Database error')
      );
      
      await expect(syncHolidaysToDatabase(2023, 'AU')).rejects.toThrow(
        'Database error'
      );
    });
    
    test('handles empty API response', async () => {
      // Mock empty API response
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => []
      });
      
      const result = await syncHolidaysToDatabase(2023, 'AU');
      
      expect(result).toEqual({
        imported: 0,
        deleted: 0,
        total: 0
      });
      
      // Should not have tried to add or delete any holidays
      expect(prisma.holiday.createMany).not.toHaveBeenCalled();
      expect(prisma.holiday.deleteMany).not.toHaveBeenCalled();
    });
  });
});
