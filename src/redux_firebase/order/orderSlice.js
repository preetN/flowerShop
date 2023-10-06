import { createSlice } from "@reduxjs/toolkit";
const initialState = { orderList: [] };
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderList: (state, { payload }) => {
      state.orderList = payload;
    },
  },
});
export const { setOrderList } = orderSlice.actions;
export default orderSlice.reducer;
