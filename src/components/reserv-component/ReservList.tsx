import { getReservTable } from "@/shared/services/dishes_service/dishes_service";
import { IReserTable } from "@/shared/ui/interfaces";
import useSWR from "swr";
import List from "./list";

const ReservList = async () => {
  const data = await getReservTable("reservTable");

  return <List list={data} />;
};

export default ReservList;
