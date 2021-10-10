import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { initMSW } from '@/lib/msw';
import { GlobalStyle } from '@/styles';
import theme from '@/styles/theme';

initMSW();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
