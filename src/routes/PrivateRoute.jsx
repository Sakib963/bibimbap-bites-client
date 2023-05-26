import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import loadingPic from '../assets/images/loading-pic.png'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log("user in private route", user);

  if (loading) {
    return (
      <div className="header h-screen">
        <Navbar></Navbar>
        <img src={loadingPic} className="animate-spin mx-auto" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
