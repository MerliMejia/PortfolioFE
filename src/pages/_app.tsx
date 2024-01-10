import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/graphql/apollo-client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient(process.env.BE_URL!)}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
