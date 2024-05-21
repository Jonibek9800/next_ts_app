import { create } from "zustand";

interface INavigateState {
  page: string | number;
}

type Actions = {
  setPage: (page: string | number) => void;
};

export const useNavigateStore = create<INavigateState & Actions>((set) => ({
  page: 1,
  setPage: (page: string | number) => set(() => ({ page: page })),
}));
