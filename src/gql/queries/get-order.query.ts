import { gql } from 'graphql-request';

export const GET_ORDER = gql`
  query getOrder($getOrderInput: GetOrderDto!) {
    getOrder(getOrderInput: $getOrderInput) {
      success
      data {
        id
        status
        total
        createdAt
        updatedAt
        customer {
          id
          name
        }
        driver {
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
