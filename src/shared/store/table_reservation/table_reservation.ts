import { IFood, IReserTable } from "../../ui/interfaces";
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
