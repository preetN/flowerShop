import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bouquetlist: [],
  selectedBouquet: {},
};

export const bouquetSlice = createSlice({
  name: "bouquet",
  initialState,
  reducers: {
    setBouquetList: (state, { payload }) => {
      state.bouquetlist = payload;
    },
    setBouquet: (state, action) => {
      state.selectedBouquet = action.payload;
    },
  },
});

export const { setBouquetList, setBouquet } = bouquetSlice.actions;

export default bouquetSlice.reducer;
