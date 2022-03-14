import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

// Define Proptypes for PortfolioItem Component
HeroHeader.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
  orientation: PropTypes.string,
  buttonPath: PropTypes.string,
  buttonText: PropTypes.string,
};

export default function HeroHeader({preTitle, title, subtitle, date, tags = [], img, orientation = 'portrait', buttonPath = '/', buttonText}) {
  return (
    <div className="row header justify-content-center align-items-center text-center text-md-start">
      <div className="col-md-6">

       {preTitle && (
         <span className='preTitle'>{preTitle}</span>
         )}
         
       {title && (
         <h1><pre>{title}</pre></h1>
         )}
         
       {subtitle && (
         <p><pre>{subtitle}</pre></p>
         )}

       {date && (
         <p>{new Date(date).toDateString()}</p>
         )}

        {tags.length > 0 && tags.map((tag)=>(
          <span className='pill mini' key={tag}>{tag}</span>
        ))}

        {buttonPath && buttonText && (
          <Link href={buttonPath}><button className='btn mb-3'>{buttonText}  <span className='btn-carrot'>›</span></button></Link>
        )}

      </div>
      <div className="col-md-6">
        {img && (
          <Image src={img}  width="550" height="300" objectFit={'scale-down'} alt="Background" quality={10} priority={true} />
        )}
      </div>
      <div className='bg-overlay'></div>
    </div>
  )
}

