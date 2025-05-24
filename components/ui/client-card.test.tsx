import { render, screen } from "@testing-library/react";

import { ClientCard } from "@/components/client";

import { mockClients } from "../../../../__mocks__/mockData";

describe('ClientCard', () => {
  const mockClient = mockClients[0];
  
  test('renders client details correctly', () => {
    render(<ClientCard client={mockClient} />);
    
    // Check if client name is displayed
    expect(screen.getByText(mockClient.name)).toBeInTheDocument();
    
    // Check if contact person is displayed
    expect(screen.getByText(mockClient.contact_person)).toBeInTheDocument();
    
    // Check if contact email is displayed
    expect(screen.getByText(mockClient.contact_email)).toBeInTheDocument();
    
    // Check if contact phone is displayed
    expect(screen.getByText(mockClient.contact_phone)).toBeInTheDocument();
    
    // Check if active status is displayed
    expect(screen.getByText('Active')).toBeInTheDocument();
  });
  
  test('displays inactive status for inactive clients', () => {
    const inactiveClient = {
      ...mockClient,
      active: false,
    };
    
    render(<ClientCard client={inactiveClient} />);
    
    // Check if inactive status is displayed
    expect(screen.getByText('Inactive')).toBeInTheDocument();
  });
  
  test('handles missing client data gracefully', () => {
    const incompleteClient = {
      ...mockClient,
      contact_person: null,
      contact_email: null,
      contact_phone: null,
    };
    
    render(<ClientCard client={incompleteClient} />);
    
    // Should display "N/A" for missing data
    expect(screen.getAllByText('N/A').length).toBeGreaterThan(0);
  });
  
  test('displays client creation date in the correct format', () => {
    render(<ClientCard client={mockClient} />);
    
    // Format date according to locale
    const createdDate = new Date(mockClient.created_at).toLocaleDateString();
    
    // Check if formatted date is displayed
    expect(screen.getByText(createdDate)).toBeInTheDocument();
  });
});
