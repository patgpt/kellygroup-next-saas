
/**
 * Query to fetch all services
 */
export const ServicesQuery = /* GraphQL */ `
  query ServicesQuery($locale: String!, $preview: Boolean!) {
    pageServiceCollection(locale: $locale, preview: $preview) {
      limit
      skip
      total
      items {
        ...ServicePageFragment
      }
    }
  }
`;

/**
 * Query to fetch a single service by slug
 */
export const ServiceBySlugQuery = /* GraphQL */ `
  query ServiceBySlugQuery($locale: String!, $preview: Boolean!, $slug: String!) {
    pageServiceCollection(
      locale: $locale,
      preview: $preview,
      limit: 1,
      skip: 0,
      where: { slug: $slug }
    ) {
      items {
        ...ServicePageFragment
      }
    }
  }
`; 