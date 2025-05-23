import { gql } from '@apollo/client';
import { APP_SETTINGS_FRAGMENT } from '../../fragments/appSettingsFragment';

export const GET_APP_SETTINGS = gql`
  query GetAppSettings {
    app_settings {
      ...AppSettingsFragment
    }
  }
  ${APP_SETTINGS_FRAGMENT}
`;
