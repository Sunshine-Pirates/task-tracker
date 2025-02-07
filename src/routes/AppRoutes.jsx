import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Layout } from "../layout/Layout";
import { UserRoutes } from "./UserRoutes";
import { NotFound } from "../pages/notFound/NotFound";
import { AdminLayout } from "../layout/AdminLayout";
import { AdminRoutes } from "./AdminRoutes";
import { useSelector } from "react-redux";
import { SignIn } from "../auth/SignIn";
import { PATHS } from "../utils/constants/constants";

export const AppRoutes = () => {
  const { userRole } = useSelector((state) => state.auth);

  const path = {
    USER: PATHS.USER.ROOT,
    ADMIN: PATHS.ADMIN.ROOT,
    GUEST: PATHS.GUEST,
  };

  const router = createBrowserRouter([
    {
      path: PATHS.ADMIN.ROOT,
      element: (
        <PrivateRoute
          component={AdminLayout}
          isAllowed={userRole === "ADMIN"}
          fallBackPath={path[userRole] || PATHS.ADMIN.ROOT}
        />
      ),
      children: AdminRoutes(),
    },
    {
      path: PATHS.USER.ROOT,
      element: (
        <PrivateRoute
          component={Layout}
          isAllowed={userRole === "USER"}
          fallBackPath={path[userRole] || PATHS.USER.ROOT}
        />
      ),
      children: UserRoutes(),
    },
    {
      path: PATHS.GUEST,
      element: (
        <PrivateRoute
          component={SignIn}
          isAllowed={userRole === "GUEST"}
          fallBackPath={path[userRole] || PATHS.GUEST}
        />
      ),
    },
    {
      path: PATHS.NOT_FOUND,
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
