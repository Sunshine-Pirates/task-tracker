import { SignUp } from "./auth/SignUp";

import { SignIn } from "./auth/SignIn";

import { ForgotPassword } from "./auth/ForgotPassword";

import { ChangePassword } from "./auth/ChangePassword";

export const App = () => {
  return (
    <div>
      <SignUp />
      <ChangePassword />
      <ForgotPassword />
      <SignIn />
    </div>
  );
};
