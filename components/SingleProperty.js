import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'

const PLACE_QUERY = gql`
  query PLACE_QUERY($id: ID!) {
    place(where: { id: $id }) {
      id
      name
      description
      size
      numBaths
      numBedrooms
      maxGuests
      pictures {
        id
        url
      }
      pricing {
        perNight
        currency
      }
    }
  }
`

const SingleProperty = props => (
  <Query query={PLACE_QUERY} variables={{ id: props.id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>loading...</p>
      if (error) return <p>error...</p>

      const {
        name,
        description,
        size,
        numBaths,
        numBedrooms,
        maxGuests,
        pictures,
        pricing
      } = data.place

      return (
        <div className="col-md-9 col-sm-9 property-single left-block">
          <Link
            href={{
              pathname: '/addpicture',
              query: { id: props.id }
            }}
          >
            <a className="btn btn-success">Add Pictures</a>
          </Link>

          <div className="title mb-20">
            <h2 className="mb-0 lh-normal">{name}</h2>
            <span>Greams Road / Chennai</span>
            <span className="price primary-bg text-white">
              {pricing.currency} {pricing.perNight}
            </span>
          </div>

          <div className="gallery-wrap thumb-gallery mb-40">
            <span className="tag left text-uppercase primary-bg text-white">
              for rent
            </span>

            {/* <ImageSlider images={imageFilePaths} controls /> */}
          </div>

          <div className="row mb-40">
            <div className="col-sm-4 left-block ppt-info">
              <div className="box border">
                <div className="box-title">
                  <h6 className="mb-0 lh-normal">Property Information</h6>
                </div>

                <div className="detail info">
                  <ul>
                    <li>
                      Size <span>{size}</span>
                    </li>
                    <li>
                      Bathrooms <span>{numBaths}</span>
                    </li>
                    <li>
                      Bedrooms <span>{numBedrooms}</span>
                    </li>
                    <li>
                      Accomadates <span>{maxGuests}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-8">
              <div className="box border content-wrap mb-0">
                <h4 className="title mb-20">Property Description</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>

          <div className="box border mb-40">
            <h4 className="title mb-20">Amenities</h4>
            <ul className="amenities">
              <li>Air Conditioning</li>
              <li>Built-In Wardrobes</li>
              <li>Clinic</li>
              <li>Dishwasher</li>
              <li>Internet</li>
              <li>Park</li>
              <li>School</li>
              <li>Supermarket / Store</li>
              <li>Transportation Hub</li>
            </ul>
          </div>

          <div className="box border mb-40">
            <h4 className="title mb-20">Location Map</h4>
            <div className="map-hold overlay">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.3419418377!2d-74.03927127918426!3d40.75904032921492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2snp!4v1497343556535"
                width="600"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                title="Location Map"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )
    }}
  </Query>
)

export default SingleProperty
