
/**
 * Query to fetch navigation structure
 * @description Retrieves the full navigation menu structure including all items
 */
export const NavigationQuery = /* GraphQL */ `
  query NavigationQuery($locale: String!, $preview: Boolean!) {
    componentNavigationCollection(locale: $locale, preview: $preview) {
      limit
      skip
      total
      items {
        ...NavigationCollectionFragment
      }
    }
  }
`; 