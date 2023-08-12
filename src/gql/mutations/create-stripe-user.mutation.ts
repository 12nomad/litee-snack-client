import { gql } from 'graphql-request';

export const CREATE_STRIPE_USER = gql`
  mutation createStripeUser($createStripeUserInput: CreateStripeUserDto!) {
    createStripeUser(createStripeUserInput: $createStripeUserInput) {
      success
    }
  }
`;
