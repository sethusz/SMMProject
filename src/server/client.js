import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
// import * as Cookies from 'js-cookie';

const httpLink = createHttpLink({
  uri: 'http://ec2-13-53-112-235.eu-north-1.compute.amazonaws.com:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accesstoken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpAuthLink = authLink.concat(httpLink);

const client = new ApolloClient({
  link: httpAuthLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
