import { IReserTable } from "@/shared/ui/interfaces";
import { instance } from "..";
import { revalidatePath } from "next/cache";

export const getDishes = async (path: string, page: string) => {
  const response = await instance.get(path + `?_page=${page}`);
  return response.data;
};

export const getDishesById = async (path: string, id: string) => {
  const response = await instance.get(path + `/${id}`);
  return response.data;
};

export const getReservList = async (path: string) => {
  const response = await instance.get(path);
  return response.data;
};

export const reservTable = async (key: string, arg: IReserTable) => {
  await instance.post(key, arg);
  revalidatePath(key);
};

export const getReservTable = async (path: string) => {
  const response = await instance.get(path);
  return response.data;
};
