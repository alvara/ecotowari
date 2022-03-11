import React from 'react'
import PropTypes from 'prop-types'
import { avgWastePerDay } from '../../utils/calculations'

Statistics.propTypes = {
  stickers: PropTypes.arrayOf(PropTypes.object),
}

export default function Statistics({stickers}) {

  

  return (
    <div id="portfolio" className="h-100 text-center d-flex flex-column justify-content-center">
      <span className='preTitle'>Ecotowari in Numbers</span>
      <h2>Check how much resources have saved with ecotowari sticker!</h2>
      <div className="row ow-cols-sm-4 row-cols-md-2 row-cols-lg-3">
      {avgWastePerDay(stickers)}

      </div>
  </div>
  )
}
