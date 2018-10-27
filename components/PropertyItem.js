import React from 'react'

import CommonSearchBar from './CommonSearchBar'
import SingleProperty from './SingleProperty'

const PropertyItem = props => {
  return (
    <div>
      <CommonSearchBar />

      <section className="pri-pad">
        <div className="container">
          <div className="row">
            <SingleProperty id={props.id} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default PropertyItem
