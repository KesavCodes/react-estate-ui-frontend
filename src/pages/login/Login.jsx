import { useContext, useState } from "react";
import Auth from "../../Components/auth/Auth";
import BgColor from "../../utlis/bgColor";
import heroBg from "/bg.png";
import { useNavigate } from "react-router-dom";

import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../Context/AuthContext";
const Login = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { onLoginHandler } = useContext(AuthContext);

  const onLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    const formData = new FormData(event.target);

    const username = formData.get("username");
    const password = formData.get("password");

    const userData = { username, password };
    try {
      const response = await apiRequest.post("/auth/login", userData);
      onLoginHandler(response.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
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
              className="d-none d-md-block mx-lg-auto img-fluid"
              alt="Hero Bg"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-md-7 col-lg-7">
            <Auth
              authMode={"login"}
              onSubmitHandler={onLogin}
              error={error}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
