import { gql } from 'graphql-request';

export const CREATE_ORDER = gql`
  mutation createOrder($createOrderInput: CreateOrderDto!) {
    createOrder(createOrderInput: $createOrderInput) {
      success
      orderId
    }
  }
`;
