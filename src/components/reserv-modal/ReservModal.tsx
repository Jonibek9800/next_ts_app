"use clent";
import React, { FC } from "react";
import { Button, Drawer, Radio, Select, Space } from "antd";
import { useTableStore } from "@/shared/store/table_reservation/table_reservation";
import { reservTable } from "@/shared/services/dishes_service/dishes_service";
import { useAuthStore } from "@/shared/store/auth/auth";
import { useRouter } from "next/navigation";
import FoodMenu, { IDataProps } from "../food-menu/FoodMenu";
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
  data: IDataProps;
}

const ReservModal: FC<IReservMenuProps> = ({ onClose, open, data }) => {
  const router = useRouter();
  const orderedFood = useTableStore((state) => state.orderedFood);
  const orderedTable = useTableStore((state) => state.orderedTable);
  const totalOrderPrice = useTableStore((state) => state.totalOrderPrice);
  const setNumberOfPeople = useTableStore((state) => state.setNumberOfPeople);
  const setDishesOrder = useTableStore((state) => state.setDishesOrder);
  const resetTableOrder = useTableStore((state) => state.resetTableOrder);

  const user = useAuthStore((state) => state.user);

  const handleOrderChange = (event: any) => {
    setDishesOrder(event.target.value);
  };
  const handleTableChange = (value: any) => {
    setNumberOfPeople(value);
  };

  const handleOrderedTable = () => {
    const reservTables = {
      personId: user ? user.id : Date.now(),
      personName: user ? user.name : "Person",
      peopleQuantity: orderedTable.numberOfPeople,
      orderType: orderedTable.dishesOrder,
      orderedDishes: orderedFood,
      totalPrice: totalOrderPrice,
    };
    reservTable("reservTable", reservTables);
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
        {orderedTable.dishesOrder === "заказать сейчас" ? (
          <FoodMenu data={data} />
        ) : (
          ""
        )}
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

export default ReservModal;
