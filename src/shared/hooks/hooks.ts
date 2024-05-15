import useSWR from "swr";
import { getDishes } from "../services/dishes_service/dishes_service";
import { IFood } from "../ui/interfaces";

interface IDataResponse {
  data: IFood[],
  first: number,
  items: number,
  last: number,
  next: number,
  pages: number
}

export function useDishes(currentPage: number) {
  const { data, error, isLoading } = useSWR<IDataResponse>(`/dishes?_page=${currentPage}`, getDishes);

  return {
    data: data,
    error,
    isLoading,
  };
}
