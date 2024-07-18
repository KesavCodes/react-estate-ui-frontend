import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "./../../lib/apiRequest";
import UploadWidget from "./../../Components/uploadWidget/UploadWidget";
import styles from "./AddPostPage.module.css";
import { useNavigate } from "react-router-dom";
const AddPostPage = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const updateImages = (image) => {
    setImages((prevImages) => [...prevImages, image]);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.target);
    const inputs = Object.fromEntries(formData);
    console.log(inputs);
    try {
      const response = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images,
        },
        postDetails: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate(`/list/${response.data?.postData.id}`);
    } catch (err) {
      setError(err.response.data?.message);
    }
  };
  return (
    <div className="container-lg row mx-3">
      <div className="col-md-9 col-lg-8 col-xl-7">
        <h1 className="fs-2 mt-5">Add New Post</h1>
        <div>
          <form onSubmit={submitHandler}>
            <div className="gap-3 d-flex justify-content-between mt-3">
              <div>
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="pb-4 mt-3 mb-5">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <ReactQuill
                theme="snow"
                style={{ height: "100px" }}
                value={value}
                onChange={setValue}
              />
            </div>
            <div className=" gap-3 d-flex justify-content-between mt-3">
              <div>
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="bedroom" className="form-label">
                  Bedroom Number
                </label>
                <input
                  min={1}
                  id="bedroom"
                  name="bedroom"
                  type="number"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="bathroom" className="form-label">
                  Bathroom Number
                </label>
                <input
                  min={1}
                  id="bathroom"
                  name="bathroom"
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className=" gap-3 d-flex justify-content-between mt-3">
              <div>
                <label htmlFor="latitude" className="form-label">
                  Latitude
                </label>
                <input
                  id="latitude"
                  name="latitude"
                  type="text"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="longitude" className="form-label">
                  Longitude
                </label>
                <input
                  id="longitude"
                  name="longitude"
                  type="text"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="size" className="form-label">
                  Total Size (sqft)
                </label>
                <input
                  min={0}
                  id="size"
                  name="size"
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className=" gap-3 d-flex justify-content-between mt-3">
              <div>
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <select name="type" className="form-select">
                  <option value="rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
              </div>
              <div>
                <label htmlFor="type" className="form-label">
                  Property
                </label>
                <select name="property" className="form-select">
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div>
                <label htmlFor="utilities" className="form-label">
                  Utilities Policy
                </label>
                <select name="utilities" className="form-select">
                  <option value="owner">Owner is responsible</option>
                  <option value="tenant">Tenant is responsible</option>
                  <option value="shared">Shared</option>
                </select>
              </div>
              <div>
                <label htmlFor="pet" className="form-label">
                  Pet Policy
                </label>
                <select name="pet" className="form-select">
                  <option value="allowed">Allowed</option>
                  <option value="not-allowed">Not Allowed</option>
                </select>
              </div>
            </div>
            <div className=" gap-3 d-flex justify-content-between mt-3">
              <div className="item">
                <label htmlFor="income" className="form-label">
                  Income Policy
                </label>
                <input
                  id="income"
                  name="income"
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="item">
                <label htmlFor="school" className="form-label">
                  School
                </label>
                <input
                  min={0}
                  id="school"
                  name="school"
                  type="number"
                  className="form-control"
                />
              </div>

              <div className="item">
                <label htmlFor="bus" className="form-label">
                  bus
                </label>
                <input
                  min={0}
                  id="bus"
                  name="bus"
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className=" gap-3 d-flex mt-3">
              <div className="item">
                <label htmlFor="restaurant" className="form-label">
                  Restaurant
                </label>
                <input
                  min={0}
                  id="restaurant"
                  name="restaurant"
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <button className="btn btn-lg btn-dark mt-3 w-100">Add</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="col-md-3 col-lg-4 col-xl-5 d-flex justify-content-center align-items-center flex-column gap-4">
        <div
          className={`d-flex gap-2 flex-wrap overflow-y-auto p-0 m-0 ${styles["container-height"]} ${styles["scrollbar-style"]} justify-content-center`}
        >
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              alt=""
              height={200}
              width={220}
              className="border"
              style={{ aspectRatio: "16/9" }}
            />
          ))}
        </div>
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "kesavcodes",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={updateImages}
        />
      </div>
    </div>
  );
};

export default AddPostPage;
