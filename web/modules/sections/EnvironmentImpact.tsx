import React from 'react'
import PropTypes from 'prop-types'
import {useRouter} from 'next/router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDroplet, faLightbulb, faFlask, faTree} from '@fortawesome/free-solid-svg-icons'

EnvironmentImpact.propTypes = {
  data: PropTypes.object,
}

export default function EnvironmentImpact({data}) {
  const router = useRouter()

  return (
    <>
      <div className="row">
        <div className="offset-md-2 col-md-8 text-center">
          <span className="text-center preTitle">Why ecotowari</span>
          <h2>{data.title[router.locale]}</h2>
          <p className="text-start">{data.content[router.locale]}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 p-5 bg-primary">
          <div className="d-flex align-items-center text-white">
            <FontAwesomeIcon icon={faDroplet} size="lg" className="environment-icon" />
            <h3 className="text-white">{data.watertitle[router.locale]}</h3>
          </div>
          <pre className="text-white">{data.water[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 border">
          <div className="d-flex align-items-center textiwhite">
            <FontAwesomeIcon icon={faLightbulb} className="environment-icon text-primary" />
            <h3 className="text-primary">{data.electricitytitle[router.locale]}</h3>
          </div>
          <pre className="text-primary">{data.electricity[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 border">
          <div className="d-flex align-items-center textiwhite">
            <FontAwesomeIcon icon={faFlask} className="environment-icon text-primary" />
            <h3 className="text-primary">{data.chemicalstitle[router.locale]}</h3>
          </div>
          <pre className="text-primary">{data.chemicals[router.locale]}</pre>
        </div>
        <div className="col-md-6 p-5 bg-primary">
          <div className="d-flex align-items-center textiwhite">
            <FontAwesomeIcon icon={faTree} className="environment-icon text-white" />
            <h3 className="text-white">{data.woodtitle[router.locale]}</h3>
          </div>
          <pre className="text-white">{data.wood[router.locale]}</pre>
        </div>
      </div>
    </>
  )
}
