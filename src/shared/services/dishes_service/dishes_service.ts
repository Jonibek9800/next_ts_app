"use server";

import { IReserTable } from "@/shared/ui/interfaces";
import { instance } from "..";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export const getDishes = cache(async (path: string, page: string) => {
  const response = await instance.get(`${path}?page=${page}`);
  return response.data;
});

export const getDishesById = async (path: string, id: string) => {
  const response = await instance.get(path + `/dish?id=${id}`);
  // console.log(response);

  return response.data;
};

export const getReservList = cache(async (path: string) => {
  const response = await instance.get(path);
  return response.data;
});

export const reservTable = cache(async (key: string, arg: IReserTable) => {
  await instance.post(key, arg);
  revalidatePath(key);
});

export const getReservTable = cache(async (path: string) => {
  const response = await instance.get(path);
  return response.data;
});
