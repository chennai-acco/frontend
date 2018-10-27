import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PropertyListItem from './PropertyListItem'

import CommonSearchBar from './CommonSearchBar'

const PLACES_QUERY = gql`
  query PLACES_QUERY {
    places {
      id
      name
      shortDescription
      size
      numBaths
      numBedrooms
      maxGuests
      pricing {
        currency
        perNight
      }
      pictures {
        url
      }
    }
  }
`

const PropertyList = () => (
  <div>
    <CommonSearchBar />
    <section className="pri-pad">
      <div className="container">
        <div className="row">
          <Query query={PLACES_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading...</p>
              if (error) return <p>Error...</p>

              return (
                <div className="col-sm-9 col-md-9 left-block">
                  <div className="sec-title icon-wrap">
                    <h3>
                      {data.places.length} properties found in{' '}
                      <span>Chennai Acco</span>
                    </h3>
                  </div>

                  {data.places.map(item => (
                    <PropertyListItem key={item.id} data={item} />
                  ))}
                </div>
              )
            }}
          </Query>
        </div>
      </div>
    </section>
  </div>
)

export default PropertyList
