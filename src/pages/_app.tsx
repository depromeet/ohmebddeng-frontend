import { initMSW } from '@/lib/msw';
import { GlobalStyle } from '@/styles';
import type { AppProps } from 'next/app';

initMSW();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {GlobalStyle}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
