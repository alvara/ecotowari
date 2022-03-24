import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

FollowUs.propTypes = {
  data: PropTypes.object
}
export default function FollowUs({igPosts,data}) {
  const router = useRouter()
  return (
    <div className="row">
      <span className="text-center preTitle">#ecotowari</span>
      <h2 className="text-center">{data.title[router.locale]}</h2>
      <pre className="text-center">{data.content[router.locale]}</pre>

      <div className="text-center d-flex align-items-center justify-content-center">
        <Link href={`${data.instagram}`} passHref={true}>
          <a id='instagram-link-footer' href={`${data.instagram}`} target="_window">
            <FontAwesomeIcon icon={faInstagram} size="lg" className='social-icon'/>
            <p>Instagram</p>
          </a>
        </Link>

        <Link href={`${data.facebook}`} passHref={true}>
          <a id='facebook-link-footer' href={`${data.facebook}`} target="_window">
            <FontAwesomeIcon icon={faFacebook} size="lg" className='social-icon'/>
           <p>Facebook</p>
          </a>
        </Link>

      </div>

        <div className="row row-cols-4">
          {/* TODO: implement instagram connection workaround */}
          {igPosts && igPosts.map((post) => (
            <div key={post.node.shortcode} className="col">
              <Link href={`https://www.instagram.com/p/${post.node.shortcode}`} passHref={true}>
                <a><Image 
                      src={post.node.thumbnail_src} 
                      width="250" 
                      height="250" 
                      layout="responsive" 
                      objectFit='scale-down' 
                      alt="test" 
                      className=""
                       quality={30}/></a>
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
