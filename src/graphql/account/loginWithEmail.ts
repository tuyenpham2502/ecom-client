import {gql} from "graphql-request"

export const signInWithEmail = gql`
mutation LoginUser($input: LoginInput!) {
  loginUser(input: $input) {
        acc
  }
}  
`