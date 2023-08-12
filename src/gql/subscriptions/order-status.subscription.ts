// import { gql } from '@apollo/client';
import { gql } from 'graphql-request';

export const ORDER_STATUS = gql`
  subscription orderStatus($orderStatusInput: OrderStatusDto!) {
    orderStatus(orderStatusInput: $orderStatusInput) {
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
`;
