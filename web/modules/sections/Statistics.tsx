import React from 'react'
import PropTypes from "prop-types"
import {useRouter} from 'next/router'
import {totalStickers,waterSaved, electricitySaved, co2Saved, flyersReduced} from '../../utils/calculations'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouseUser, faWater, faTree, faLightbulb, faCloud} from '@fortawesome/free-solid-svg-icons'

Statistics.propTypes = {
  stickers: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.object
}

export default function Statistics({stickers, data}) {
  const router = useRouter()

  return (
    <div id="portfolio" className="h-100 text-center justify-content-center">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <span className='preTitle'>Ecotowari in Numbers</span>
          <h2>{data.title[router.locale]}</h2>
          <pre>{data.content[router.locale]}</pre>
        </div>  
      </div>
      <div className="row justify-content-center align-items-center pt-4">
        <div className="col-md-4">
          <div className="card text-primary">
            <FontAwesomeIcon icon={faHouseUser} size="lg" className='circle-icon'/>
            <h3 className="text-primary">{Math.round(totalStickers(stickers))}</h3>
            <h6>{data.totalstickers[router.locale]}</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <FontAwesomeIcon icon={faTree} size="lg" className='circle-icon'/>
            <h3 className="text-primary">{Math.round(flyersReduced(stickers))} kg</h3>
            <h6>{data.flyers[router.locale]}</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-primary">
          <FontAwesomeIcon icon={faWater} size="lg" className='circle-icon'/>
            <h3 className="text-primary">{Math.round(waterSaved(stickers))} L</h3>
            <h6>{data.water[router.locale]}</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <FontAwesomeIcon icon={faLightbulb} size="lg" className='circle-icon'/>
            <h3 className="text-primary">{Math.round(electricitySaved(stickers))} kWh</h3>
            <h6>{data.electricity[router.locale]}</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <FontAwesomeIcon icon={faCloud} size="lg" className='circle-icon'/>
            <h3 className="text-primary">{Math.round(co2Saved(stickers))} kg-CO2e</h3>
            <h6>{data.co2[router.locale]}</h6>
          </div>
        </div>
      </div>
  </div>
  )
}
