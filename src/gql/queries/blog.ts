
/**
 * Query to fetch blog post collection
 */
const BlogPostsQuery = /* GraphQL */ `
  query pageBlogPostCollection(
    $locale: String!,
    $preview: Boolean!,
 
  ) {
    pageBlogPostCollection(
      locale: $locale,
      preview: $preview,
 
    ) {
      items {
        ...BlogPostCardFragment
      }
 
    }
  }
`;

 