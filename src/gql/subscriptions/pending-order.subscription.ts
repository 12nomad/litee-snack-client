// import { gql } from '@apollo/client';
import { gql } from 'graphql-request';

export const PENDING_ORDER = gql`
  subscription pendingOrder {
    pendingOrder {
      id
      shopId
      status
    }
  }
`;
