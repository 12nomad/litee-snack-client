import { gql } from 'graphql-request';

export const EMAIL_VERIFICATION = gql`
  mutation emailVerification($emailVerificationInput: EmailVerificationDto!) {
    emailVerification(emailVerificationInput: $emailVerificationInput) {
      success
    }
  }
`;
