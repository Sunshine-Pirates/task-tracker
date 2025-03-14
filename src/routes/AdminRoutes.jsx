import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PATHS } from "../utils/constants/constants";
import { AllIssues } from "../pages/admin/AllIssues";
import { AdminPage } from "../pages/admin/AdminPage";
import { MenuBoard } from "../components/UI/board/MenuBoard";
import { Board } from "../components/UI/board/Board";

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
    {
      path: PATHS.ADMIN.AllISSUESPAGE,
      element: (
        <PrivateRoute
          fallBackPath={PATHS.ADMIN.ROOT}
          isAllowed={isAuthenticated}
          component={AllIssues}
        />
      ),
    },
    {
      path: `${PATHS.ADMIN.PAGE}/changeBg`,
      element: (
        <PrivateRoute
          fallBackPath={PATHS.USER.ROOT}
          isAllowed={isAuthenticated}
          component={MenuBoard}
        />
      ),
    },
    {
      path: `${PATHS.ADMIN.PAGE}/board`,
      element: (
        <PrivateRoute
          fallBackPath={PATHS.USER.ROOT}
          isAllowed={isAuthenticated}
          component={Board}
        />
      ),
    },
  ];
};
