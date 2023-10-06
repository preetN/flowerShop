import { createSlice } from "@reduxjs/toolkit";
const initialState = { orderList: [], currentUserOrderList: [] };
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderList: (state, { payload }) => {
      state.orderList = payload;
    },
    setCurrentUserOrderList: (state, { payload }) => {
      state.currentUserOrderList = payload;
    },
  },
});
export const { setOrderList, setCurrentUserOrderList } = orderSlice.actions;
export default orderSlice.reducer;
