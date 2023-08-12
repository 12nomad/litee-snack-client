import { gql } from 'graphql-request';

export const VERIFY_RESET = gql`
  mutation verifyReset($verifyResetInput: VerifyResetDto!) {
    verifyReset(verifyResetInput: $verifyResetInput) {
      success
    }
  }
`;
