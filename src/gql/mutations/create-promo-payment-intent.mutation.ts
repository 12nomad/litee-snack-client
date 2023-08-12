import { gql } from 'graphql-request';

export const CREATE_PROMO_PAYMENT_INTENT = gql`
  mutation createPromotionPaymentIntent(
    $createPromotionPaymentIntentInput: CreatePromotionPaymentIntentDto!
  ) {
    createPromotionPaymentIntent(
      createPromotionPaymentIntentInput: $createPromotionPaymentIntentInput
    ) {
      success
      data {
        clientSecret
        paymentIntent
      }
    }
  }
`;
