import { gql } from 'graphql-request';

export const GET_PAYMENTS = gql`
  query getPayments {
    getPayments {
      success
      data {
        id
        amount
        stripePaymentIntentId
        createdAt
        updatedAt
        order {
          id
          status
          createdAt
          updatedAt

          shop {
            id
            image
            name
            address
          }
        }
      }
    }
  }
`;
