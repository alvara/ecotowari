import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

// Define Proptypes for PortfolioItem Component
IndexHeader.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
  buttonPath: PropTypes.string,
  buttonText: PropTypes.string,
  textAlign: PropTypes.string,
}

export default function IndexHeader({
  preTitle,
  title,
  subtitle,
  date,
  tags = [],
  img,
  textAlign = 'start', // align text to center or left. left by default
  buttonPath = '/',
  buttonText,
}) {
  return (
    <div className="indexHeader">
      <div className="text-content mx-auto">
        {preTitle && <span className="preTitle">{preTitle}</span>}

        {title && <h1>{title}</h1>}

        {subtitle && <pre>{subtitle}</pre>}

        {date && <p>{new Date(date).toDateString()}</p>}

        {tags.length > 0 &&
          tags.map((tag) => (
            <span className="pill mini" key={tag}>
              {tag}
            </span>
          ))}

        {buttonPath && buttonText && (
          <Link href={buttonPath}>
            <button className="btn mb-3">
              {buttonText} <span className="btn-carrot">›</span>
            </button>
          </Link>
        )}
      </div>
      <div className="indexHeaderImage mb-5 mx-auto">
        {img && (
          <Image
            src={img}
            height={400}
            width={550}
            layout="intrinsic"
            objectFit={'fill'}
            alt="Mailbox"
            quality={10}
            priority={true}
          />
        )}
      </div>
      <div className="bg-overlay"></div>
    </div>
  )
}
