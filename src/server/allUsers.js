import { gql } from '@apollo/client';

const ALL_USER = gql`
query Items {
  getAllUsers {
    items {
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
    totalCount
  }
}
`;

export default ALL_USER;

