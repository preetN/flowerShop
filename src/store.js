import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../src/pages/admin/adminSlice";
export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});
