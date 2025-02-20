
/**
 * Fragment for hero section
 */
export const HeroFragment = /* GraphQL */ `
  fragment HeroFragment on ComponentHero {
    heading
    subheading
    backgroundImage {
      ...ImageFragment
    }
    callToAction {
      buttonText
      buttonLink
      heading
      subheading
    }
  }
`;

/**
 * Fragment for feature section
 */
export const FeatureFragment = /* GraphQL */ `
  fragment FeatureFragment on ComponentFeature {
    title
    description
    icon {
      ...ImageFragment
    }
    linkText
    linkHref
  }
`;

/**
 * Fragment for home page content
 */
export const HomePageFragment = /* GraphQL */ `
  fragment HomePageFragment on PageHome {
    slug
    hero {
      ...HeroFragment
    }
    featuresCollection {
      items {
        ...FeatureFragment
      }
    }
    seo {
      ...SeoFragment
    }
  }
`; 