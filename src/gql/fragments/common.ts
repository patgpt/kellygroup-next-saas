/**
 * Fragment for image assets
 * @description Basic image fields used throughout the application
 */
export const ImageFragment = /* GraphQL */ `
  fragment ImageFragment on Asset {
    url
    title
    description
    width
    height
  }
`;

/**
 * Fragment for SEO fields
 * @description Common SEO fields used across different page types
 */
export const SeoFragment = /* GraphQL */ `
  fragment SeoFragment on ComponentSeo {
    metaTitle
    metaDescription
    openGraphTitle
    openGraphDescription
    openGraphImage {
      ...ImageFragment
    }
    robotsIndex
    robotsFollow
  }
`; 