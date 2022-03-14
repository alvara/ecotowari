import React from 'react'
import PropTypes from "prop-types"
import {useRouter} from 'next/router'
import {totalStickers,waterSaved, electricitySaved, co2Saved, flyersReduced} from '../../utils/calculations'

Statistics.propTypes = {
  stickers: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.object
}

export default function Statistics({stickers, data}) {
  const router = useRouter()

  return (
    <div id="portfolio" className="h-100 text-center justify-content-center">
      <span className='preTitle'>Ecotowari in Numbers</span>
      <h2>{data.title[router.locale]}</h2>
      <p><pre>{data.content[router.locale]}</pre></p>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4"><div className="card"><h5>{data.totalstickers[router.locale]}</h5>{Math.round(totalStickers(stickers))}</div></div>
        <div className="col-md-4"><div className="card"><h5>{data.water[router.locale]}</h5>{Math.round(waterSaved(stickers))} L</div></div>
        <div className="col-md-4"><div className="card"><h5>{data.electricity[router.locale]}</h5>{Math.round(electricitySaved(stickers))} kWh</div></div>
        <div className="col-md-4"><div className="card"><h5>{data.co2[router.locale]}</h5>{Math.round(co2Saved(stickers))} kg-CO2e</div></div>
        <div className="col-md-4"><div className="card"><h5>{data.flyers[router.locale]}</h5>{Math.round(flyersReduced(stickers))} kg</div></div>
      </div>
  </div>
  )
}
