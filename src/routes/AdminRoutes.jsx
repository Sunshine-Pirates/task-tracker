import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { AdminPage } from "../pages/admin/AdminPage";

export const AdminRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.router);
  return [
    {
      path: "",
      element: <Navigate to={"admin-page"} />,
    },
    {
      path: "admin-page",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          component={AdminPage}
        />
      ),
    },
  ];
};
