import { AppSelector } from "../store/index";
import { AppDispatch } from "@/shared/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import useSWR from "swr";
import { getDishes } from "../services/dishes_service/dishes_service";
import { IFood } from "../ui/interfaces";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppSelector> = useSelector;

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
