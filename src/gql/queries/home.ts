
/**
 * Query to fetch home page content
 */
export const HomePageQuery = /* GraphQL */ `
  query HomePageQuery($locale: String!, $preview: Boolean!) {
    pageHomeCollection(locale: $locale, preview: $preview, limit: 1) {
      limit
      skip
      total
      items {
        ...HomePageFragment
      }
    }
  }
`; 