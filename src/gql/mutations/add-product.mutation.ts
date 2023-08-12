import { gql } from 'graphql-request';

export const ADD_PRODUCT = gql`
  mutation createProduct($createProductInput: CreateProductDto!) {
    createProduct(createProductInput: $createProductInput) {
      success
    }
  }
`;
