import PropTypes from 'prop-types'
import React, {ReactElement} from 'react'
import client from '../client'
import groq from 'groq'
import Container from '../common/Container'
import Supabase from '../utils/supabase'
import {useRouter} from 'next/router'
// import Instagram from 'instagram-web-api'
import MainLayout from '../modules/layouts/mainLayout'
import IndexHeader from '../modules/sections/IndexHeader'
import Statistics from '../modules/sections/Statistics'
import GetStickerCTA from '../modules/sections/GetStickerCTA'
// import LatestNews from "../modules/sections/LatestNews"
import FollowUs from '../modules/sections/FollowUs'
import SentenceSummary from '../modules/sections/SentenceSummary'

// Get the main template for standard pages
Index.getLayout = function getStaticProps(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export async function getStaticProps() {
  // query for home page content
  const homePage = await client.fetch(groq`
      *[_type == "home-page"]{'aboutImage': aboutsection.image.asset->url, ...} | order(publishedAt desc)
    `)

  // Query For news posts
  // const portfolio = await client.fetch(groq`
  //   *[_type == "portfolio"]{
  //     _id,
  //     title,
  //     summary,
  //     slug,
  //     "mainImage": mainImage.asset->url,
  //     "tags": tag[]->{
  //       title,
  //       slug,
  //       _id,
  //       showcase,
  //       "image" : image.asset->url
  //     },
  //     "tagList": tag[]->slug
  //   } | order(publishedAt desc)
  // `)

  // // login to instagram
  // const username = process.env.INSTAGRAM_USERNAME
  // const password = process.env.INSTAGRAM_PSW
  // const igClient = new Instagram({username, password})
  // await igClient.login()

  // // get latest instagram Posts
  // const igPosts = await igClient.getPhotosByUsername({
  //   username: process.env.INSTAGRAM_USERNAME,
  //   first: 8,
  // })

  // sticker data from supabase
  const {data: stickers, error} = await Supabase.from('stickers').select('qty, started_at')
  if (error) {
    throw new Error(error.message)
  }

  return {
    props: {
      stickers,
      homePage,
      // igPosts: igPosts.user.edge_owner_to_timeline_media.edges || []
    },
  }
}

Index.propTypes = {
  homePage: PropTypes.arrayOf(PropTypes.object),
  posts: PropTypes.arrayOf(PropTypes.object),
  stickers: PropTypes.arrayOf(PropTypes.object),
  igPosts: PropTypes.arrayOf(PropTypes.object),
}

export default function Index({posts, stickers, igPosts, homePage}) {
  const router = useRouter()

  // deconstruct data for each section in the page
  const {headersection, aboutsection, statisticsection, ctasection, followsection} = homePage[0]

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
        <SentenceSummary data={aboutsection} />
      </Container>

      {/* Ecotowari Positive Impact */}
      <Container wrapperClass="d-flex align-items-center bg-2 ">
        <Statistics stickers={stickers} data={statisticsection} />
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
  )
}
