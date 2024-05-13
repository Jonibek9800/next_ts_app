import { instance } from "..";

export const getUsers = async (path: string) => {
  const response = await instance.get(path);
  return response.data
};
