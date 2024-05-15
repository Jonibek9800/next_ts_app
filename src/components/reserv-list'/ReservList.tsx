import { getReservTable } from "@/shared/services/dishes_service/dishes_service";
import { useAuthStore } from "@/shared/store/auth/auth";
import { useTableStore } from "@/shared/store/table_reservation/table_reservation";
import { IReserTable } from "@/shared/ui/interfaces";
import { useEffect } from "react";
import useSWR from "swr";

const ReservList = () => {
  const { data } = useSWR<IReserTable[]>("reservTable", getReservTable);
  const setReservList = useTableStore((state) => state.setReservList);
  const reserList = useTableStore((state) => state.reservList);
  const user = useAuthStore((state) => state.user);
  useEffect(() => {
    if (data) {
      setReservList(data.filter((table) => table.personId == user.id));
    }
  }, [data]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {reserList.map((table) => {
        return (
          <div
            key={table.id}
            style={{ padding: 10, border: "1px solid grey", borderRadius: 10 }}
          >
            <div>
              Заказ <h4>{table.peopleQuantity}</h4>
            </div>
            <div>Стоимость заказа {table.totalPrice}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ReservList;
