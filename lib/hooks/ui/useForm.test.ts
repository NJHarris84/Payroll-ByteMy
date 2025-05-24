import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from "@/lib/hooks/ui/useForm";

describe('useForm Hook', () => {
  const initialValues = {
    name: '',
    email: '',
    age: 0
  };

  test('should initialize with provided values', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    expect(result.current.values).toEqual(initialValues);
  });

  test('should update values when handleChange is called', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John Doe' }
      } as React.ChangeEvent<HTMLInputElement>);
    });
    
    expect(result.current.values.name).toBe('John Doe');
  });

  test('should update values when setFieldValue is called', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    act(() => {
      result.current.setFieldValue('email', 'john@example.com');
    });
    
    expect(result.current.values.email).toBe('john@example.com');
  });

  test('should handle number inputs correctly', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    act(() => {
      result.current.handleChange({
        target: { name: 'age', value: '25' }
      } as React.ChangeEvent<HTMLInputElement>);
    });
    
    // The hook should convert string numbers to actual numbers if the initial value was a number
    expect(result.current.values.age).toBe(25);
  });

  test('should reset form to initial values', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    // First change some values
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John Doe' }
      } as React.ChangeEvent<HTMLInputElement>);
      
      result.current.handleChange({
        target: { name: 'email', value: 'john@example.com' }
      } as React.ChangeEvent<HTMLInputElement>);
    });
    
    // Then reset the form
    act(() => {
      result.current.resetForm();
    });
    
    // Values should be back to initial state
    expect(result.current.values).toEqual(initialValues);
  });

  test('should set all form values at once', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    const newValues = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      age: 30
    };
    
    act(() => {
      result.current.setValues(newValues);
    });
    
    expect(result.current.values).toEqual(newValues);
  });

  test('should handle validation', () => {
    const validate = (values: typeof initialValues) => {
      const errors: Partial<Record<keyof typeof values, string>> = {};
      
      if (!values.name) {
        errors.name = 'Name is required';
      }
      
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid';
      }
      
      if (values.age < 18) {
        errors.age = 'Age must be at least 18';
      }
      
      return errors;
    };
    
    const { result } = renderHook(() => useForm(initialValues, { validate }));
    
    // Form should be invalid initially (all fields empty/zero)
    expect(result.current.isValid).toBe(false);
    
    // Add some invalid data
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John Doe' }
      } as React.ChangeEvent<HTMLInputElement>);
      
      result.current.handleChange({
        target: { name: 'email', value: 'invalid-email' }
      } as React.ChangeEvent<HTMLInputElement>);
      
      result.current.handleChange({
        target: { name: 'age', value: '15' }
      } as React.ChangeEvent<HTMLInputElement>);
    });
    
    // Validate the form
    act(() => {
      result.current.validateForm();
    });
    
    // Check errors
    expect(result.current.errors.email).toBe('Email is invalid');
    expect(result.current.errors.age).toBe('Age must be at least 18');
    expect(result.current.isValid).toBe(false);
    
    // Fix the errors
    act(() => {
      result.current.handleChange({
        target: { name: 'email', value: 'john@example.com' }
      } as React.ChangeEvent<HTMLInputElement>);
      
      result.current.handleChange({
        target: { name: 'age', value: '25' }
      } as React.ChangeEvent<HTMLInputElement>);
    });
    
    // Validate again
    act(() => {
      result.current.validateForm();
    });
    
    // Form should be valid now
    expect(result.current.errors).toEqual({});
    expect(result.current.isValid).toBe(true);
  });
});
