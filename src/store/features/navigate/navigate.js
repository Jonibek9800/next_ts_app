import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "/",
};

export const navigateSlice = createSlice({
  name: "navigate",
  initialState,
  reducers: {
    setNavigate: (state, { payload }) => {
      state.current = payload;
    },
  },
});

export const { setNavigate } = navigateSlice.actions;

export const goToRoute = (payload) => (dispatch) => {
  
  dispatch(setNavigate(payload));
};
