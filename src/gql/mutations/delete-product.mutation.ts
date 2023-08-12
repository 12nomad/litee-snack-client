import { gql } from 'graphql-request';

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($deleteProductInput: DeleteProductDto!) {
    deleteProduct(deleteProductInput: $deleteProductInput) {
      success
    }
  }
`;
