import { gql } from 'graphql-request';

export const REFRESH_TOKEN = gql`
  mutation refreshToken {
    refreshToken {
      success
    }
  }
`;
