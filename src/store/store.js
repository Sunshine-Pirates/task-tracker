import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { sidebarReducer } from "./sidebar/sideBarSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    sidebar: sidebarReducer,
  },
});
