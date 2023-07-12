import { gql } from "graphql-request";

export const signInWithEmail = gql`
  mutation LoginWithEmail($email: String!, $password: String!) {
    loginWithEmail(input: { email: $email, password: $password }) {
      status
      refreshToken
      token
    }
  }
`;
