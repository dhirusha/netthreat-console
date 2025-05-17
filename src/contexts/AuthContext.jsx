import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  // ⬇️  “role” is either "user", "admin", or null (logged-out)
  const [role, setRole] = useState(null);

  const loginAsUser  = () => setRole("user");
  const loginAsAdmin = () => setRole("admin");
  const logout       = () => setRole(null);

  const value = { role, loginAsUser, loginAsAdmin, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
