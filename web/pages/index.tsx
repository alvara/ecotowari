import PropTypes from 'prop-types';
import client from '../client';
import groq from 'groq';
import Container from '../components/Container';
import { useRouter } from 'next/router';
import IndexHeader from '../components/header/IndexHeader';
import Statistics from '../features/sections/Statistics';
import GetStickerCTA from '../features/sections/GetStickerCTA';
import FollowUs from '../features/sections/FollowUs';
import SentenceSummary from '../features/sections/SentenceSummary';
import { getStickers } from '../services/repository/getStickers';

export async function getStaticProps() {
  // query for home page content
  const homePage = await client.fetch(groq`
      *[_type == "home-page"]{'aboutImage': aboutsection.image.asset->url, ...} | order(publishedAt desc)
    `);

  const stickers = await getStickers();
  console.log('BEFORE LOAD STICKERS: ', stickers);

  return {
    props: {
      stickers: stickers,
      homePage,
    },
    revalidate: 3,
  };
}

Index.propTypes = {
  homePage: PropTypes.arrayOf(PropTypes.object),
  stickers: PropTypes.arrayOf(PropTypes.object),
};

export default function Index({ stickers, homePage }) {
  const router = useRouter();

  // deconstruct data for each section in the page
  const {
    headersection,
    // aboutsection,
    // statisticsection,
    ctasection,
    followsection,
  } = homePage[0];

  return (
    <>
      <Container wrapperClass="header-wrapper index-wrapper">
        <IndexHeader
          title={headersection.title[router.locale]}
          subtitle={headersection.subtitle[router.locale]}
          buttonPath={headersection.buttonpath}
          buttonText={headersection.buttontext[router.locale]}
          img={'/mailbox-split-green.png'}
        />
      </Container>

      {/* 1 Sentence Summary */}
      <Container wrapperClass="d-flex align-items-center bg-1">
        <SentenceSummary />
      </Container>

      {/* Ecotowari Positive Impact */}
      <Container wrapperClass="d-flex align-items-center bg-2 ">
        <Statistics stickers={stickers} />
      </Container>

      {/* CTA */}
      <Container wrapperClass="header-wrapper d-flex align-items-center bg-3">
        <GetStickerCTA data={ctasection} />
      </Container>

      {/* Socials */}
      <Container wrapperClass="d-flex align-items-center bg-2">
        <FollowUs data={followsection} />
      </Container>

      {/* <Container wrapperClass="d-flex align-items-center bg-2"><LatestNews posts={posts} /></Container> */}
    </>
  );
}
