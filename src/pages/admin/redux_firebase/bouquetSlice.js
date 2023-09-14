import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bouquetlist: [],
};

export const bouquetSlice = createSlice({
  name: "bouquet",
  initialState,
  reducers: {
    setBouquet: (state, action) => {
      state.bouquetlist = action.payload;
    },
  },
});

export const { setBouquet } = bouquetSlice.actions;

export default bouquetSlice.reducer;
