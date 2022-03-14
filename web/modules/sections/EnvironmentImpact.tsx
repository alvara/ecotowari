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
        <div className="col-md-6 p-5 bg-primary">
          <div className="d-flex align-items-center text-white">
            <FontAwesomeIcon icon={faDroplet} size="lg" className='environment-icon'/>
            <h3 className="text-white">Water</h3>
          </div>
          <pre className='text-white'>{data.water[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 border">
          <div className='d-flex align-items-center textiwhite'>
            <FontAwesomeIcon icon={faLightbulb} className='environment-icon text-primary'/>
            <h3 className="text-primary">Electricity</h3>
          </div>
          <pre className='text-primary'>{data.electricity[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 border">
          <div className='d-flex align-items-center textiwhite'>
            <FontAwesomeIcon icon={faFlask} className='environment-icon text-primary'/>
            <h3 className="text-primary">Water</h3>
          </div>
          <pre className='text-primary'>{data.chemicals[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 bg-primary">
          <div className='d-flex align-items-center textiwhite'>
            <FontAwesomeIcon icon={faTree} className='environment-icon text-white'/>
            <h3 className="text-white">Water</h3>

          </div>
          <pre className='text-white'>{data.wood[router.locale]}</pre>
        </div>
      </div>
  )
}
