import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { AdminPage } from "../pages/admin/AdminPage";
import { PATHS } from "../utils/constants/constants";

export const AdminRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return [
    {
      index: true,
      element: <Navigate to={PATHS.ADMIN.PAGE} />,
    },
    {
      path: PATHS.ADMIN.PAGE,
      element: (
        <PrivateRoute
          fallBackPath={PATHS.ADMIN.ROOT}
          isAllowed={isAuthenticated}
          component={AdminPage}
        />
      ),
    },
  ];
};
