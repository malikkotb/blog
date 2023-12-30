import { gql } from "@apollo/client";

const GET_ALL_POSTS = gql`
  query Assets {
    posts {
      content {
        html
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
      author {
        name
        avatar {
          url
        }
      }
      datePublished
      id
      slug
      title
      description
    }
  }
`;

const GET_ALL_SLUGS = gql`
  query Assets {
    posts {
      slug
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slugUrl: String!) {
    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_INDIVIDUAL_POST, GET_ALL_SLUGS };
