import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem("currentUser"));
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
