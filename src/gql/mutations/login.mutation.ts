import { gql } from 'graphql-request';

//  export type LOGIN_MUTATION_INPUT = {
//  email: string;
//  password: string;
//  };

//  export type LOGIN_MUTATION_OUTPUT = {
//  signup: {
//  success: boolean;
//  data: IUser;
//  };
//  };

// export const LOGIN_MUTATION = gql`
//   mutation login_mutation($email: String!, $password: String!) {
//     login(loginInput: { email: $email, password: $password }) {
//       success
//       data {
//         id
//         name
//         email
//         role
//       }
//     }
//   }
// `;

export const LOGIN = gql`
  mutation login($loginInput: LoginDto!) {
    login(loginInput: $loginInput) {
      success
    }
  }
`;
