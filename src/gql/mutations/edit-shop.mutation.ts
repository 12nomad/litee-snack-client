import { gql } from 'graphql-request';

export const EDIT_SHOP = gql`
  mutation editShop($editShopInput: EditShopDto!) {
    editShop(editShopInput: $editShopInput) {
      success
    }
  }
`;
