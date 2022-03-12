import React from 'react'
import PropTypes from "prop-types"
import {useRouter} from 'next/router'

EnvironmentImpact.propTypes = {
  data: PropTypes.object
}

export default function EnvironmentImpact({data}) {
  const router = useRouter()

  return (
    <div className="row">
      <span className="text-center preTitle">Impact On Environment</span>
      <h2 className="text-center">{data.title[router.locale]}</h2>
        <div className="col-md-6 p-5 border">
          <pre>{data.water[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 border">
          <pre>{data.electricity[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 border">
            <pre>{data.chemicals[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 border">
          <pre>{data.wood[router.locale]}</pre>
        </div>
      </div>
  )
}
