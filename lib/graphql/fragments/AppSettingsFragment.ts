import type * as Types from '../../generated';

import type { DocumentNode } from 'graphql';
export type AppSettingsFragment = { __typename?: 'app_settings', id: string, permissions?: any | null };

export const AppSettingsFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AppSettingsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"app_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode;