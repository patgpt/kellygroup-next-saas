

const AppSettingsFragment = /* GraphQL */ `
  fragment AppSettingsFragment on AppSettings {
   appTitle
    copyrightText
    headerNavigationMenu {
      ...NavigationCollectionFragment
    }
    footerNavigationCollection {
      items {
        ...NavigationCollectionFragment
      }
    }
  }
   
`;
