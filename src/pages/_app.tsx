import { SessionProvider } from 'next-auth/react';
import '@twinkle/styles/globals.css';
import type { AppProps } from 'next/app';
import { trpc } from '@twinkle/utils/trpc';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default trpc.withTRPC(App);
