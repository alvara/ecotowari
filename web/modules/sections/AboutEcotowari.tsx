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
    <div className="row">
      <span className="text-center preTitle">Who We Are</span>
      <h2 className="text-center">{data.title[router.locale]}</h2>
        <div className="col-6">
          <pre>{data.content[router.locale]}</pre>
        </div>
        <div className="col-6">
          <Image src='/danger-flyers.jpeg' width="300" height="200" layout="responsive" objectFit='contain' alt="test" className="" quality={30} priority/>
        </div>
      </div>
  )
}
