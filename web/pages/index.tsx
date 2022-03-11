import PropTypes from "prop-types"
import React, {ReactElement} from "react"
// import client from '../client'
// import groq from 'groq'
import Container from '../common/Container'
import Link from "next/link"
import Supabase from '../utils/supabase'
// import Instagram from 'instagram-web-api'

import MainLayout from '../modules/layouts/mainLayout'
import HeroHeader from '../modules/sections/HeroHeader'
import AboutEcotowari from '../modules/sections/AboutEcotowari'
import Statistics from '../modules/sections/Statistics'
import EnvironmentImpact from "../modules/sections/EnvironmentImpact"
import GetStickerCTA from "../modules/sections/GetStickerCTA"
import LatestNews from "../modules/sections/LatestNews"
import FollowUs from "../modules/sections/FollowUs"

// Get the main template for standard pages
Index.getLayout = function getStaticProps(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

Index.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  stickers: PropTypes.arrayOf(PropTypes.object),
  igPosts: PropTypes.arrayOf(PropTypes.object),
}

export async function getStaticProps() {
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
    //   after: 
    // })

    // connect to supabase
    const {data: stickers, error} = await Supabase.from('stickers').select('qty, started_at')

    if(error) {
      throw new Error(error.message)
    }

  return {
    props: {
      stickers,
      // igPosts: igPosts.user.edge_owner_to_timeline_media.edges || []
    }
  }
}


export default function Index({posts, stickers, igPosts}) {

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
      <Container wrapperClass="min-h-100"><Statistics stickers={stickers}/></Container>
      <Container wrapperClass="min-h-100"><GetStickerCTA/></Container>
      {/* <Container wrapperClass="d-flex align-items-center bg-2"><LatestNews posts={posts} /></Container> */}
      <Container wrapperClass="d-flex align-items-center bg-2"><FollowUs igPosts={igPosts}/></Container>
      {/* <Container wrapperClass="min-h-100 d-flex align-items-center"><MySkills tags={showcaseTags}/></Container> */}
      {/* <Container wrapperClass="vh-100" className="h-100"><ContactMe /></Container> */}
    </>
  )
}
