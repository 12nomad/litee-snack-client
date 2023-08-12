import { gql } from 'graphql-request';

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($updatePasswordInput: UpdatePasswordDto!) {
    updatePassword(updatePasswordInput: $updatePasswordInput) {
      success
    }
  }
`;
