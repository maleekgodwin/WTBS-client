import { createContext, useState } from "react";
// import { getClient } from "../api/clients/getClient";

const UserContext = createContext("");

export const ContextProvider = ({ children }) => {
  //   const loggedInUser = JSON.parse(localStorage.getItem("client"));
  const [currentUser, setCurrentUser] = useState();
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
