import PropTypes from "prop-types"
import React, {ReactElement} from "react"
import client from '../client'
import groq from 'groq'
import Container from '../common/Container'
import Link from "next/link"
import Instagram from 'instagram-web-api'

import MainLayout from '../modules/layouts/mainLayout'
import HeroHeader from '../modules/sections/HeroHeader'
import AboutEcotowari from '../modules/sections/AboutEcotowari'
import Statistics from '../modules/sections/Statistics'
import EnvironmentImpact from "../modules/sections/EnvironmentImpact"
import GetStickerCTA from "../modules/sections/GetStickerCTA"
import LatestNews from "../modules/sections/LatestNews"
import FollowUs from "../modules/sections/FollowUs"


// index.js
export default function Index({posts, portfolio, tags, igPosts}) {

  console.log(igPosts)
  return (
    <>
      <Container wrapperClass="vh-100-w-nav pb-0" className="h-100 d-flex flex-column justify-content-center">
        <div>
          <HeroHeader 
            title={'One Sticker to protect our planet'}
            subtitle={'ecotowari is a green initiative to reduce paper waste. Our goal is to free your mailbox from unsolicited flyers. Think of it as a real-life spam filter!'}
          />
          
          <Link href={'/get-sticker'}><button className='btn'>Get a Sticker</button></Link>

          <div className="bg-image-wrapper">        
            {/* <Image src={'/bg-wood.png'} layout="fill" objectFit={'contain'} alt="Background" quality={50} priority={true} /> */}
          </div>
        </div>
      </Container>
      <Container wrapperClass="min-h-100 d-flex align-items-center bg-2"><AboutEcotowari /></Container>
      <Container wrapperClass="min-h-100 d-flex align-items-center bg-2"><EnvironmentImpact /></Container>
      <Container wrapperClass="min-h-100"><Statistics portfolio={portfolio} tags={tags}/></Container>
      <Container wrapperClass="min-h-100"><GetStickerCTA/></Container>
      <Container wrapperClass="d-flex align-items-center bg-2"><LatestNews posts={posts} /></Container>
      <Container wrapperClass="d-flex align-items-center bg-2"><FollowUs/></Container>
      {/* <Container wrapperClass="min-h-100 d-flex align-items-center"><MySkills tags={showcaseTags}/></Container> */}
      {/* <Container wrapperClass="vh-100" className="h-100"><ContactMe /></Container> */}
    </>
  )
}

// Get the main template for standard pages
Index.getLayout = function getServerSideProps(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

Index.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  igPosts: PropTypes.arrayOf(PropTypes.object),
  portfolio: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.object),
}

// get static generated content
export async function getStaticProps() {
  // query for blog posts 
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()][0..2]{
      "author": author->name,
      "categories": categories[]->{
        _id,
        title,
        slug
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

    // Query For Portfolio Tags
    const portfolio = await client.fetch(groq`
      *[_type == "portfolio"]{
        _id,
        title,
        summary,
        slug,
        "mainImage": mainImage.asset->url,
        "tags": tag[]->{
          title,
          slug,
          _id,
          showcase,
          "image" : image.asset->url
        },
        "tagList": tag[]->slug
      } | order(publishedAt desc)
    `)

    // Count number of instances of a tag and store it
    const tagsObj = {}
    portfolio.forEach(item => {
      item.tags.forEach(tag => {
        // if no tag exists yet, add it
        if(!tagsObj[tag.slug]){
          tagsObj[tag.slug] = {
            title: tag.title,
            slug: tag.slug,
            _id: tag._id,
            showcase: tag.showcase,
            image: tag.image,
            count: 1
          }
        // tag already exists, increment counter
        } 
        else {
          tagsObj[tag.slug].count += 1
        }
      })
    })

    // convert object of tags to array
    let tags = []
    Object.entries(tagsObj).forEach(
      ([key,value]) => tags.push(value)
    )

    // sort tags by slug
    tags = tags.sort((a,b) => (a.slug > b.slug) ? 1 : ((b.slug > a.slug) ? -1 : 0))

    // login to instagram
    const username = process.env.INSTAGRAM_USERNAME
    const password = process.env.INSTAGRAM_PSW
    const igClient = new Instagram({username, password})
    await igClient.login()
  
    // get latest instagram Posts
    const igPosts = await igClient.getPhotosByUsername({
      username: process.env.INSTAGRAM_USERNAME,
      first: 8
    })

  return {
    props: {
      posts,
      portfolio,
      tags,
      igPosts: igPosts.user.edge_owner_to_timeline_media.edges || []
    }
  }
}
