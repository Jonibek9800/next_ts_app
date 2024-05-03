import {IFood} from "../../app/ui/interfaces"
import { instance } from "..";

interface IPromiseProps {
  data: Array<IFood>
}


export const getDishes = async () => {
  const response: IPromiseProps = await instance.get<IFood[]>("/dishes");
  return response.data;
};
