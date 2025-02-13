import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userRole: "ADMIN",
    isAuthenticated: false,
  },
});
export const authReducer = authSlice.reducer;
