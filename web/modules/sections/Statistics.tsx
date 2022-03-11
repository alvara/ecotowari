import React from 'react'
import PropTypes from 'prop-types'
import {waterSaved, electricitySaved, co2Saved, flyersReduced} from '../../utils/calculations'

Statistics.propTypes = {
  stickers: PropTypes.arrayOf(PropTypes.object),
}

export default function Statistics({stickers}) {

  

  return (
    <div id="portfolio" className="h-100 text-center d-flex flex-column justify-content-center">
      <span className='preTitle'>Ecotowari in Numbers</span>
      <h2>Check how much resources have saved with ecotowari sticker!</h2>
      <div className="row ow-cols-sm-4 row-cols-md-2 row-cols-lg-3">
      Water saved: {Math.round(waterSaved(stickers))} L <br />
      Electricity saved: {Math.round(electricitySaved(stickers))} kWh <br />
      CO2 Saved: {Math.round(co2Saved(stickers))} kg-CO2e <br />
      Flyers reduced: {Math.round(flyersReduced(stickers))} kg <br />
      </div>
  </div>
  )
}
