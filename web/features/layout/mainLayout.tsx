// main layout for all pages
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import Container from '../../components/Container';

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Home | Ecotowari</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Container wrapperClass="bg-dark text-white pt-3 pb-0">
        <Footer />
      </Container>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
