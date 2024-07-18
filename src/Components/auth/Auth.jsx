import { Link } from "react-router-dom";
const Auth = ({ authMode, onSubmitHandler, error, isLoading }) => {
  return (
    <div className="pe-5 ">
      <form className="" onSubmit={onSubmitHandler}>
        <img className="mb-4" src="/logo.png" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">
          {authMode === "login" ? "Please sign in" : "Create an account"}
        </h1>
        <div className="form-floating my-3">
          <input
            name="username"
            type="text"
            className="form-control"
            id="floatingUserName"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingUserName">Username</label>
        </div>

        {authMode === "register" && (
          <div className="form-floating my-3">
            <input
              name="email"
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
        )}
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
          className={`btn btn-dark w-100 py-2 ${isLoading ? "disabled" : ""}`}
          type="submit"
        >
          {isLoading
            ? "Submiting..."
            : authMode === "login"
            ? "Sign in"
            : "Register"}
        </button>
        <Link to={authMode === "login" ? "/register" : "/login"}>
          <button className="mt-4 p-0 btn btn-link text-body-secondary">
            {authMode === "login"
              ? "Create an account?"
              : "Already have an account?"}
          </button>
        </Link>
        {error && <p className="text-danger mt-3">{error}</p>}
      </form>
    </div>
  );
};

export default Auth;
