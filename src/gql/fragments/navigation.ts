/**
 * Fragment for basic navigation item fields
 * @description Contains the essential fields for a navigation item including name, slug, and icon
 */
export const NavigationItemFragment = /* GraphQL */ `
  fragment NavigationItemFragment on ComponentNavigationItem {
     name
     slug
     icon {
      ...ImageFragment
     }
    submenu {
      navigationMenuTitle
      itemsCollection {
        items {
          name
          slug
          icon {
            ...ImageFragment
          }
        }
    }
  }
  }
`;

/**
 * Fragment for navigation collection
 * @description Contains the full navigation structure including items and pagination
 */
export const NavigationCollectionFragment = /* GraphQL */ `
  fragment NavigationCollectionFragment on ComponentNavigation {
     navigationMenuTitle
    itemsCollection{
      items{
        ...NavigationItemFragment
      }
    }
    }
 
`; 