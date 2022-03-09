import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

export default function FollowUs({igPosts}) {
  console.log(igPosts)
  return (
    <div className="row">
      <span className="text-center preTitle">#ecotowari</span>
      <h2 className="text-center">Follow Us</h2>
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
