import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrUser({
      id: 1,
      userName: "Jerry Doe",
      dp: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currUser));
  }),
    [currUser];

  return (
    <AuthContext.Provider value={{ currUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
