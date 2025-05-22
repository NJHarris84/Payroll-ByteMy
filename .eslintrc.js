module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    // Enforce consistent imports
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    
    // Enforce import style consistency
    'import/no-duplicates': 'error',
    
    // Enforce consistent quotes
    'quotes': ['error', 'single', { avoidEscape: true }],
    
    // Enforce consistent type imports
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    
    // Enforce consistent function types
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    
    // Ban certain imports to prevent circular dependencies
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../**/fragments', '../fragments'],
            message: 'Import fragments from "../../fragments/fileName" instead.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      // Special rules for GraphQL files
      files: ['**/graphql/**/*.ts', '**/graphql/**/*.tsx'],
      rules: {
        // Enforce fragment usage
        'no-restricted-syntax': [
          'error',
          {
            selector: 'TaggedTemplateExpression[tag.name="gql"] > TemplateLiteral:not(:has(TemplateElement[value.raw=/\\.\\.\\.[A-Za-z]+Fragment/]))',
            message: 'GraphQL queries should use fragments instead of inline field selection',
          },
        ],
      },
    },
  ],
};