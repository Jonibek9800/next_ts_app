import { instance } from "..";

export const getUsers = async (path: string) => {
  const response = await instance.get(path);
  return response.data;
};

interface IUser {
  name: string;
  password: string;
  age: number;
}

export const setAuth = async (path: string, { arg }: { arg: IUser }) => {
  await instance.post(path, arg);
};
