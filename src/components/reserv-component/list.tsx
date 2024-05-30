"use client";

import { useAuthStore } from "@/shared/store/auth/auth";
import { useTableStore } from "@/shared/store/table_reservation/table_reservation";
import { IReserTable } from "@/shared/ui/interfaces";
import { useEffect } from "react";

const List = ({ list }: { list: IReserTable[] }) => {
  const setReservList = useTableStore((state) => state.setReservList);
  const reserList = useTableStore((state) => state.reservList);
  const user = useAuthStore((state) => state.user);
  useEffect(() => {
    if (list) {
      setReservList(list.filter((table) => table.personId == user.id));
    }
  }, [list, user.id, setReservList]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        margin: "auto",
        textAlign: "center",
        maxWidth: 980,
        justifyContent: "center",
      }}
    >
      {reserList.map((table, ind) => {
        return (
          <div
            key={table.id}
            style={{
              padding: 10,
              border: "1px solid grey",
              borderRadius: 10,
              width: 180,
            }}
          >
            <div>
              Брон №{ind + 1} <h4>{table.peopleQuantity}</h4>
            </div>
            <div>Стоимость заказа {table.totalPrice} c</div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
