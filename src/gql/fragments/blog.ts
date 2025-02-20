
/**
 * Fragment for blog post author details
 */
export const AuthorFragment = /* GraphQL */ `
  fragment AuthorFragment on ComponentAuthor {
    name
    bio
    profilePicture {
      ...ImageFragment
    }
    socialLinksCollection {
      items {
        name
        href
        displayText
        image {
          ...ImageFragment
        }
        
      }
    }
  }
`;

/**
 * Fragment for blog post preview/card
 */
export const BlogPostCardFragment = /* GraphQL */ `
  fragment BlogPostCardFragment on PageBlogPost {
    title
    slug
    # description
    # publishedDate
    # featured
    # featuredImage {
    #   ...ImageFragment
    # }
    # author {
    #   ...AuthorFragment
    # }
  }
`;

/**
 * Fragment for full blog post content
 */
export const BlogPostFragment = /* GraphQL */ `
  fragment BlogPostFragment on PageBlogPost {
    ...BlogPostCardFragment
    # content {
    #   json
    # }
    # seo {
    #   ...SeoFragment
    # }
    # tags
    # relatedPostsCollection {
    #   items {
    #     ...BlogPostCardFragment
    #   }
    # }
  }
`; 