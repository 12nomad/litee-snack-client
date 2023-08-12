import { gql } from 'graphql-request';

export const EDIT_USER_PROFILE = gql`
  mutation editUserProfile($editUserProfileInput: EditUserProfileDto!) {
    editUserProfile(editUserProfileInput: $editUserProfileInput) {
      success
    }
  }
`;
