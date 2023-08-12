import { gql } from 'graphql-request';

export const GET_PROMOTED_SHOPS = gql`
  query getPromotedShops {
    getPromotedShops {
      success
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
          name
          slug
          image
        }
      }
    }
  }
`;
