
/**
 * Fragment for service overview component
 */
export const ServiceOverviewFragment = /* GraphQL */ `
  fragment ServiceOverviewFragment on ComponentServiceOverview {
    title
    description
    icon {
      ...ImageFragment
    }
    ctaText
    ctaLink
  }
`;

/**
 * Fragment for FAQ items
 */
export const FaqFragment = /* GraphQL */ `
  fragment FaqFragment on ComponentFaq {
    question
    answer
  }
`;

/**
 * Fragment for service page content
 */
export const ServicePageFragment = /* GraphQL */ `
  fragment ServicePageFragment on PageService {
    title
    slug
    description
    featuredImage {
      ...ImageFragment
    }
    serviceOverview {
      ...ServiceOverviewFragment
    }
    faqsCollection {
      items {
        ...FaqFragment
      }
    }
    seo {
      ...SeoFragment
    }
  }
`; 