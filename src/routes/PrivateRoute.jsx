import { Navigate } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  fallBackPath,
  isAllowed,
}) => {
  if (!isAllowed) {
    return <Navigate to={fallBackPath} replace />;
  }
  return <Component />;
};
