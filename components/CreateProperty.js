import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Router from 'next/router'

const CREATE_PROPERTY_MUTATION = gql`
  mutation CREATE_PROPERTY_MUTATION(
    $name: String!
    $size: PLACE_SIZES!
    $shortDescription: String!
    $description: String!
    $maxGuests: Int!
    $numBedrooms: Int!
    $numBeds: Int!
    $numBaths: Int!
    $popularity: Int!
    $host: ID!
    $amenities: AmenitiesInput!
    $pricing: PricingInput!
    $location: LocationInput!
  ) {
    createProperty(
      data: {
        name: $name
        size: $size
        shortDescription: $shortDescription
        description: $description
        maxGuests: $maxGuests
        numBedrooms: $numBedrooms
        numBeds: $numBeds
        numBaths: $numBaths
        popularity: $popularity
        host: $host
        amenities: $amenities
        pricing: $pricing
        location: $location
      }
    ) {
      id
    }
  }
`

class CreateProperty extends Component {
  state = {
    name: 'My House',
    size: 'ENTIRE_APARTMENT',
    shortDescription: 'Short description',
    description: 'Long description',
    maxGuests: 1,
    numBedrooms: 2,
    numBeds: 3,
    numBaths: 4,
    popularity: 0,
    host: this.props.id,
    lat: 100,
    lng: 200,
    address: 'Chennai',
    perNight: 1000,
    cleaningFee: 100,
    securityDeposit: 400,
    extraGuests: 100,
    currency: 'INR',
    elevator: true,
    petsAllowed: false,
    internet: false,
    kitchen: false,
    wirelessInternet: false,
    familyKidFriendly: false,
    freeParkingOnPremises: false,
    hotTub: false,
    pool: false,
    smokingAllowed: false,
    wheelchairAccessible: false,
    breakfast: false,
    cableTv: false,
    suitableForEvents: false,
    dryer: false,
    washer: false,
    indoorFireplace: false,
    tv: false,
    heating: false,
    hangers: false,
    iron: false,
    hairDryer: false,
    doorman: false,
    paidParkingOffPremises: false,
    freeParkingOnStreet: false,
    gym: false,
    airConditioning: false,
    shampoo: false,
    essentials: false,
    laptopFriendlyWorkspace: false,
    privateEntrance: false,
    buzzerWirelessIntercom: false,
    babyBath: false,
    babyMonitor: false,
    babysitterRecommendations: false,
    bathtub: false,
    changingTable: false,
    childrensBooksAndToys: false,
    childrensDinnerware: false,
    crib: false
  }

  handleChange = e => {
    const { name, type, value } = e.target
    let val = value
    if (type === 'number') {
      val = parseFloat(value)
    } else if (type === 'checkbox') {
      val = e.target.checked
    }

    this.setState({
      [name]: val
    })
  }

  render() {
    const {
      lat,
      lng,
      address,
      perNight,
      cleaningFee,
      securityDeposit,
      extraGuests,
      currency,
      elevator,
      petsAllowed,
      internet,
      kitchen,
      wirelessInternet,
      familyKidFriendly,
      freeParkingOnPremises,
      hotTub,
      pool,
      smokingAllowed,
      wheelchairAccessible,
      breakfast,
      cableTv,
      suitableForEvents,
      dryer,
      washer,
      indoorFireplace,
      tv,
      heating,
      hangers,
      iron,
      hairDryer,
      doorman,
      paidParkingOffPremises,
      freeParkingOnStreet,
      gym,
      airConditioning,
      shampoo,
      essentials,
      laptopFriendlyWorkspace,
      privateEntrance,
      buzzerWirelessIntercom,
      babyBath,
      babyMonitor,
      babysitterRecommendations,
      bathtub,
      changingTable,
      childrensBooksAndToys,
      childrensDinnerware,
      crib,
      ...rest
    } = this.state

    const amenities = {
      elevator,
      petsAllowed,
      internet,
      kitchen,
      wirelessInternet,
      familyKidFriendly,
      freeParkingOnPremises,
      hotTub,
      pool,
      smokingAllowed,
      wheelchairAccessible,
      breakfast,
      cableTv,
      suitableForEvents,
      dryer,
      washer,
      indoorFireplace,
      tv,
      heating,
      hangers,
      iron,
      hairDryer,
      doorman,
      paidParkingOffPremises,
      freeParkingOnStreet,
      gym,
      airConditioning,
      shampoo,
      essentials,
      laptopFriendlyWorkspace,
      privateEntrance,
      buzzerWirelessIntercom,
      babyBath,
      babyMonitor,
      babysitterRecommendations,
      bathtub,
      changingTable,
      childrensBooksAndToys,
      childrensDinnerware,
      crib
    }
    const pricing = {
      perNight,
      cleaningFee,
      securityDeposit,
      extraGuests,
      currency
    }
    const location = {
      lat,
      lng,
      address
    }

    const variables = {
      ...rest,
      amenities,
      pricing,
      location
    }

    return (
      <Mutation mutation={CREATE_PROPERTY_MUTATION} variables={variables}>
        {(createProperty, { loading, error }) => (
          <form
            className="property-submit"
            onSubmit={async e => {
              e.preventDefault()
              await createProperty()
              Router.push({
                pathname: '/'
              })
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <div className="row">
                <div className="form-group col-sm-12 col-md-4">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    placeholder="Place Name"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group select col-sm-12 col-md-4">
                  <label htmlFor="size">Size</label>
                  <select
                    name="size"
                    id="size"
                    value={this.state.size}
                    onChange={this.handleChange}
                  >
                    <option value="ENTIRE_HOUSE">ENTIRE HOUSE</option>
                    <option value="ENTIRE_APARTMENT">ENTIRE APARTMENT</option>
                    <option value="ENTIRE_VILLA">ENTIRE VILLA</option>
                    <option value="ENTIRE_PLACE">ENTIRE PLACE</option>
                    <option value="PRIVATE_ROOM">PRIVATE ROOM</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <label htmlFor="shortDescription">Short Description</label>
                  <textarea
                    id="shortDescription"
                    name="shortDescription"
                    value={this.state.shortDescription}
                    placeholder="Short Description"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12 col-md-6">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    value={this.state.description}
                    placeholder="Enter the property description"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <h6>Pricing</h6>
              <div className="row">
                <div className="form-group col-sm-12 col-md-3">
                  <label htmlFor="perNight">Per Night</label>
                  <input
                    type="number"
                    id="perNight"
                    name="perNight"
                    value={this.state.perNight}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12 col-md-3">
                  <label htmlFor="cleaningFee">Cleaning Fee</label>
                  <input
                    type="number"
                    id="cleaningFee"
                    name="cleaningFee"
                    value={this.state.cleaningFee}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12 col-md-3">
                  <label htmlFor="securityDeposit">Security Deposit</label>
                  <input
                    type="number"
                    id="securityDeposit"
                    name="securityDeposit"
                    value={this.state.securityDeposit}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12 col-md-3">
                  <label htmlFor="extraGuests">Extra Guest</label>
                  <input
                    type="number"
                    id="extraGuests"
                    name="extraGuests"
                    value={this.state.extraGuests}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <h6>Amenities</h6>
              <div className="row">
                <div className="form-group col-sm-12 col-md-3">
                  <label htmlFor="maxGuests">Max No. of Guests</label>
                  <input
                    type="number"
                    id="maxGuests"
                    name="maxGuests"
                    value={this.state.maxGuests}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12 col-md-3">
                  <label htmlFor="numBedrooms">No. of Bedrooms</label>
                  <input
                    type="number"
                    id="numBedrooms"
                    name="numBedrooms"
                    value={this.state.numBedrooms}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12 col-md-3">
                  <label htmlFor="numBeds">No. of Beds</label>
                  <input
                    type="number"
                    id="numBeds"
                    name="numBeds"
                    value={this.state.numBeds}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12 col-md-3">
                  <label htmlFor="numBaths">No. of Bathrooms</label>
                  <input
                    type="number"
                    id="numBaths"
                    name="numBaths"
                    value={this.state.numBaths}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-12">
                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="elevator"
                      name="elevator"
                      checked={this.state.elevator}
                      onChange={this.handleChange}
                    />
                    <span>Elevator</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="petsAllowed"
                      name="petsAllowed"
                      checked={this.state.petsAllowed}
                      onChange={this.handleChange}
                    />
                    <span>Pets Allowed</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="internet"
                      name="internet"
                      checked={this.state.internet}
                      onChange={this.handleChange}
                    />
                    <span>Internet</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="kitchen"
                      name="kitchen"
                      checked={this.state.kitchen}
                      onChange={this.handleChange}
                    />
                    <span>Kitchen</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="wirelessInternet"
                      name="wirelessInternet"
                      checked={this.state.wirelessInternet}
                      onChange={this.handleChange}
                    />
                    <span>Wi-Fi</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="familyKidFriendly"
                      name="familyKidFriendly"
                      checked={this.state.familyKidFriendly}
                      onChange={this.handleChange}
                    />
                    <span>Kid Friendly</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="freeParkingOnPremises"
                      name="freeParkingOnPremises"
                      checked={this.state.freeParkingOnPremises}
                      onChange={this.handleChange}
                    />
                    <span>Free Parking</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="hotTub"
                      name="hotTub"
                      checked={this.state.hotTub}
                      onChange={this.handleChange}
                    />
                    <span>Hot Tub</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="pool"
                      name="pool"
                      checked={this.state.pool}
                      onChange={this.handleChange}
                    />
                    <span>Swimming Pool</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="smokingAllowed"
                      name="smokingAllowed"
                      checked={this.state.smokingAllowed}
                      onChange={this.handleChange}
                    />
                    <span>Smoking Allowed</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="wheelchairAccessible"
                      name="wheelchairAccessible"
                      checked={this.state.wheelchairAccessible}
                      onChange={this.handleChange}
                    />
                    <span>Wheel Chair Accessible</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="breakfast"
                      name="breakfast"
                      checked={this.state.breakfast}
                      onChange={this.handleChange}
                    />
                    <span>Complimentary Breakfast</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="cableTv"
                      name="cableTv"
                      checked={this.state.cableTv}
                      onChange={this.handleChange}
                    />
                    <span>Cable TV</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="suitableForEvents"
                      name="suitableForEvents"
                      checked={this.state.suitableForEvents}
                      onChange={this.handleChange}
                    />
                    <span>Event Hall</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="dryer"
                      name="dryer"
                      checked={this.state.dryer}
                      onChange={this.handleChange}
                    />
                    <span>Dryer</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="washer"
                      name="washer"
                      checked={this.state.washer}
                      onChange={this.handleChange}
                    />
                    <span>Washer</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="indoorFireplace"
                      name="indoorFireplace"
                      checked={this.state.indoorFireplace}
                      onChange={this.handleChange}
                    />
                    <span>Indoor Fire Place</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="tv"
                      name="tv"
                      checked={this.state.tv}
                      onChange={this.handleChange}
                    />
                    <span>TV</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="heating"
                      name="heating"
                      checked={this.state.heating}
                      onChange={this.handleChange}
                    />
                    <span>Heater</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="hangers"
                      name="hangers"
                      checked={this.state.hangers}
                      onChange={this.handleChange}
                    />
                    <span>Hangers</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="iron"
                      name="iron"
                      checked={this.state.iron}
                      onChange={this.handleChange}
                    />
                    <span>Iron</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="hairDryer"
                      name="hairDryer"
                      checked={this.state.hairDryer}
                      onChange={this.handleChange}
                    />
                    <span>Hair Dryer</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="doorman"
                      name="doorman"
                      checked={this.state.doorman}
                      onChange={this.handleChange}
                    />
                    <span>Door Man</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="paidParkingOffPremises"
                      name="paidParkingOffPremises"
                      checked={this.state.paidParkingOffPremises}
                      onChange={this.handleChange}
                    />
                    <span>Paid Parking</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="freeParkingOnStreet"
                      name="freeParkingOnStreet"
                      checked={this.state.freeParkingOnStreet}
                      onChange={this.handleChange}
                    />
                    <span>Free Parking on Street</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="gym"
                      name="gym"
                      checked={this.state.gym}
                      onChange={this.handleChange}
                    />
                    <span>Gym</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="airConditioning"
                      name="airConditioning"
                      checked={this.state.airConditioning}
                      onChange={this.handleChange}
                    />
                    <span>Air Conditioning</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="shampoo"
                      name="shampoo"
                      checked={this.state.shampoo}
                      onChange={this.handleChange}
                    />
                    <span>Shampoo</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="essentials"
                      name="essentials"
                      checked={this.state.essentials}
                      onChange={this.handleChange}
                    />
                    <span>Essentials</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="laptopFriendlyWorkspace"
                      name="laptopFriendlyWorkspace"
                      checked={this.state.laptopFriendlyWorkspace}
                      onChange={this.handleChange}
                    />
                    <span>Laptop Friendly Workspace</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="privateEntrance"
                      name="privateEntrance"
                      checked={this.state.privateEntrance}
                      onChange={this.handleChange}
                    />
                    <span>Private Entrance</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="buzzerWirelessIntercom"
                      name="buzzerWirelessIntercom"
                      checked={this.state.buzzerWirelessIntercom}
                      onChange={this.handleChange}
                    />
                    <span>Intercom</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="babyBath"
                      name="babyBath"
                      checked={this.state.babyBath}
                      onChange={this.handleChange}
                    />
                    <span>Baby Bath</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="babyMonitor"
                      name="babyMonitor"
                      checked={this.state.babyMonitor}
                      onChange={this.handleChange}
                    />
                    <span>Baby Monitor</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="babysitterRecommendations"
                      name="babysitterRecommendations"
                      checked={this.state.babysitterRecommendations}
                      onChange={this.handleChange}
                    />
                    <span>Baby Sitter Recommendations</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="bathtub"
                      name="bathtub"
                      checked={this.state.bathtub}
                      onChange={this.handleChange}
                    />
                    <span>Bath Tub</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="changingTable"
                      name="changingTable"
                      checked={this.state.changingTable}
                      onChange={this.handleChange}
                    />
                    <span>Changing Table</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="childrensBooksAndToys"
                      name="childrensBooksAndToys"
                      checked={this.state.childrensBooksAndToys}
                      onChange={this.handleChange}
                    />
                    <span>Childrens Books and Toys</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="childrensDinnerware"
                      name="childrensDinnerware"
                      checked={this.state.childrensDinnerware}
                      onChange={this.handleChange}
                    />
                    <span>Childrens Dinnerware</span>
                  </div>

                  <div className="checkbox-wrap">
                    <input
                      type="checkbox"
                      id="crib"
                      name="crib"
                      checked={this.state.crib}
                      onChange={this.handleChange}
                    />
                    <span>Crib</span>
                  </div>
                </div>
              </div>

              <h6>Location</h6>
              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <label htmlFor="lat">Latitude</label>
                  <input
                    type="number"
                    id="lat"
                    name="lat"
                    value={this.state.lat}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12 col-md-6">
                  <label htmlFor="lng">Longitude</label>
                  <input
                    type="number"
                    id="lng"
                    name="lng"
                    value={this.state.lng}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <label htmlFor="address">Address</label>
                  <textarea
                    name="address"
                    id="address"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <h6>Policies</h6>
              <div className="row">
                <div className="form-group col-sm-12 col-md-4">
                  <label htmlFor="checkInStartTime">Check-in Start time</label>
                  <input
                    type="number"
                    id="checkInStartTime"
                    name="checkInStartTime"
                    value={this.state.checkInStartTime}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12 col-md-4">
                  <label htmlFor="checkInEndTime">Check-in End time</label>
                  <input
                    type="number"
                    id="checkInEndTime"
                    name="checkInEndTime"
                    value={this.state.checkInEndTime}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12 col-md-4">
                  <label htmlFor="checkoutTime">Check-out time</label>
                  <input
                    type="number"
                    id="checkoutTime"
                    name="checkoutTime"
                    value={this.state.checkoutTime}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success btn-lg shadow faa-parent animated-hover"
              >
                Submit
              </button>
            </fieldset>
          </form>
        )}
      </Mutation>
    )
  }
}

export default CreateProperty
