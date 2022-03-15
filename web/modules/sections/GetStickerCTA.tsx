import React from 'react'
import PropTypes from "prop-types"
import {useRouter} from 'next/router'
import Image from 'next/image'
import MailchimpSubscribe from "react-mailchimp-subscribe"

GetStickerCTA.propTypes = {
  data: PropTypes.object
}

export default function GetStickerCTA({data}) {
  const router = useRouter()

  const url = "https://ecotowari.us14.list-manage.com/subscribe/post?u=fb888509b6f45d3e61ff06e47&amp;id=5ec65eaa39";


  return (
    <div id="sticker" className="row">
      <span className="text-center preTitle">Get a sticker</span>
      <h2 className="text-center">{data.title[router.locale]}</h2>
        <div className="offset-md-2 col-md-8">
          <Image src='/stickerv1.png' width="400" height="100" layout="responsive" objectFit='contain' alt="test" quality={30} priority/>
          <p>
            <pre>{data.content[router.locale]}</pre>
          </p>
          <div className="text-center mailingList">
            <MailchimpSubscribe url={url}/>
          </div>
        </div>
      </div>
  )
}
