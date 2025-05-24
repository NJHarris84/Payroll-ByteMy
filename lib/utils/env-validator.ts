type EnvConfig = {
  [key: string]: {
    required: boolean;
    type: 'string' | 'boolean' | 'number';
    validate?: (value: string) => boolean;
  }
}

export function validateEnvironment(config: EnvConfig): void {
  const errors: string[] = [];

  Object.entries(config).forEach(([key, spec]) => {
    const value = process.env[key];

    if (spec.required && !value) {
      errors.push(`Missing required environment variable: ${key}`);
    }

    if (value) {
      switch (spec.type) {
        case 'string':
          if (typeof value !== 'string') {
            errors.push(`${key} must be a string`);
          }
          break;
        case 'boolean':
          if (!['true', 'false'].includes(value.toLowerCase())) {
            errors.push(`${key} must be a boolean (true/false)`);
          }
          break;
        case 'number':
          if (isNaN(Number(value))) {
            errors.push(`${key} must be a number`);
          }
          break;
      }

      if (spec.validate && !spec.validate(value)) {
        errors.push(`${key} failed custom validation`);
      }
    }
  });

  if (errors.length > 0) {
    console.error('Environment Validation Errors:', errors);
    throw new Error('Invalid environment configuration');
  }
}

// Example usage in next.config.js or server startup
export const environmentConfig = {
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: { 
    required: true, 
    type: 'string',
    validate: (value) => value.startsWith('pk_')
  },
  CLERK_SECRET_KEY: { 
    required: true, 
    type: 'string',
    validate: (value) => value.startsWith('sk_')
  },
  NEXT_PUBLIC_HASURA_GRAPHQL_URL: { 
    required: true, 
    type: 'string',
    validate: (value) => value.startsWith('https://') 
  }
};
