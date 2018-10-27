import React from 'react'

const CommonSearchBar = () => (
  <div className="filter-bar filter-bar-2 primary-bg text-white">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <form className="form-inline">
            <div className="form-group">
              <input type="text" placeholder="Enter Keywords" />
            </div>

            <div className="form-group select">
              <label htmlFor="location">
                Location
                <select name="location" id="location">
                  <option value="Chennai">Chennai</option>
                </select>
              </label>
            </div>

            <div className="form-group select">
              <label htmlFor="property-type">
                Property Type
                <select name="property-type" id="property-type">
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                </select>
              </label>
            </div>

            <div className="form-group select">
              <label htmlFor="min-price">
                Min. Price
                <select name="min-price" id="min-price">
                  <option value="">any price</option>
                </select>
              </label>
            </div>

            <div className="form-group select">
              <label htmlFor="max-price">
                Max. Price
                <select name="max-price" id="max-price">
                  <option value="">any price</option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <button type="submit">
                Start Search <i className="fa fa-long-arrow-right" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default CommonSearchBar
