import { AppSelector } from "../store/index";
import { AppDispatch } from "@/shared/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import useSWR from "swr";
import { getDishes } from "../services/dishes_service/dishes_service";
import { IFood } from "../ui/interfaces";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppSelector> = useSelector;

export function useDishes() {
  const { data, error, isLoading } = useSWR<IFood[]>("/dishes", getDishes);

  return {
    dishes: data,
    error,
    isLoading,
  };
}
