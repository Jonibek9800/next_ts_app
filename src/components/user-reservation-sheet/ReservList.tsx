import { getReservTable } from "@/shared/services/dishes_service/dishes_service";
import List from "./list";

export const revalidate = 5;

const ReservList = async () => {
  const data = await getReservTable("/reserv_table");

  return <List list={data} />;
};

export default ReservList;
