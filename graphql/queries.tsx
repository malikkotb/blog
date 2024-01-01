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

const GET_POST_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      content {
        html
        markdown
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


export { GET_ALL_POSTS, GET_POST_BY_SLUG, GET_ALL_SLUGS };
