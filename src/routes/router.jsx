import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Layout } from "../layout/Layout";
import { GuestLayout } from "../layout/GuestLayout";
import { UserRoutes } from "./UserRoutes";
import { NotFound } from "../pages/notFound/NotFound";
import { AdminLayout } from "../layout/AdminLayout";
import { AdminRoutes } from "./AdminRoutes";
import { useSelector } from "react-redux";
import { Guestroutes } from "./GuestRoutes";

export const AppRoutes = () => {
  const { userRole } = useSelector((state) => state.router);

  const path = {
    USER: "/user",
    ADMIN: "/admin",
    GUEST: "/guest",
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={path[userRole]} replace />,
    },
    {
      path: "/admin",
      element: (
        <PrivateRoute
          component={AdminLayout}
          isAllowed={userRole === "ADMIN"}
          fallBackPath={"/"}
        />
      ),
      children: AdminRoutes(),
    },
    {
      path: "/user",
      element: (
        <PrivateRoute
          component={Layout}
          isAllowed={userRole === "USER"}
          fallBackPath="/"
        />
      ),
      children: UserRoutes(),
    },
    {
      path: "/guest",
      element: (
        <PrivateRoute
          component={GuestLayout}
          isAllowed={userRole === "GUEST"}
          fallBackPath="/"
        />
      ),
      children: Guestroutes(),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
