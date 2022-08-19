import React from 'react'

export default function Footer() {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <p>Ecotowari © {(new Date().getFullYear())}</p>
      </div>
    </div>
  )
}
