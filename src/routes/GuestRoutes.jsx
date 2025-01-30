import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Profile } from "../components/profile/Profile";
import { PrivateRoute } from "./PrivateRoute";
import { GuestPage } from "../pages/guest/GuestPage";

export const Guestroutes = () => {
  const { isAuthenticated } = useSelector((state) => state.router);

  return [
    {
      path: "",
      element: <Navigate to={"guest-page"} />,
    },
    {
      path: "guest-page",
      element: (
        <PrivateRoute
          fallBackPath="/guest"
          isAllowed={isAuthenticated}
          component={GuestPage}
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
