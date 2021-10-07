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
      <Head>
        <link
          rel="preload"
          href="assets/fonts/SB-Aggro-OTF-B.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="assets/fonts/SB-Aggro-OTF-M.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="assets/fonts/SB-Aggro-OTF-L.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
