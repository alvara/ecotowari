import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import {useRouter} from 'next/router'

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
            <div key={post.id} className="col">
              <Image src={post.node.thumbnail_src} width="250" height="250" layout="responsive" objectFit='scale-down' alt="test" className="" quality={30}/>              
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
