import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const isAuthenticated = useSelector((state) => state.login.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return children;
}

export default ProtectedRoutes;
