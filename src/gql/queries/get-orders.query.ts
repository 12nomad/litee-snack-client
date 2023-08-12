import { gql } from 'graphql-request';

export const GET_ORDERS = gql`
  query getOrders($getOrdersInput: GetOrdersDto!) {
    getOrders(getOrdersInput: $getOrdersInput) {
      success
      data {
        id
        status

        customer {
          id
          name
        }
        shop {
          id
          name
        }
      }
    }
  }
`;
