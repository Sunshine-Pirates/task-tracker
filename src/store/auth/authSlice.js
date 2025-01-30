import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userRole: "GUEST",
    isAuthenticated: true,
  },
});
export const { isAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
