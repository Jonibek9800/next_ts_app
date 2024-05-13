import { IReserTable } from "@/shared/ui/interfaces";
import { instance } from "..";

export const getDishes = async (path: string) => {
  const response = await instance.get(path);
  return response.data;
};

export const getReservList = async (path: string) => {
  const response = await instance.get(path);
  return response.data;
};

export const reservTable = async (key: string, arg: IReserTable) => {
  await instance.post(key, arg);
};
