import { TOKEN_KEY } from '@/constants';
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = (url: string) => {
  console.log('url', url);
  return createHttpLink({
    uri: url,
    fetch: (uri, options) => {
      return fetch(uri, {
        ...options,
      });
    },
  });
};

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(TOKEN_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const logMiddleware = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    return response;
  });
});

const apolloClient = (url: string) =>
  new ApolloClient({
    link: ApolloLink.from([logMiddleware, authLink.concat(httpLink(url))]),
    cache: new InMemoryCache(),
  });

export default apolloClient;
