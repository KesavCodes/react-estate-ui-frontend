import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./Navbar.module.css";

import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNotificationStore } from "./../../lib/notificationStore";

const NavbarComponent = () => {
  const { currentUser: user } = useContext(AuthContext);


  const notificationCount = useNotificationStore((state) => state.count);
  const fetchNotification = useNotificationStore((state) => state.fetch);
  if(user) fetchNotification();
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className={`${styles["navbar-container"]} pt-4`}
    >
      <div className="container-lg mx-4">
        <Link
          to={"/"}
          className="d-flex align-items-baseline gap-2 navbar-brand"
        >
          <img src={logo} height="20px"></img>HorizonEstates
        </Link>
        <div className="d-flex d-md-none gap-2">
          {user && (
            <div className=" d-flex align-items-center gap-2">
              <img
                src={user.avatar}
                alt="profile pic"
                className="rounded-circle"
                width={40}
                height={40}
              />
            </div>
          )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-0 gap-lg-4">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/list" className="nav-link">
              Listings
            </Link>
          </Nav>
          <Nav className="d-flex gap-2 gap-lg-4">
            {user ? (
              <div className="d-none d-md-flex align-items-center gap-4">
                <div className=" d-flex align-items-center gap-2">
                  <img
                    src={user.avatar}
                    alt="profile pic"
                    className="rounded-circle"
                    width={40}
                    height={40}
                  />
                  <p className="mb-0 fw-bolder">{user.username}</p>
                </div>
                <Link to="/profile">
                  <button
                    type="button"
                    className="btn btn-dark position-relative px-4"
                  >
                    Profile{" "}
                    {notificationCount ? (
                      <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
                        {notificationCount}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    ) : (
                      <></>
                    )}
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  Sign in
                </Link>
                <Link to="/register" className="btn btn-dark px-4">
                  Sign up
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
