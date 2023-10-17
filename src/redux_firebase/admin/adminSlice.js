import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {},
  adminList: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    setAdminList: (state, action) => {
      state.adminList = action.payload;
    },
  },
});

export const { setAdmin, setAdminList } = adminSlice.actions;

export default adminSlice.reducer;
