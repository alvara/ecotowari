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
    <div className="row">
      <span className="text-center preTitle">Get a sticker</span>
      <h2 className="text-center">{data.title[router.locale]}</h2>
        <div className="offset-md-2 col-md-8">
          <Image src='/stickerv1.png' width="400" height="100" layout="responsive" objectFit='contain' alt="test" className="" quality={30} priority/>
          <p>
            <pre>{data.content[router.locale]}</pre>
          </p>
          <div className="text-center">
            <Link href={'/'}><button className='btn '>{data.buttontext[router.locale]}</button></Link>
          </div>
        </div>
      </div>
  )
}
