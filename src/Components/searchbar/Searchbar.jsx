import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    mode: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const changeModeHandler = () =>
    setQuery((prevState) =>
      prevState.mode === "buy"
        ? { ...prevState, mode: "rent" }
        : { ...prevState, mode: "buy" }
    );

  const inputChangeHandler = (e) => {
    setQuery((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(
      `/list?mode=${query.mode}&minPrice=${query.minPrice}&maxPrice=${
        query.maxPrice
      }${query.city ? `&city=${query.city}` : ""}`
    );
  };
  return (
    <div className="searchBar">
      <div className="type row px-3 gap-md-0 ">
        <button
          onClick={changeModeHandler}
          className={`col-6 col-md-3 col-lg-2 btn  btn-lg px-4 rounded-0 ${
            query.mode === "buy" ? "btn-dark" : "btn-light border border-dark"
          }`}
        >
          Buy
        </button>
        <button
          onClick={changeModeHandler}
          className={`col-6 col-md-3  col-lg-2 btn btn-lg px-4 rounded-0 ${
            query.mode === "rent" ? "btn-dark" : "btn-light border border-dark"
          }`}
        >
          Rent
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex-column flex-md-row d-flex  w-100 my-3 gap-2 gap-md-1">
          <input
            type="text"
            name="city"
            id="city"
            className="form-control rounded-0"
            placeholder="City Location"
            onChange={inputChangeHandler}
            value={query.location}
          />
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            min={0}
            max={1000000}
            className="form-control rounded-0"
            placeholder="Min Price"
            onChange={inputChangeHandler}
            value={query.minPrice === 0 ? "" : query.minPrice}
          />
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            min={0}
            max={1000000}
            className="form-control rounded-0"
            placeholder="Max Price"
            onChange={inputChangeHandler}
            value={query.maxPrice === 0 ? "" : query.maxPrice}
          />
          <button
            className="btn btn-dark rounded-0"
            type="submit"
            id="button-addon2"
          >
            <img src="../../../public/search.png" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
