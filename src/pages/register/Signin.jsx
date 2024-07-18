import Auth from "../../Components/auth/Auth";
import BgColor from "../../utlis/bgColor";
import heroBg from "/bg.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

const Signin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onRegisterHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    const formData = new FormData(event.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const userData = { username, email, password };
    try {
      await apiRequest.post("/auth/register", userData);
      navigate("/login");
    } catch (err) {
      setError(err.response.data?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container-lg">
      <BgColor additionalClasses={"d-lg-flex"} />
      <div className="col-xxl-12 px-4">
        <div className="row flex-md-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-md-5 col-lg-5 p-0">
            <img
              src={heroBg}
              className="d-none d-lg-block mx-lg-auto img-fluid"
              alt="Hero Bg"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-md-7 col-lg-7">
            <Auth
              authMode={"register"}
              onSubmitHandler={onRegisterHandler}
              error={error}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
