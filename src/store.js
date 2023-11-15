import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adminReducer from "./redux_firebase/admin/adminSlice";
import bouquetReducer from "./redux_firebase/bouquet/bouquetSlice";
import userReducer from "./redux_firebase/user/userSlice";
import orderReducer from "./redux_firebase/order/orderSlice";
import queryReducer from "./redux_firebase/query/querySlice";
import cartReducer from "./redux_firebase/cart/cartSlice";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  admin: adminReducer,
  bouquet: bouquetReducer,
  user: userReducer,
  order: orderReducer,
  query: queryReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export const persistor = persistStore(store);
