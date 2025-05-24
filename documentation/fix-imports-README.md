# Import Path Fixer

This utility script helps you fix import paths throughout your codebase. It can be used to update imports when you reorganize your code, rename files, or move modules around.

## Features

- 🔍 **Dry Run Mode**: Preview changes without modifying files
- 📋 **Configurable Import Mappings**: Define mappings in a JSON file
- 🚀 **Smart Detection**: Handles various import styles (ES modules, CommonJS)
- 🎯 **Targeted Scanning**: Scan only specific directories
- 📊 **Detailed Reporting**: See exactly what would change

## Usage

Basic usage:

```bash
node fix-imports-enhanced.js
```

Dry run (preview changes without modifying files):

```bash
node fix-imports-enhanced.js --dry-run
```

Verbose output:

```bash
node fix-imports-enhanced.js --verbose
```

Custom config file:

```bash
node fix-imports-enhanced.js --config=my-mappings.json
```

Scan specific directories:

```bash
node fix-imports-enhanced.js --include=app,components,lib
```

## Import Mappings

Create a file named `import-mappings.json` in your project root with mappings from old to new import paths:

```json
{
  "// Server/client module mappings": "Group 1: Server/client module mappings",
  "@/lib/auth/auth": "@/lib/auth/auth.server",
  "@/lib/api/apollo-client": "@/lib/api/apollo-client.client",
  
  "// GraphQL query imports": "Group 2: GraphQL query imports",
  "@/lib/graphql/queries": "@/lib/graphql",
  "@/lib/graphql/queries/payrolls": "@/lib/graphql",
  
  "// Relative path fixes": "Group 6: Relative path fixes",
  "./components/": "./components/index",
  "../components/": "../components/index"
}
```

Keys that start with `//` are treated as comments and ignored.

## Current Mappings

We've set up the following import mappings for the Payroll-ByteMy project:

1. **Server/Client Module Mappings**:
   - Map server-only modules to .server extensions
   - Map client-only modules to .client extensions

2. **GraphQL Query Imports**:
   - Consolidate imports from specific query directories to the main graphql index

3. **Hook Imports**:
   - Simplify hook imports to use the main hooks index file

4. **Component Fixes**:
   - Fix specific component import issues (e.g., alert components)

5. **Library Fixes**:
   - Ensure third-party libraries are imported correctly

6. **Relative Path Fixes**:
   - Fix relative imports to use index files

## Best Practices

- **Always run in dry run mode first**:

```bash
node fix-imports-enhanced.js --dry-run
```

- **Make a backup of your codebase before applying changes**:

```bash
git commit -am "Backup before import path fixes"
```

- **Run tests after applying changes**:

```bash
pnpm test
```

## Example Workflow

1. Identify import paths that need to be updated
2. Create or update `import-mappings.json` with your mappings
3. Run a dry run to see what would change:

```bash
node fix-imports-enhanced.js --dry-run --verbose
```

4. If the changes look good, run without the dry run flag:

```bash
node fix-imports-enhanced.js
```

5. Build your project to verify there are no errors:

```bash
pnpm build
```

## Troubleshooting

- **No matches found**: Check your import-mappings.json file for typos
- **Error reading files**: Make sure the script has permissions to read/write files
- **Some imports still incorrect**: You may need more specific mappings
