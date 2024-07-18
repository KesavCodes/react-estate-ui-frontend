import { useState, useContext } from "react";

import { AuthContext } from "./../../Context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../Components/uploadWidget/UploadWidget";

const ProfileUpdatePage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser, onLoginHandler } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const navigate = useNavigate();
  const updateInfoHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    const { username, password, email } = Object.fromEntries(formData);
    try {
      await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar,
      });
      onLoginHandler({ ...currentUser, username, email, avatar });
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className="container-lg d-flex justify-content-center align-items-center"
      style={{ height: 500 }}
    >
      <div className="pe-5 w-75">
        <h1 className="h3 mb-3 fw-normal">Update Info</h1>
        <form className="d-flex" onSubmit={updateInfoHandler}>
          <div className="w-75">
            <div className="form-floating my-3">
              <input
                name="username"
                type="text"
                className="form-control"
                id="floatingUserName"
                placeholder="name@example.com"
                defaultValue={currentUser.username}
              />
              <label htmlFor="floatingUserName">Username</label>
            </div>

            <div className="form-floating my-3">
              <input
                name="email"
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                defaultValue={currentUser.email}
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating my-3">
              <input
                name="password"
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              className={`btn btn-dark w-100 py-2 ${
                isLoading ? "disabled" : ""
              }`}
              type="submit"
            >
              {isLoading ? "Submitting..." : "Update"}
            </button>
            {error && <p className="text-danger mt-3">{error}</p>}
          </div>
          <div className="w-50 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center gap-2 flex-column">
              <img
                className="rounded-circle"
                src={avatar}
                alt=""
                width="72"
                height="57"
              />
              <UploadWidget
                uwConfig={{
                  cloudName: "kesavcodes",
                  uploadPreset: "estate",
                  multiple: false,
                  maxImageFileSize: 2000000,
                  folder: "avatars",
                }}
                setState={(image) => setAvatar(image)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
