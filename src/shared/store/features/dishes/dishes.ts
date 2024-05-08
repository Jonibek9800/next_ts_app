import { IFood } from "../../../ui/interfaces";
import { Action, createSlice } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

interface IDishesType {
  dishes: IFood[];
  isLoading: boolean;
}

const initialState: IDishesType = {
  dishes: [],
  isLoading: false,
};

export const dishesSlise = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    getDishList: (state, action) => {
      state.dishes = action.payload;
    },
    setIsLoad: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getDishList, setIsLoad } = dishesSlise.actions;

export const getDishesList =
  (payload: IFood[]): ThunkAction<void, unknown, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(setIsLoad(true));
    try {
      dispatch(getDishList(payload));
    } catch (error) {
      console.log(error);
    }
    dispatch(setIsLoad(false));
  };
