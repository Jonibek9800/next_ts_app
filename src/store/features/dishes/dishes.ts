import { IFood } from '../../../app/ui/interfaces';
import { Action, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "../../../services/dishes_service/dishes_service";
import { ThunkAction } from 'redux-thunk';


interface IDishesType {
  dishes: IFood[],
  isLoading: boolean,
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

export const getDishesList = (): ThunkAction<void, unknown, unknown, Action<string>> => async (dispatch) => {
  dispatch(setIsLoad(true));
  try {
    const data = await getDishes();
    dispatch(getDishList(data));
  } catch (error) {
    console.log(error);
  }
  dispatch(setIsLoad(false));
};
