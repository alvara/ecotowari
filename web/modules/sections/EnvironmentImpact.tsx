import React from 'react'
import PropTypes from "prop-types"
import {useRouter} from 'next/router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDroplet, faLightbulb, faFlask, faTree} from '@fortawesome/free-solid-svg-icons'

EnvironmentImpact.propTypes = {
  data: PropTypes.object
}

export default function EnvironmentImpact({data}) {
  const router = useRouter()

  return (
    <div className="row">
      <span className="text-center preTitle">Why ecotowari</span>
      <h2 className="text-center">{data.title[router.locale]}</h2>
      <p>
      {data.content[router.locale]}
      </p>
        <div className="col-md-6 p-5 border">
          <FontAwesomeIcon icon={faDroplet} size="lg" className='environment-icon'/>
          <pre>{data.water[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 border">
          <FontAwesomeIcon icon={faLightbulb} className='environment-icon'/>
          <pre>{data.electricity[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 border">
            <FontAwesomeIcon icon={faFlask} className='environment-icon'/>
            <pre>{data.chemicals[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 border">
            <FontAwesomeIcon icon={faTree} className='environment-icon'/>
          <pre>{data.wood[router.locale]}</pre>
        </div>
      </div>
  )
}
