import React from 'react'

interface ContainerProps {
  children?: React.ReactNode
  wrapperClass?: string
  className?: string
  title?: string
  pretitle?: string
}

// wrap section with bootstrap container
export default function Container({
  children,
  wrapperClass,
  className,
  title = '',
  pretitle = '',
}: ContainerProps) {
  return (
    <div className={`container-wrapper py-5 ${wrapperClass}`}>
      <div className={`container ${className}`}>
        <div className="text-center ">
          {pretitle && <span className=" preTitle">{pretitle}</span>}
          {title && <h2>{title}</h2>}
        </div>
        {children}
      </div>
    </div>
  )
}
