import { useContext } from "react";
import Navbar from "../../Components/navbar/Navbar.jsx";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.jsx";

export const Layout = () => {
  return (
    <div className="container-lg">
      <Navbar />
      <Outlet />
    </div>
  );
};

export const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) return <Navigate to="/login" />;
  else {
    return Layout();
  }
};
