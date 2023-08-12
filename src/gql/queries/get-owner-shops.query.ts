import { gql } from 'graphql-request';

export const GET_OWNER_SHOPS = gql`
  query getOwnerShops {
    getOwnerShops {
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
          image
          name
          slug
        }
      }
    }
  }
`;
