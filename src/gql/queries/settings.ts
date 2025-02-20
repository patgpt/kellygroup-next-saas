/**
 * Query to fetch global application settings
 * @description Retrieves site-wide configuration including navigation menus
 */
export const AppSettingsQuery = /* GraphQL */ `
  query AppSettingsQuery($locale: String!, $preview: Boolean!) {

    appSettingsCollection(locale: $locale, preview: $preview) {
      limit
      skip
      total
      items {
        ...AppSettingsFragment
      }
    }
  }
`; 