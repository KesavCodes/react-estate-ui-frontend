import { useNavigate } from "react-router-dom";
import apiRequest from "./../../lib/apiRequest";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
const UserInfo = () => {
  const navigate = useNavigate();
  const { currentUser: user, onLogoutHandler } = useContext(AuthContext);
  const onLogout = async (event) => {
    event.preventDefault();
    try {
      await apiRequest.post("/auth/logout", { id: user.id });
      onLogoutHandler();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p className="d-flex gap-2 align-items-center mt-3">
        Avatar :{" "}
        <img
          src={user?.avatar}
          height={35}
          width={35}
          className="rounded-circle"
          alt="profile pic"
        />
      </p>
      <p className="d-flex gap-2 align-items-center">
        Username : <b>{user?.username}</b>
      </p>
      <p className="d-flex gap-2 align-items-center">
        E-mail : <b>{user?.email}</b>
      </p>
      <form onSubmit={onLogout}>
        <button type="submit" className="btn btn-dark w-100">
          Logout
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
