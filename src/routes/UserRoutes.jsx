import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { UserPage } from "../pages/user/UserPage";
import { Profile } from "../components/profile/Profile";
import { PATHS } from "../utils/constants/constants";

export const UserRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return [
    {
      index: true,
      element: <Navigate to={PATHS.USER.PAGE} />,
    },
    {
      path: PATHS.USER.PAGE,
      element: (
        <PrivateRoute
          fallBackPath={PATHS.USER.ROOT}
          isAllowed={isAuthenticated}
          component={UserPage}
        />
      ),
    },
    {
      path: PATHS.USER.PROFILE,
      element: (
        <PrivateRoute
          fallBackPath={PATHS.USER.ROOT}
          isAllowed={isAuthenticated}
          component={Profile}
        />
      ),
    },
  ];
};
