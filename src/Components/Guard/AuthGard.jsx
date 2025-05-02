import { Navigate } from "react-router-dom";

export default function AuthGard({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/loginPatient" />;
  }

  return children;
}
