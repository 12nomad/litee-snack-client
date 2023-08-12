import { gql } from 'graphql-request';

export const GET_AUTH_USER = gql`
  query getAuthUser {
    getAuthUser {
      id
      name
      email
      role
      verified
      image
      stripeCustomerId
    }
  }
`;
