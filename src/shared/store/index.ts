import { configureStore } from "@reduxjs/toolkit";
// import { authSlice } from "./features/auth/auth";
// import { dishesSlise } from "./features/dishes/dishes";
import { navigateSlice } from "./features/navigate/navigate";

export const stores = configureStore({
  reducer: {
    // auth: authSlice.reducer,
    navigate: navigateSlice.reducer
  },
});


export type AppDispatch = typeof stores.dispatch;
export type AppSelector = ReturnType<typeof stores.getState>;