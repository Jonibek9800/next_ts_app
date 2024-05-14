import { useTableStore } from "@/shared/store/features/table_reservation/table_reservation";
import { IReserTable } from "@/shared/ui/interfaces";

type IReservProps = {
  reserList: IReserTable[];
};

const ReservList = () => {
  const reserList = useTableStore((state) => state.reservList);
  console.log(reserList);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, }}>
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
