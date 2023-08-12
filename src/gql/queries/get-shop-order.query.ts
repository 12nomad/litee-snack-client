import { gql } from 'graphql-request';

export const GET_SHOP_ORDER = gql`
  query getShopOrder($getShopOrderInput: GetShopOrderDto!) {
    getShopOrder(getShopOrderInput: $getShopOrderInput) {
      success
      data {
        id
        status

        orderItems {
          id
          quantity
          orderChoices {
            label
          }

          product {
            id
            name
          }
        }
      }
    }
  }
`;
