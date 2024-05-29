import { devtools, persist } from "zustand/middleware";
import { create } from "zustand";
import { IUser } from "@/shared/ui/interfaces";

interface IStateType {
  isLoading: boolean;
  isAuth: boolean;
  errorMessage: string | null;
  user: IUser;
  users: IUser[];
}

const initialState: IStateType = {
  isLoading: false,
  isAuth: false,
  errorMessage: null,
  user: { id: 0, age: 0, name: "", password: "" },
  users: [],
};

type Actions = {
  setIsLoading: (isLoad: boolean) => void;
  setAuthUser: (initUser: IUser) => void;
  setErrorMessage: (error: string) => void;
  setLogOut: () => void;
  setUserList: (payload: IUser[]) => void;
};

export const useAuthStore = create<IStateType & Actions>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        isAuth: false,
        errorMessage: null,
        user: { id: 0, age: 0, name: "", password: "" },
        users: [],
        setIsLoading: (isLoad) => set(() => ({ isLoading: isLoad })),
        setAuthUser: (initUser) =>
          set(() => ({ user: initUser, isAuth: true })),
        setErrorMessage: (error) => set(() => ({ errorMessage: error })),
        setLogOut: () =>
          set(() => ({
            user: { id: 0, age: 0, name: "", password: "" },
            isAuth: false,
          })),
        setUserList: (payload) => set(() => ({ users: payload })),
      }),
      { name: "authStore" }
    )
  )
);
