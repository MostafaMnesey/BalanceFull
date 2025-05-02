import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  // استرجاع البيانات من localStorage عند أول تحميل
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  // حفظ البيانات في localStorage عند التحديث
  useEffect(() => {
    if (user && token) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, [user, token]);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser, token, setToken }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
