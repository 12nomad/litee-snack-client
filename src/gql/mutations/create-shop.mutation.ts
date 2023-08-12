import { gql } from 'graphql-request';

export const CREATE_SHOP = gql`
  mutation createShop($createShopInput: CreateShopDto!) {
    createShop(createShopInput: $createShopInput) {
      success
    }
  }
`;
