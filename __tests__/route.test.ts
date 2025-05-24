import { GET, POST } from '@/app/api/payrolls/route';
import { NextRequest } from 'next/server';
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

// Mock auth
jest.mock('@/lib/auth', () => ({
  auth: jest.fn(),
}));

// Mock prisma client
jest.mock('@/lib/db', () => ({
  prisma: {
    payroll: {
      findMany: jest.fn(),
      create: jest.fn(),
    },
  },
}));

describe('Payrolls API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Default auth mock implementation
    (auth as jest.Mock).mockResolvedValue({
      userId: 'user123',
      user: {
        id: 'user123',
        roles: ['admin'],
      },
    });
  });
  
  describe('GET handler', () => {
    test('returns payrolls data for authenticated users', async () => {
      const mockPayrolls = [
        { id: 'payroll1', name: 'May Payroll', clientId: 'client1' },
        { id: 'payroll2', name: 'June Payroll', clientId: 'client1' },
      ];
      
      (prisma.payroll.findMany as jest.Mock).mockResolvedValue(mockPayrolls);
      
      const request = new NextRequest('http://localhost/api/payrolls');
      const response = await GET(request);
      const data = await response.json();
      
      expect(response.status).toBe(200);
      expect(data.payrolls).toEqual(mockPayrolls);
      expect(prisma.payroll.findMany).toHaveBeenCalled();
    });
    
    test('returns 401 for unauthenticated users', async () => {
      (auth as jest.Mock).mockResolvedValue(null);
      
      const request = new NextRequest('http://localhost/api/payrolls');
      const response = await GET(request);
      
      expect(response.status).toBe(401);
      expect(prisma.payroll.findMany).not.toHaveBeenCalled();
    });
    
    test('handles database errors gracefully', async () => {
      (prisma.payroll.findMany as jest.Mock).mockRejectedValue(new Error('Database error'));
      
      const request = new NextRequest('http://localhost/api/payrolls');
      const response = await GET(request);
      
      expect(response.status).toBe(500);
    });
  });
  
  describe('POST handler', () => {
    test('creates a new payroll for admin users', async () => {
      const mockPayroll = {
        name: 'New Payroll',
        clientId: 'client1',
        cycleId: 'cycle1',
        dateTypeId: 'type1',
      };
      
      const mockCreatedPayroll = {
        id: 'newpayroll1',
        ...mockPayroll,
      };
      
      (prisma.payroll.create as jest.Mock).mockResolvedValue(mockCreatedPayroll);
      
      const request = new NextRequest('http://localhost/api/payrolls', {
        method: 'POST',
        body: JSON.stringify(mockPayroll),
      });
      
      const response = await POST(request);
      const data = await response.json();
      
      expect(response.status).toBe(201);
      expect(data.payroll).toEqual(mockCreatedPayroll);
      expect(prisma.payroll.create).toHaveBeenCalledWith({
        data: expect.objectContaining(mockPayroll),
      });
    });
    
    test('returns 401 for unauthenticated users', async () => {
      (auth as jest.Mock).mockResolvedValue(null);
      
      const request = new NextRequest('http://localhost/api/payrolls', {
        method: 'POST',
        body: JSON.stringify({ name: 'New Payroll' }),
      });
      
      const response = await POST(request);
      
      expect(response.status).toBe(401);
      expect(prisma.payroll.create).not.toHaveBeenCalled();
    });
    
    test('returns 403 for non-admin users', async () => {
      (auth as jest.Mock).mockResolvedValue({
        userId: 'user123',
        user: {
          id: 'user123',
          roles: ['viewer'],
        },
      });
      
      const request = new NextRequest('http://localhost/api/payrolls', {
        method: 'POST',
        body: JSON.stringify({ name: 'New Payroll' }),
      });
      
      const response = await POST(request);
      
      expect(response.status).toBe(403);
      expect(prisma.payroll.create).not.toHaveBeenCalled();
    });
    
    test('validates required fields', async () => {
      const request = new NextRequest('http://localhost/api/payrolls', {
        method: 'POST',
        body: JSON.stringify({ /* missing required fields */ }),
      });
      
      const response = await POST(request);
      
      expect(response.status).toBe(400);
      expect(prisma.payroll.create).not.toHaveBeenCalled();
    });
  });
});
