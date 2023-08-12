import { gql } from 'graphql-request';

export const GET_SHOP_BY_ID = gql`
  query getShopById($getShopByIdInput: GetShopByIdDto!) {
    getShopById(getShopByIdInput: $getShopByIdInput) {
      success
      data {
        id
        image
        name
        address
        ownerId
        isPromoted
        promotedUntil
        products {
          id
          name
          price
          image
          description
          options {
            extra
            label
          }
        }
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
