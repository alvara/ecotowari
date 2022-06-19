import React, {ReactElement} from 'react'
import groq from 'groq'
import PropTypes from 'prop-types'
import {useRouter} from 'next/router'

import client from '../client'
import MainLayout from '../modules/layouts/mainLayout'
import Container from '../common/Container'
import HeroHeader from '../modules/sections/HeroHeader'
import InfoCard from '../modules/widgets/InfoCard'

// view all blog posts
const About = ({posts}) => {
  const router = useRouter()
  console.log(router)
  return (
    <>
      <Container wrapperClass="header-wrapper">
        <HeroHeader title={'Our Mission'} subtitle={'Feed of news articles will go here'} />
      </Container>
      <Container></Container>
    </>
  )
}

// Get the main template for standard pages
About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

About.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
  *[_type == "post" && publishedAt < now()][0..2]{
    "author": author->name,
    "categories": categories[]->{
      _id,
      title
    },
    content,
    publishedAt,
    slug,
    title,
    _createdAt,
    _id,
    "mainImage": mainImage.asset->url,
    _rev,
    _type,
    _updateAt,
    "authorImg": author->image,
  } | order(publishedAt desc)
`)
  return {
    props: {
      posts,
    },
  }
}

export default About
