import React from 'react'
import PropTypes from "prop-types"
import {useRouter} from 'next/router'
import Image from 'next/image'

AboutEcotowari.propTypes = {
  data: PropTypes.object
}

export default function AboutEcotowari({data}) {
  const router = useRouter()

  return (
    <div className="row align-items-center">
      <span className="text-center preTitle">{data.pretitle[router.locale]}</span>
      <h2 className="text-center">{data.title[router.locale]}</h2>
        <div className="col-6">
          {data.content[router.locale]}
        </div>
        <div className="col-6">
          {JSON.stringify(data.aboutImage, null, 2)}
          <Image src='/danger-flyers.jpeg' width="300" height="300" layout="responsive" objectFit='scale-down' alt="test" className="" quality={30} priority/>
        </div>
      </div>
  )
}
