import { ThunkAction } from "redux-thunk";
import { IUser } from "../../../ui/interfaces";
import { Action, createSlice } from "@reduxjs/toolkit";
import { redirect } from "next/navigation";
import { getUsers } from "@/shared/services/user_service/user_service";

interface IStateType {
  users: IUser[];
  isLoading: boolean;
  isAuth: boolean;
  errorMessage: string | null;
  user: IUser;
}

const initialState: IStateType = {
  users: [],
  isLoading: false,
  isAuth: false,
  errorMessage: null,
  user: { id: 0, age: 0, name: "", password: "" },
};

export const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserList: (state, action) => {
      state.users = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    authUser: (state, { payload }) => {
      state.errorMessage = null;
      state.users.forEach((item) => {
        console.log(
          item.name === payload.username && item.password === payload.password
        );
        if (
          item.name === payload.username &&
          item.password === payload.password
        ) {
          console.log(item.password);
          localStorage.setItem("user", JSON.stringify(item));
          state.user = item;
          state.isAuth = true;
          redirect("/");
        } else {
          state.errorMessage = "Неверный логин или пароль";
        }
      });
    },
    checkIsAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = { id: 0, age: 0, name: "", password: "" };
      localStorage.setItem("user", "");
    },
  },
});

export const { getUserList, setIsLoading, authUser, checkIsAuth, logout } =
  authSlice.actions;

export const getUsersList =
  (): ThunkAction<void, unknown, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await getUsers("/users");
      dispatch(getUserList(data));
    } catch (error) {
      alert(`ошибка сервера сервер не доступень попробуйте позже`);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

interface IPayloadType {
  username: string;
  password: string;
}

export const auth =
  ({
    username,
    password,
  }: IPayloadType): ThunkAction<void, unknown, unknown, Action<string>> =>
  (dispatch) => {
    console.log(username, password);
    try {
      const user = {
        username,
        password,
      };
      dispatch(authUser(user));
    } catch (error) {
      console.log(error);
      alert("ошибка сервера сервер не доступень попробуйте позже");
    }
  };

export const checkAuth =
  (payload: IUser): ThunkAction<void, unknown, unknown, Action<string>> =>
  async (dispatch) => {
    if (payload.id !== 0) {
      dispatch(checkIsAuth({ payload, isAuth: true }));
    }
  };

export const setLogout =
  (): ThunkAction<void, unknown, unknown, Action<string>> => (dispatch) => {
    dispatch(logout());
  };
