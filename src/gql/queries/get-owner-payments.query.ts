import { gql } from 'graphql-request';

export const GET_OWNER_PAYMENTS = gql`
  query getOwnerPayments {
    getOwnerPayments {
      success
      data {
        id
        amount
        stripePaymentIntentId
        status
        currency
        createdAt
        updatedAt
        type
        promoDuration
        shop {
          id
          image
          name
          address
          isPromoted
          promotedUntil
        }
      }
    }
  }
`;
