import { initMSW } from '@/lib/msw';
import { GlobalStyle } from '@/styles';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

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
