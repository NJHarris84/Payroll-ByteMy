import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type AppSettingsFragmentFragment = { __typename?: 'app_settings', id: string, permissions?: any | null };

export const APP_SETTINGS_FRAGMENT = gql`
    fragment AppSettingsFragment on app_settings {
  id
  permissions
}
    `;