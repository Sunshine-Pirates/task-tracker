import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Profile } from "../components/profile/Profile";
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
          fallBackPath="/admin"
          isAllowed={isAuthenticated}
          component={AdminPage}
        />
      ),
      children: [
        {
          path: "",
          element: <Navigate to="profile" replace />,
        },
        {
          path: "profile",
          element: (
            <PrivateRoute
              fallBackPath="/admin"
              isAllowed={isAuthenticated}
              component={Profile}
            />
          ),
        },
      ],
    },
  ];
};
