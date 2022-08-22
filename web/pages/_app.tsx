import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/styles.scss';
import Head from 'next/head';
import Navbar from '../features/layout/Navbar';
import Container from '../components/Container';
import Footer from '../features/layout/Footer';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <title>Home | ecotowari</title>
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Container wrapperClass="bg-dark text-white pt-3 pb-0">
        <Footer />
      </Container>
    </>
  );
}
