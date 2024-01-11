import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/graphql/apollo-client';
import { ThemeProvider, createTheme } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient(process.env.BE_URL!)}>
      <ThemeProvider
        theme={(outerTheme) =>
          createTheme({
            ...outerTheme,
            palette: {
              mode: 'light',
              primary: {
                main: '#242424',
              },
              secondary: {
                main: '#e5e7eb',
              },
            },
          })
        }
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
