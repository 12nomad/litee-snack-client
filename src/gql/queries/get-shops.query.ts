import { gql } from 'graphql-request';

export const GET_SHOPS = gql`
  query getShops($getShopsInput: GetShopsDto!) {
    getShops(getShopsInput: $getShopsInput) {
      success
      totalPages
      totalItems
      data {
        id
        image
        name
        address
        ownerId
        isPromoted
        promotedUntil
        categories {
          id
          image
          name
          slug
        }
      }
    }
  }
`;
