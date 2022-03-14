import React from 'react'
import PropTypes from "prop-types"
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

GetStickerCTA.propTypes = {
  data: PropTypes.object
}

export default function GetStickerCTA({data}) {
  const router = useRouter()

  return (
    <div id="sticker" className="row">
      <span className="text-center preTitle">Get a sticker</span>
      <h2 className="text-center">{data.title[router.locale]}</h2>
        <div className="offset-md-2 col-md-8">
          <Image src='/stickerv1.png' width="400" height="100" layout="responsive" objectFit='contain' alt="test" className="" quality={30} priority/>
          <p>
            <pre>{data.content[router.locale]}</pre>
          </p>
          <div className="text-center">
    
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            {/* You still need to add the hidden input with the form name to your JSX form */}
            <input type="hidden" name="form-name" value="contact" />
            <label>Your Email: <input type="email" name="email"/></label>

            <button type="submit" className='btn'>{data.buttontext[router.locale]}</button>
          </form>
          </div>
        </div>
      </div>
  )
}
