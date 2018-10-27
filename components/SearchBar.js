const SearchBar = () => (
  <div className="filter-bar pri-pad-b">
    <div className="row">
      <div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1">
        <form className="form-inline">
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
)

export default SearchBar
