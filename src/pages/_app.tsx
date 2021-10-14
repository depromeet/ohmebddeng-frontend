import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '@/components/Layout';
import { initMSW } from '@/lib/msw';
import { GlobalStyle } from '@/styles';
import theme from '@/styles/theme';

initMSW();
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
