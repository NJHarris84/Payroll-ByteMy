import { gql } from '@apollo/client';

export const APP_SETTINGS_FRAGMENT = gql`
  fragment AppSettingsFragment on app_settings {
    id
    key
    value
    description
    created_at
    updated_at
  }
`;
