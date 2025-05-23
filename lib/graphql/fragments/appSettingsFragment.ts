import { gql } from '@apollo/client';

export const APP_SETTINGS_FRAGMENT = gql`
  fragment AppSettingsFragment on app_settings {
    id
    permissions
  }
`;
