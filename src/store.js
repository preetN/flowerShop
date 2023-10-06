import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./redux_firebase/admin/adminSlice";
import bouquetReducer from "./redux_firebase/bouquet/bouquetSlice";
import userReducer from "./redux_firebase/user/userSlice";
import orderReducer from "./redux_firebase/order/orderSlice";
export const store = configureStore({
  reducer: {
    admin: adminReducer,
    bouquet: bouquetReducer,
    user: userReducer,
    order: orderReducer,
  },
});
