import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  usersList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsersList: (state, action) => {
      state.usersList = action.payload;
    },
  },
});

export const { setUser, setUsersList } = userSlice.actions;

export default userSlice.reducer;
