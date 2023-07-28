import { gql } from '@apollo/client';

const SIGNIN_MUTATION = gql`
mutation Mutation($signInInput: SignInInput!) {
  signin(signInInput: $signInInput) {
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

export default SIGNIN_MUTATION;