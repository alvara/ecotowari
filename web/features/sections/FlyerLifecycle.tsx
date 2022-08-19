import React from 'react'
import InfoCard from '../../components/card/InfoCard'

export default function FlyerLifecycle() {
  return (
    <div className="row">
      <span className="text-center preTitle">Flyer Lifecycle</span>
      <h2 className="text-center">Infographic goes here</h2>
      <div className="col-md-6">
        <InfoCard title="Text Block 1 goes here" content="content is here" />
      </div>
      <div className="col-md-6">
        <InfoCard title="Text Block 2 goes here" content="content is here" />
      </div>
      <div className="col-md-6">
        <InfoCard title="Text Block 3 goes here" content="content is here" />
      </div>
      <div className="col-md-6">
        <InfoCard title="Text Block 4 goes here" content="content is here" />
      </div>
    </div>
  )
}
