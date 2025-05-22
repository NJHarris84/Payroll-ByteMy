import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DataTable } from '@/components/common/data-table';

// Sample data for testing
const mockData = [
  { id: '1', name: 'John Doe', email: 'john@example.com', age: 30 },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', age: 25 },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', age: 40 }
];

// Sample columns definition
const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  { header: 'Age', accessor: 'age' }
];

describe('DataTable Component', () => {
  test('renders table with correct headers and data', () => {
    render(<DataTable data={mockData} columns={columns} />);
    
    // Check headers
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    
    // Check data rows
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
  });
  
  test('renders empty state when no data is provided', () => {
    render(<DataTable data={[]} columns={columns} />);
    
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });
  
  test('handles custom rendering of cells', () => {
    const customColumns = [
      ...columns,
      { 
        header: 'Actions', 
        accessor: 'id', 
        cell: ({ value }: { value: string }) => (
          <button data-testid={`action-${value}`}>Edit</button>
        )
      }
    ];
    
    render(<DataTable data={mockData} columns={customColumns} />);
    
    // Check if custom cell rendering works
    expect(screen.getByTestId('action-1')).toBeInTheDocument();
    expect(screen.getByTestId('action-2')).toBeInTheDocument();
    expect(screen.getByTestId('action-3')).toBeInTheDocument();
  });
  
  test('handles sorting when clicking on sortable headers', () => {
    const sortableColumns = columns.map(col => ({ ...col, sortable: true }));
    
    render(<DataTable data={mockData} columns={sortableColumns} />);
    
    // Initial order: John, Jane, Bob
    const cells = screen.getAllByRole('cell');
    expect(cells[0]).toHaveTextContent('John Doe');
    expect(cells[3]).toHaveTextContent('Jane Smith');
    expect(cells[6]).toHaveTextContent('Bob Johnson');
    
    // Click on Name header to sort ascending
    fireEvent.click(screen.getByText('Name'));
    
    // New order should be: Bob, Jane, John (ascending)
    const cellsAfterSort = screen.getAllByRole('cell');
    expect(cellsAfterSort[0]).toHaveTextContent('Bob Johnson');
    expect(cellsAfterSort[3]).toHaveTextContent('Jane Smith');
    expect(cellsAfterSort[6]).toHaveTextContent('John Doe');
    
    // Click again to sort descending
    fireEvent.click(screen.getByText('Name'));
    
    // New order should be: John, Jane, Bob (descending)
    const cellsAfterSecondSort = screen.getAllByRole('cell');
    expect(cellsAfterSecondSort[0]).toHaveTextContent('John Doe');
    expect(cellsAfterSecondSort[3]).toHaveTextContent('Jane Smith');
    expect(cellsAfterSecondSort[6]).toHaveTextContent('Bob Johnson');
  });
  
  test('supports pagination when enabled', () => {
    // Create more mock data to test pagination
    const largeDataSet = Array(25).fill(null).map((_, index) => ({
      id: String(index + 1),
      name: `Person ${index + 1}`,
      email: `person${index + 1}@example.com`,
      age: 20 + index
    }));
    
    render(
      <DataTable 
        data={largeDataSet} 
        columns={columns} 
        pagination={true}
        pageSize={10}
      />
    );
    
    // First page should show first 10 items
    expect(screen.getByText('Person 1')).toBeInTheDocument();
    expect(screen.getByText('Person 10')).toBeInTheDocument();
    expect(screen.queryByText('Person 11')).not.toBeInTheDocument();
    
    // Navigate to next page
    fireEvent.click(screen.getByText('Next'));
    
    // Second page should show items 11-20
    expect(screen.queryByText('Person 1')).not.toBeInTheDocument();
    expect(screen.getByText('Person 11')).toBeInTheDocument();
    expect(screen.getByText('Person 20')).toBeInTheDocument();
    
    // Navigate to previous page
    fireEvent.click(screen.getByText('Previous'));
    
    // Should be back to first page
    expect(screen.getByText('Person 1')).toBeInTheDocument();
    expect(screen.getByText('Person 10')).toBeInTheDocument();
  });
  
  test('calls onRowClick handler when a row is clicked', () => {
    const handleRowClick = jest.fn();
    
    render(
      <DataTable 
        data={mockData} 
        columns={columns} 
        onRowClick={handleRowClick}
      />
    );
    
    // Click on the first row
    fireEvent.click(screen.getByText('John Doe'));
    
    // Handler should be called with the row data
    expect(handleRowClick).toHaveBeenCalledWith(mockData[0]);
  });
  
  test('handles loading state', () => {
    render(<DataTable data={mockData} columns={columns} isLoading={true} />);
    
    // Should show loading indicator
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // Data should not be visible during loading
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });
});
