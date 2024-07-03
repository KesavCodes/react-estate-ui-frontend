import Navbar from "../../Components/navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container-lg">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
