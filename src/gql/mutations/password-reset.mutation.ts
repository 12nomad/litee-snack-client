import { gql } from 'graphql-request';

export const PASSWORD_RESET = gql`
  mutation passwordReset($passwordResetInput: PasswordResetDto!) {
    passwordReset(passwordResetInput: $passwordResetInput) {
      success
    }
  }
`;
