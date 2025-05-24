// scripts/organize-graphql.js

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the base directory for GraphQL files - adjusted for script being in scripts/
const PROJECT_ROOT = path.resolve(__dirname, '..');
const BASE_DIR = path.join(PROJECT_ROOT, 'lib', 'graphql');

// Define the file mapping - where each file should go
const fileMapping = {
  // Adjustment Rules Operations
  'CreateAdjustmentRule.graphql': 'mutations/adjustmentRules/',
  'CreateAdjustmentRule.generated.ts': 'mutations/adjustmentRules/',
  'DeleteAdjustmentRule.graphql': 'mutations/adjustmentRules/',
  'DeleteAdjustmentRule.generated.ts': 'mutations/adjustmentRules/',
  'UpdateAdjustmentRule.graphql': 'mutations/adjustmentRules/',
  'UpdateAdjustmentRule.generated.ts': 'mutations/adjustmentRules/',
  'GetAdjustmentRules.graphql': 'queries/adjustmentRules/',
  'GetAdjustmentRules.generated.ts': 'queries/adjustmentRules/',
  'GetAdjustmentRuleByCycleAndType.graphql': 'queries/adjustmentRules/',
  'GetAdjustmentRuleByCycleAndType.generated.ts': 'queries/adjustmentRules/',

  // Client Operations
  'CreateClient.graphql': 'mutations/clients/',
  'CreateClient.generated.ts': 'mutations/clients/',
  'DeleteClient.graphql': 'mutations/clients/',
  'DeleteClient.generated.ts': 'mutations/clients/',
  'UpdateClient.graphql': 'mutations/clients/',
  'UpdateClient.generated.ts': 'mutations/clients/',
  'GetClientById.graphql': 'queries/clients/',
  'GetClientById.generated.ts': 'queries/clients/',
  'GetClientsList.graphql': 'queries/clients/',
  'GetClientsList.generated.ts': 'queries/clients/',
  'GetClientStatistics.graphql': 'queries/clients/',
  'GetClientStatistics.generated.ts': 'queries/clients/',

  // Client External Systems Operations
  'GetClientExternalSystems.graphql': 'queries/clientExternalSystems/',
  'GetClientExternalSystems.generated.ts': 'queries/clientExternalSystems/',

  // External Systems Operations
  'GetExternalSystems.graphql': 'queries/externalSystems/',
  'GetExternalSystems.generated.ts': 'queries/externalSystems/',

  // App Settings Operations
  'GetAppSettings.graphql': 'queries/appSettings/',
  'GetAppSettings.generated.ts': 'queries/appSettings/',

  // Feature Flags Operations
  'GetFeatureFlags.graphql': 'queries/featureFlags/',
  'GetFeatureFlags.generated.ts': 'queries/featureFlags/',

  // Holiday Operations
  'SyncHolidays.graphql': 'mutations/holidays/',
  'SyncHolidays.generated.ts': 'mutations/holidays/',
  'GetHolidays.graphql': 'queries/holidays/',
  'GetHolidays.generated.ts': 'queries/holidays/',
  'GetHolidaysByCountry.graphql': 'queries/holidays/',
  'GetHolidaysByCountry.generated.ts': 'queries/holidays/',

  // Leave Operations
  'CreateLeave.graphql': 'mutations/leave/',
  'CreateLeave.generated.ts': 'mutations/leave/',
  'UpdateLeave.graphql': 'mutations/leave/',
  'UpdateLeave.generated.ts': 'mutations/leave/',
  'GetLeave.graphql': 'queries/leave/',
  'GetLeave.generated.ts': 'queries/leave/',
  'GetLeaveStatistics.graphql': 'queries/leave/',
  'GetLeaveStatistics.generated.ts': 'queries/leave/',

  // Notes Operations
  'AddNote.graphql': 'mutations/notes/',
  'AddNote.generated.ts': 'mutations/notes/',
  'UpdateNote.graphql': 'mutations/notes/',
  'UpdateNote.generated.ts': 'mutations/notes/',
  'GetNotes.graphql': 'queries/notes/',
  'GetNotes.generated.ts': 'queries/notes/',

  // Payroll Cycles Operations
  'GetPayrollCycles.graphql': 'queries/payrollCycles/',
  'GetPayrollCycles.generated.ts': 'queries/payrollCycles/',

  // Payroll Date Types Operations
  'GetPayrollDateTypes.graphql': 'queries/payrollDateTypes/',
  'GetPayrollDateTypes.generated.ts': 'queries/payrollDateTypes/',

  // Payroll Dates Operations
  'GeneratePayrollDates.graphql': 'mutations/payrollDates/',
  'GeneratePayrollDates.generated.ts': 'mutations/payrollDates/',
  'UpdatePayrollDate.graphql': 'mutations/payrollDates/',
  'UpdatePayrollDate.generated.ts': 'mutations/payrollDates/',
  'GetPayrollDates.graphql': 'queries/payrolls/',
  'GetPayrollDates.generated.ts': 'queries/payrolls/',
  'InsertBulkPayrollDates.graphql': 'mutations/payrollDates/',
  'InsertBulkPayrollDates.generated.ts': 'mutations/payrollDates/',

  // Payroll Operations
  'CreatePayroll.graphql': 'mutations/payrolls/',
  'CreatePayroll.generated.ts': 'mutations/payrolls/',
  'DeletePayroll.graphql': 'mutations/payrolls/',
  'DeletePayroll.generated.ts': 'mutations/payrolls/',
  'UpdatePayroll.graphql': 'mutations/payrolls/',
  'UpdatePayroll.generated.ts': 'mutations/payrolls/',
  'UpdatePayrollStatus.graphql': 'mutations/payrolls/',
  'UpdatePayrollStatus.generated.ts': 'mutations/payrolls/',
  'InsertPayroll.graphql': 'mutations/payrolls/',
  'InsertPayroll.generated.ts': 'mutations/payrolls/',
  'GetPayrollById.graphql': 'queries/payrolls/',
  'GetPayrollById.generated.ts': 'queries/payrolls/',
  'GetPayrolls.graphql': 'queries/payrolls/',
  'GetPayrolls.generated.ts': 'queries/payrolls/',
  'GetPayrollList.graphql': 'queries/payrolls/',
  'GetPayrollList.generated.ts': 'queries/payrolls/',
  'GetPayrollsByMonth.graphql': 'queries/payrolls/',
  'GetPayrollsByMonth.generated.ts': 'queries/payrolls/',
  'GetPayrollsMissingDates.graphql': 'queries/payrolls/',
  'GetPayrollsMissingDates.generated.ts': 'queries/payrolls/',
  'GetUserPayrolls.graphql': 'queries/payrolls/',
  'GetUserPayrolls.generated.ts': 'queries/payrolls/',
  'GetPayrollStatistics.graphql': 'queries/payrolls/',
  'GetPayrollStatistics.generated.ts': 'queries/payrolls/',

  // Staff/User Operations
  'CreateStaff.graphql': 'mutations/staff/',
  'CreateStaff.generated.ts': 'mutations/staff/',
  'DeleteStaff.graphql': 'mutations/staff/',
  'DeleteStaff.generated.ts': 'mutations/staff/',
  'UpdateStaff.graphql': 'mutations/staff/',
  'UpdateStaff.generated.ts': 'mutations/staff/',
  'UpdateUser.graphql': 'mutations/staff/',
  'UpdateUser.generated.ts': 'mutations/staff/',
  'GetStaffById.graphql': 'queries/staff/',
  'GetStaffById.generated.ts': 'queries/staff/',
  'GetStaffList.graphql': 'queries/staff/',
  'GetStaffList.generated.ts': 'queries/staff/',

  // Work Schedule Operations
  'CreateWorkSchedule.graphql': 'mutations/workSchedule/',
  'CreateWorkSchedule.generated.ts': 'mutations/workSchedule/',
  'GetUserWorkSchedule.graphql': 'queries/workSchedule/',
  'GetUserWorkSchedule.generated.ts': 'queries/workSchedule/',

  // Dashboard Operations
  'GetDashboardData.graphql': 'queries/dashboard/',
  'GetDashboardData.generated.ts': 'queries/dashboard/',

  // Misc/Other Files
  'simple.graphql': 'test/',
  'simple.generated.ts': 'test/',
  'with-variables.graphql': 'test/',
  'with-variables.generated.ts': 'test/',

  // Move scalars and enums
  'enums.ts': 'types/',
  'scalars.ts': 'types/',
};

// Function to ensure a directory exists
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Created directory: ${directory}`);
  }
}

// Function to move a file
function moveFile(source, destination) {
  try {
    // Check if source file exists
    if (fs.existsSync(source)) {
      // Create destination directory if it doesn't exist
      ensureDirectoryExists(path.dirname(destination));
      
      // Move the file with git to maintain history
      try {
        execSync(`git mv "${source}" "${destination}"`, { stdio: 'inherit' });
        console.log(`Moved: ${source} → ${destination}`);
      } catch (error) {
        // If git move fails (e.g., file not in git), use regular move
        fs.copyFileSync(source, destination);
        fs.unlinkSync(source);
        console.log(`Copied and removed: ${source} → ${destination}`);
      }
    } else {
      console.log(`Warning: Source file not found: ${source}`);
    }
  } catch (error) {
    console.error(`Error moving file ${source}: ${error.message}`);
  }
}

// Function to create index.ts files in directories
function createIndexFiles() {
  const directories = [
    'mutations',
    'mutations/adjustmentRules',
    'mutations/clients',
    'mutations/holidays',
    'mutations/leave',
    'mutations/notes',
    'mutations/payrollDates',
    'mutations/payrolls',
    'mutations/staff',
    'mutations/workSchedule',
    'queries',
    'queries/adjustmentRules',
    'queries/appSettings',
    'queries/clientExternalSystems',
    'queries/clients',
    'queries/dashboard',
    'queries/externalSystems',
    'queries/featureFlags',
    'queries/holidays',
    'queries/leave',
    'queries/notes',
    'queries/payrollCycles',
    'queries/payrollDateTypes',
    'queries/payrolls',
    'queries/staff',
    'queries/workSchedule',
    'types',
    'test'
  ];

  directories.forEach(dir => {
    const dirPath = path.join(BASE_DIR, dir);
    const indexPath = path.join(dirPath, 'index.ts');
    
    ensureDirectoryExists(dirPath);
    
    // Create index.ts if it doesn't exist
    if (!fs.existsSync(indexPath)) {
      fs.writeFileSync(indexPath, '// Export all files from this directory\n');
      console.log(`Created index file: ${indexPath}`);
    }
  });
}

// Main function to organize files
function organizeGraphQLFiles() {
  console.log('Starting GraphQL file organization...');
  console.log(`Project root: ${PROJECT_ROOT}`);
  console.log(`GraphQL base directory: ${BASE_DIR}`);

  // Create necessary directories and index files
  createIndexFiles();
  
  // Move files according to mapping
  Object.entries(fileMapping).forEach(([filename, targetDir]) => {
    const sourceFile = path.join(BASE_DIR, filename);
    const destinationFile = path.join(BASE_DIR, targetDir, filename);
    
    moveFile(sourceFile, destinationFile);
  });

  console.log('GraphQL file organization completed!');
  console.log('You may need to update imports in your code and regenerate types.');
}

// Run the organization
organizeGraphQLFiles();