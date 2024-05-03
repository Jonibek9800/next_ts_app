import { instance } from "..";

export const getUsers = async () => {
  const response = await instance.get("/users");
  return response.data
};
