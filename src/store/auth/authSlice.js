import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userRole: "GUEST",
    isAuthenticated: false,
  },
});
export const authReducer = authSlice.reducer;
