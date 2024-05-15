import React, { FC } from "react";
import { Button, Drawer, Radio, Select, Space } from "antd";
import FoodMenu from "./FoodMenu";
import { useTableStore } from "@/shared/store/table_reservation/table_reservation";
import { reservTable } from "@/shared/services/dishes_service/dishes_service";
import { useSWRConfig } from "swr";
import { useAuthStore } from "@/shared/store/auth/auth";
const tables = [
  {
    value: "столик на одного",
    label: "Столик на одного",
  },
  {
    value: "столик на двоих",
    label: "Столик на двоих",
  },
  {
    value: "столик на троих",
    label: "Столик на троих",
  },
  {
    value: "столик на четверых",
    label: "Столик на четверых",
  },
  {
    value: "столик на пятерых",
    label: "Столик на пятерых",
  },
];

interface IReservMenuProps {
  onClose: any;
  open: boolean;
}

const ReservMenu: FC<IReservMenuProps> = ({ onClose, open }) => {
  const {
    setNumberOfPeople,
    setDishesOrder,
    resetTableOrder,
    totalOrderPrice,
    orderedTable,
    orderedFood,
  } = useTableStore((state) => state);
  const user = useAuthStore((state) => state.user);
  const { mutate } = useSWRConfig();

  const handleOrderChange = (event: any) => {
    setDishesOrder(event.target.value);
  };
  const handleTableChange = (value: any) => {
    setNumberOfPeople(value);
  };

  const handleOrderedTable = () => {
    const reservTables = {
      id: Date.now(),
      personId: user ? user.id : Date.now(),
      personName: user ? user.name : "Person",
      peopleQuantity: orderedTable.numberOfPeople,
      orderType: orderedTable.dishesOrder,
      orderedDishes: orderedFood,
      totalPrice: totalOrderPrice,
    };
    mutate("/reservTable", reservTable("reservTable", reservTables));
    resetTableOrder();
  };

  return (
    <>
      <Drawer
        style={{ paddingBottom: 30 }}
        title="Бронирование столика"
        onClose={onClose}
        open={open}
      >
        <Select
          style={{
            width: 180,
          }}
          value={orderedTable.numberOfPeople}
          title="table"
          onChange={handleTableChange}
          options={tables}
        />
        <Radio.Group
          name="dishesOrder"
          onChange={handleOrderChange}
          value={orderedTable.dishesOrder}
          style={{ padding: 10 }}
        >
          <Space direction="vertical">
            <Radio value="заказать еду на месте">Заказать еду на месте</Radio>
            <Radio value="заказать сейчас">Заказать сейчась</Radio>
          </Space>
        </Radio.Group>
        {orderedTable.dishesOrder === "заказать сейчас" ? <FoodMenu /> : ""}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            backgroundColor: "grey",
            width: "100%",
          }}
        >
          {totalOrderPrice != 0 && (
            <span
              style={{
                margin: 10,
                padding: 10,
                backgroundColor: "#cfe1e5",
                borderRadius: "10px",
              }}
            >
              {totalOrderPrice} c
            </span>
          )}
          <Button onClick={handleOrderedTable} style={{ margin: 10 }}>
            Забронировать столик
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default ReservMenu;
