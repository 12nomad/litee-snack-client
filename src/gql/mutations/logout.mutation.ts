import { gql } from 'graphql-request';

export const LOGOUT = gql`
  mutation logout {
    logout {
      success
    }
  }
`;
