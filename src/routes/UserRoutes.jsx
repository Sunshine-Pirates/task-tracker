import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { UserPage } from "../pages/user/UserPage";
import { Profile } from "../components/profile/Profile";

export const UserRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.router);

  return [
    {
      path: "",
      element: <Navigate to={"user-page"} />,
    },
    {
      path: "user-page",
      element: (
        <PrivateRoute
          fallBackPath="/user"
          isAllowed={isAuthenticated}
          component={UserPage}
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
