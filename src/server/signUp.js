import { gql } from '@apollo/client';

const SIGNUP_MUTATION = gql`
mutation Signup($signUpInput: SignUpInput!) {
  signup(signUpInput: $signUpInput) {
    user {
      firstname
      email
      createdAt
      confirmationCode
      closedAt
      id
      instagram
      lastname
      patronymic
      phone
      updatedAt
      username
    }
    accessToken
    refreshToken
  }
}
`;

export default SIGNUP_MUTATION;