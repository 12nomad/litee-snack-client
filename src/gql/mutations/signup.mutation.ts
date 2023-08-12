import { gql } from 'graphql-request';

// import { Role } from '../../enums/role.enum';
// import { IUser } from '../../stores/user.store';

// export type SIGNUP_MUTATION_INPUT = {
//   name: string;
//   email: string;
//   password: string;
//   role: Role;
// };

// export type SIGNUP_MUTATION_OUTPUT = {
//   signup: {
//     success: boolean;
//     data: IUser;
//   };
// };

// export const SIGNUP_MUTATION = gql`
//   mutation signup_mutation(
//     $role: Role!
//     $name: String!
//     $email: String!
//     $password: String!
//   ) {
//     signup(
//       signupInput: {
//         role: $role
//         name: $name
//         email: $email
//         password: $password
//       }
//     ) {
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

export const SIGNUP = gql`
  mutation signup($signupInput: SignupDto!) {
    signup(signupInput: $signupInput) {
      success
    }
  }
`;
