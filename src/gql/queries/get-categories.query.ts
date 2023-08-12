import { gql } from 'graphql-request';

export const GET_CATEGORIES = gql`
  query getCategories {
    getCategories {
      success
      data {
        id
        image
        name
        slug
      }
    }
  }
`;
