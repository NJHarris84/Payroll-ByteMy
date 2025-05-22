import { useState, useCallback } from 'react';

export function useForm<T extends Record<string, any>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);
  
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);
  
  const setValue = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);
  
  const validate = useCallback((validationSchema?: (values: T) => Partial<Record<keyof T, string>>) => {
    if (!validationSchema) return true;
    
    const newErrors = validationSchema(values);
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0;
  }, [values]);
  
  const handleSubmit = useCallback((
    onSubmit: (values: T) => void | Promise<void>,
    validationSchema?: (values: T) => Partial<Record<keyof T, string>>
  ) => {
    return async (e: React.FormEvent) => {
      e.preventDefault();
      
      const isValid = validate(validationSchema);
      
      if (isValid) {
        setIsSubmitting(true);
        try {
          await onSubmit(values);
        } finally {
          setIsSubmitting(false);
        }
      }
    };
  }, [values, validate]);
  
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);
  
  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    setValue,
    handleSubmit,
    resetForm,
    setValues,
    setErrors,
    setTouched
  };
}