import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/admin/redux_firebase/adminSlice";
export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});
