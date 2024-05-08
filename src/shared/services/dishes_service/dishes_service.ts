import {IFood} from "../../ui/interfaces"
import { instance } from "..";

interface IPromiseProps {
  data: Array<IFood>
}


export const getDishes = async (path: string) => {
  const response: IPromiseProps = await instance.get<IFood[]>(path);
  return response.data;
};
