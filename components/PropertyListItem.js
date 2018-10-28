import React from 'react'
import Link from 'next/link'

const PropertyListItem = props => {
  const { data } = props
  let imageSrc = '../static/images/featured3.jpg'
  if (data.pictures.length > 0) {
    imageSrc = data.pictures[0].url
  }
  return (
    <div className="property-wrap mb-20">
      <div className="ppt-list list-vw mb-30 featured">
        <figure>
          <span className="tag left text-uppercase bg-dark">
            {data.pricing.currency} {data.pricing.perNight}
          </span>
          <span className="tag right text-uppercase primary-bg">for rent</span>
          <Link
            href={{
              pathname: '/property',
              query: { id: data.id }
            }}
          >
            <a className="image-effect overlay">
              <img src={imageSrc} alt={data.name} width="349" height="226" />
            </a>
          </Link>
        </figure>

        <div className="content">
          <h4 className="mb-0">
            <Link
              href={{
                pathname: '/property',
                query: { id: data.id }
              }}
            >
              <a>{data.name}</a>
            </Link>
          </h4>

          <div className="mb-15">Chennai</div>

          <div className="content-wrap">
            <p>{data.shortDescription}</p>
          </div>

          <Link
            href={{
              pathname: '/property',
              query: { id: data.id }
            }}
          >
            <a className="btn btn-success faa-parent animated-hover">
              View Details <i className="fa fa-long-arrow-right faa-passing" />
            </a>
          </Link>
        </div>

        <div className="info">
          <ul>
            <li>
              Size &nbsp;&nbsp;-&nbsp;&nbsp; <span>{data.size} </span>
            </li>
            <li>
              Bathrooms &nbsp;&nbsp;-&nbsp;&nbsp; <span>{data.numBaths}</span>{' '}
            </li>
            <li>
              Bedrooms &nbsp;&nbsp;-&nbsp;&nbsp; <span>{data.numBedrooms}</span>{' '}
            </li>
            <li>
              Persons &nbsp;&nbsp;-&nbsp;&nbsp; <span>{data.maxGuests}</span>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PropertyListItem
