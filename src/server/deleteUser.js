import { gql } from '@apollo/client';

const DELETE_USER = gql`
mutation DeleteUserProfile($userId: Float!) {
  deleteUserProfile(userId: $userId) {
    id
    username
    email
    firstname
    phone
    lastname
    patronymic
    instagram
    confirmationCode
    role
    createdAt
    updatedAt
  }
}
`;

export default DELETE_USER;