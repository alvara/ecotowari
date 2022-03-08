import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import InfoCard from '../widgets/InfoCard'
export default function Statistics({portfolio, tags}) {

  const [selected, setSelected] = useState("_featured")

  const [data, setData] = useState([])
  
  useEffect(()=>{
    const filteredItems = portfolio.filter((item) => item.tagList.includes(selected))
    setData(filteredItems)
  },[portfolio, selected])

  return (
    <div id="portfolio" className="h-100 text-center d-flex flex-column justify-content-center">
    <span className='preTitle'>Ecotowari in Numbers</span>
    <h2>Check how much resources have saved with ecotowari sticker!</h2>
    <div className='row'>
      <div className='col'>
          {tags.length > 0 && tags.map(
            ({title, slug, _id}) => (
              <span onClick={()=>setSelected(slug)} key={_id} className={`pill ${selected === slug ? 'active' : ''}`} >{title}</span>
            )
          )}
      </div>
    </div>
    <div className="row ow-cols-sm-4 row-cols-md-2 row-cols-lg-3">
      {data.length > 0 && data.map(({_id, title, summary, mainImage, slug, tags})=>
        (
          <div key={_id}><InfoCard className='portfolioCard' href={`/portfolio/${slug.current}`} title={title} subtitle={summary} mainImage={mainImage} tags={tags} /></div>
        )
      )}
    </div>
  </div>
  )
}

Statistics.propTypes = {
  // Portfolio Tags
  portfolio: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.object)
}