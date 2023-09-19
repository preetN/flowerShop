import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bouquetlist: [],
  bouquet: {},
};

export const bouquetSlice = createSlice({
  name: "bouquet",
  initialState,
  reducers: {
    setBouquetList: (state, action) => {
      state.bouquetlist = action.payload;
    },
    setBouquet: (state, action) => {
      state.bouquet = action.payload;
    },
  },
});

export const { setBouquetList, setBouquet } = bouquetSlice.actions;

export default bouquetSlice.reducer;
