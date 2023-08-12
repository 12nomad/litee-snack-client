import { gql } from 'graphql-request';

export const GET_OWNER_INDIVIDUAL_SHOP = gql`
  query getOwnerIndividualShop(
    $getOwnerIndividualShopInput: GetOwnerIndividualShopDto!
  ) {
    getOwnerIndividualShop(
      getOwnerIndividualShopInput: $getOwnerIndividualShopInput
    ) {
      success
      data {
        id
        image
        name
        address
        ownerId
        isPromoted
        promotedUntil
        products {
          id
          name
          price
          image
          description
        }
        categories {
          id
          name
          slug
          image
        }
      }
    }
  }
`;
