import { createSlice } from "@reduxjs/toolkit";

const UserSlicer = createSlice({
  name: "user",
  initialState: {
    data: null,
    isAuth: false,
  },
  reducers: {
    login(state, { payload }) {
      state.isAuth = true;
      state.data = payload;
    },
    logout(state) {
      state.isAuth = false;
      state.data = null;
    },
  },
});

export const { login, logout } = UserSlicer.actions;
export default UserSlicer.reducer;
