import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userRole: "GUEST",
    isAuthenticated: true,
  },
});
export const authReducer = authSlice.reducer;
