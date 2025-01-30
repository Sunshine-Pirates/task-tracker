import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { SignIn } from "../auth/SignIn";

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
          component={SignIn}
        />
      ),
    },
  ];
};
