import React, { FC, useState } from "react";
import { Button, Drawer, Radio, Select, Space } from "antd";
import FoodMenu from "./FoodMenu";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import useSWRMutation from "swr/mutation";
import {
  handleDishesOrder,
  handleNumOfPeople,
  handleSetReserveTable,
} from "@/shared/store/features/table_reservation/table_reservation";
import {
  getReservList,
  reservTable,
} from "@/shared/services/dishes_service/dishes_service";
import useSWR, { useSWRConfig } from "swr";
import { IReserTable } from "@/shared/ui/interfaces";
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
  const dispatch = useAppDispatch();
  const table = useAppSelector((state) => state.table);
  // const auth = useAppSelector((state) => state.auth);
  const { mutate } = useSWRConfig();
  
  // const { trigger } = useSWRMutation("/reservTable", reservTable);

  const handleOrderChange = (event: any) => {
    dispatch(handleDishesOrder(event.target.value));
  };
  const handleTableChange = (value: any) => {
    dispatch(handleNumOfPeople(value));
  };

  const handleOrderedTable = () => {
    const reservTables = {
      id: Date.now(),
      personId: Date.now(),
      personName: "Person",
      peopleQuantity: table.orderedTable.numberOfPeople,
      orderType: table.orderedTable.dishesOrder,
      orderedDishes: table.orderedFood,
      totalPrice: table.totalOrderPrice,
    };
    mutate("/reservTable", reservTable("reservTable", reservTables));
    dispatch(handleSetReserveTable(reservTables));
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
          value={table.orderedTable.numberOfPeople}
          title="table"
          onChange={handleTableChange}
          options={tables}
        />
        <Radio.Group
          name="dishesOrder"
          onChange={handleOrderChange}
          value={table.orderedTable.dishesOrder}
          style={{ padding: 10 }}
        >
          <Space direction="vertical">
            <Radio value="заказать еду на месте">Заказать еду на месте</Radio>
            <Radio value="заказать сейчас">Заказать сейчась</Radio>
          </Space>
        </Radio.Group>
        {table.orderedTable.dishesOrder === "заказать сейчас" ? (
          <FoodMenu />
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
          {table.totalOrderPrice != 0 && (
            <span
              style={{
                margin: 10,
                padding: 10,
                backgroundColor: "#cfe1e5",
                borderRadius: "10px",
              }}
            >
              {table.totalOrderPrice} c
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
