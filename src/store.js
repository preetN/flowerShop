import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/admin/redux_firebase/adminSlice";
import bouquetReducer from "./pages/admin/redux_firebase/bouquetSlice";
export const store = configureStore({
  reducer: {
    admin: adminReducer,
    bouquet: bouquetReducer,
  },
});
