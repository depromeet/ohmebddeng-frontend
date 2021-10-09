import { initMSW } from '@/lib/msw';
import { GlobalStyle } from '@/styles';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import Head from 'next/head';

initMSW();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
