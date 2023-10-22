import { createSlice } from "@reduxjs/toolkit";
const initialState = { queryList: [] };
export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQueryList: (state, { payload }) => {
      state.queryList = payload;
    },
  },
});
export const { setQueryList } = querySlice.actions;
export default querySlice.reducer;
