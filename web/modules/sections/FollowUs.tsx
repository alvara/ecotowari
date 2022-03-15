import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Link from 'next/link'

FollowUs.propTypes = {
  data: PropTypes.object
}
export default function FollowUs({igPosts,data}) {
  const router = useRouter()
  console.log(igPosts)
  return (
    <div className="row">
      <span className="text-center preTitle">#ecotowari</span>
      <h2 className="text-center">{data.title[router.locale]}</h2>
      <p className="text-center"><pre>{data.content[router.locale]}</pre></p>
        <div className="row row-cols-4">
          {igPosts && igPosts.map((post) => (
            <div key={post.node.shortcode} className="col">
              <Link href={`https://www.instagram.com/p/${post.node.shortcode}`} passHref={true}>
                <a><Image 
                      src={post.node.thumbnail_src} 
                      blurDataURL={post.node.thumbnail_src} 
                      placeholder="blur"
                      width="250" 
                      height="250" 
                      layout="responsive" 
                      objectFit='scale-down' 
                      alt="test" 
                      className=""
                      quality={30}
                    /></a>
              </Link>
            </div>
          )
              
          )}
        </div>
      </div>
  )
}

FollowUs.propTypes = {
  igPosts: PropTypes.array
}
