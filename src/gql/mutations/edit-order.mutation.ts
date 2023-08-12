import { gql } from 'graphql-request';

export const EDIT_ORDER = gql`
  mutation editOrder($editOrderInput: EditOrderDto!) {
    editOrder(editOrderInput: $editOrderInput) {
      success
    }
  }
`;
