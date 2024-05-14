import { IFood, IReserTable } from "../../../ui/interfaces";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IOrderFood {
  quantity: number;
  dish: IFood;
}

interface ITablePropTypes {
  orderedTable: {
    numberOfPeople: string;
    dishesOrder: string;
  };
  orderedFood: IOrderFood[];
  totalOrderPrice: number;
  reservList: IReserTable[];
}


type Actions = {
  setOrderedFood: (updateOrderedFood: IOrderFood[]) => void;
  setDishesOrder: (orderState: string) => void;
  setNumberOfPeople: (numberOfPeople: string) => void;
  canseledOrderDishes: (newOrderedDishes: IOrderFood[]) => void;
  resetTableOrder: () => void;
  setTotalSolary: (totalSum: number) => void;
  setReservList: (reservs: IReserTable[]) => void;
};

export const useTableStore = create<ITablePropTypes & Actions>((set) => ({
  orderedTable: {
    numberOfPeople: "столик на одного",
    dishesOrder: "заказать еду на месте",
  },
  orderedFood: [],
  totalOrderPrice: 0,
  reservList: [],
  setOrderedFood: (updateOrderedFood) =>
    set(() => ({ orderedFood: updateOrderedFood })),
  setDishesOrder: (orderState) =>
    set((state) => ({
      orderedTable: { ...state.orderedTable, dishesOrder: orderState },
    })),
  setNumberOfPeople: (numberOfPeople) =>
    set((state) => ({
      orderedTable: { ...state.orderedTable, numberOfPeople: numberOfPeople },
    })),
  canseledOrderDishes: (newOrderedDishes) =>
    set(() => ({ orderedFood: newOrderedDishes })),
  resetTableOrder: () =>
    set((state) => ({
      totalOrderPrice: 0,
      orderedFood: [],
      orderedTable: {
        ...state.orderedTable,
        numberOfPeople: "столик на одного",
        dishesOrder: "заказать еду на месте",
      },
    })),
  setTotalSolary: (totalSum) => set(() => ({ totalOrderPrice: totalSum })),
  setReservList: (reservs) => set(() => ({ reservList: reservs })),
}));


// export const tableSlice = createSlice({
//   name: "table",
//   initialState,
//   reducers: {
//     setOrderedFood: (state, action) => {
//       state.orderedFood = action.payload;
//     },
//     setDishesOrder: (state, action) => {
//       state.orderedTable.dishesOrder = action.payload;
//     },
//     setNumberOfPeople: (state, action) => {
//       state.orderedTable.numberOfPeople = action.payload;
//     },
//     canseledOrderedDish: (state, action) => {
//       state.orderedFood = action.payload;
//     },
//     setOrderedTable: (state, action) => {
//       // localStorage.setItem("reserveTables", JSON.stringify(action.payload));
//       (state.orderedFood = []),
//         (state.orderedTable.dishesOrder = "заказать еду на месте");
//       state.orderedTable.numberOfPeople = "столик на одного";
//       state.totalOrderPrice = 0;
//     },
//     setTotalSum: (state, action) => {
//       state.totalOrderPrice = action.payload;
//     },
//   },
// });

// export const {
//   setOrderedFood,
//   setDishesOrder,
//   setNumberOfPeople,
//   canseledOrderedDish,
//   setOrderedTable,
//   setTotalSum,
// } = tableSlice.actions;

// export const handleOrderFood =
//   (
//     payload: IOrderFood[]
//   ): ThunkAction<void, unknown, unknown, Action<string>> =>
//   (dispatch) => {
//     dispatch(setOrderedFood(payload));
//   };

// export const handleDishesOrder =
//   (payload: string): ThunkAction<void, unknown, unknown, Action<string>> =>
//   (dispatch) => {
//     dispatch(setDishesOrder(payload));
//   };

// export const handleNumOfPeople =
//   (payload: string): ThunkAction<void, unknown, unknown, Action<string>> =>
//   (dispatch) => {
//     dispatch(setNumberOfPeople(payload));
//   };

// export const cancelOrderedDish =
//   (
//     payload: IOrderFood[]
//   ): ThunkAction<void, unknown, unknown, Action<string>> =>
//   (dispatch) => {
//     dispatch(canseledOrderedDish(payload));
//   };

// export const totalOrderPrice =
//   (payload: number): ThunkAction<void, unknown, unknown, Action<string>> =>
//   (dispatch) => {
//     dispatch(setTotalSum(payload));
//   };

// export const handleSetReserveTable =
//   (payload: IReserTable): ThunkAction<void, unknown, unknown, Action<string>> =>
//   async (dispatch) => {
//     try {
//       // localStorage.getItem("reserveTables")
//       if (null != null) {
//         const reserveTables = [];
//         reserveTables.push(payload);
//         dispatch(setOrderedTable(reserveTables));
//       } else {
//         const reserveTables = [];
//         reserveTables.push(payload);
//         dispatch(setOrderedTable(reserveTables));
//       }
//       // alert("Ваш столик успешно забронирован");
//     } catch (error) {
//       alert("server error try again later");
//     }
//   };


