import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const onLoginHandler = (user) => {
    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const onLogoutHandler = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        onLoginHandler,
        onLogoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
