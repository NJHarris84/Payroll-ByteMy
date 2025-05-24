import type * as Types from '../../generated';

import type { DocumentNode } from 'graphql';
export type FeatureFlagFragment = { __typename?: 'feature_flags', id: any, feature_name: string, is_enabled?: boolean | null, allowed_roles: any, updated_at?: any | null };

export const FeatureFlagFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeatureFlagFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"feature_flags"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"feature_name"}},{"kind":"Field","name":{"kind":"Name","value":"is_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"allowed_roles"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;