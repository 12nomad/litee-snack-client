import { gql } from 'graphql-request';

export const CREATE_PAYMENT_INTENT = gql`
  mutation createPaymentIntent(
    $createPaymentIntentInput: CreatePaymentIntentDto!
  ) {
    createPaymentIntent(createPaymentIntentInput: $createPaymentIntentInput) {
      success
      data {
        clientSecret
        paymentIntent
      }
    }
  }
`;
