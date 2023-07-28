import { gql } from '@apollo/client';

const SIGNUP_MUTATION = gql`
mutation Mutation($signUpInput: SignUpInput!) {
  signup(signUpInput: $signUpInput) {
    accessToken
    refreshToken
    user {
      id
      username
      email
      firstname
      phone
      lastname
      patronymic
      instagram
      confirmationCode
      createdAt
      updatedAt
    }
  }
}
`;

export default SIGNUP_MUTATION;