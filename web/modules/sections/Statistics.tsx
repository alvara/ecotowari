import React from 'react'
import PropTypes from 'prop-types'

Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

export default function Statistics({data}) {

  return (
    <div id="portfolio" className="h-100 text-center d-flex flex-column justify-content-center">
      <span className='preTitle'>Ecotowari in Numbers</span>
      <h2>Check how much resources have saved with ecotowari sticker!</h2>
      <div className="row ow-cols-sm-4 row-cols-md-2 row-cols-lg-3">

      </div>
  </div>
  )
}
