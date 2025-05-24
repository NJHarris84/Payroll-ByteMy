import type * as Types from '../../generated';

import type { DocumentNode } from 'graphql';
export type WorkScheduleFragment = { __typename?: 'work_schedule', id: any, user_id: any, work_day: string, work_hours: any, created_at?: any | null, updated_at?: any | null };

export const WorkScheduleFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkScheduleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"work_schedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"work_day"}},{"kind":"Field","name":{"kind":"Name","value":"work_hours"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;