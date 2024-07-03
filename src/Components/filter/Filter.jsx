const Filter = () => {
  return (
    <div>
      <h1 className="fs-3 fw-normal">
        Search result for <b>London</b>
      </h1>
      <div className="top">
        <div className="items">
          <label htmlFor="city" className="form-label">
            Location
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            className="form-control"
          />
        </div>
      </div>
      <div className="bottom row mt-3">
        <div className=" col-6 col-xl-2">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <select
            className="form-select"
            aria-label="Default select"
            name="type"
            id="type"
          >
            <option value="any">
              Any
            </option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className=" col-6 col-xl-2">
          <label htmlFor="property" className="form-label">
            Property
          </label>
          <select
            className="form-select"
            aria-label="Default select"
            name="property"
            id="property"
          >
            <option value="any" selected>
              Any
            </option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className=" col-6 col-xl-2">
          <label htmlFor="minPrice" className="form-label">
            Min Price
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Any"
            className="form-control"
            min={0}
          />
        </div>
        <div className=" col-6 col-xl-2">
          <label htmlFor="maxPrice" className="form-label">
            Max Price
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Any"
            className="form-control"
            min={0}
          />
        </div>
        <div className=" col-6 col-xl-2">
          <label htmlFor="bedroom" className="form-label">
            Bedroom
          </label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            className="form-control"
            placeholder="Any"
            min={0}
          />
        </div>
        <div className="col-12 col-xl-2 row m-0 mt-4 mt-xl-3 p-2">
          <button type="button" className="btn btn-dark">
            <img src="/search.png" alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
