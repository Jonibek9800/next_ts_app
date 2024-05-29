"use client";
import { useTableStore } from "@/shared/store/table_reservation/table_reservation";
import { Button, Card, Image, Space, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import Title from "antd/es/typography/Title";
import { FC, useState } from "react";
import { IFood, IProduct } from "../../shared/ui/interfaces";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IFoodProps {
  food: IFood;
}

const Food: FC<IFoodProps> = ({ food }) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const orderedFood = useTableStore((state) => state.orderedFood);
  const setOrderedFood = useTableStore((state) => state.setOrderedFood);
  const canseledOrderDishes = useTableStore(
    (state) => state.canseledOrderDishes
  );
  const incrementTotalPrice = useTableStore(
    (state) => state.incrementTotalPrice
  );
  const decrementTotalPrice = useTableStore(
    (state) => state.decrementTotalPrice
  );
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const isAddFood = () => {
    const reserFood = orderedFood.filter((dish) => dish.dish.id == food.id);
    if (reserFood.length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  const removeOrder = (dishId: number) => {
    const removeDish = orderedFood.filter((item) => item.dish.id === dishId);
    decrementTotalPrice(removeDish[0].dish.price * removeDish[0].quantity);
    const newArr = orderedFood.filter((item) => item.dish.id !== dishId);
    canseledOrderDishes(newArr);
  };

  const handleOrder = (dish: IFood) => {
    incrementTotalPrice(dish.price * quantity);
    const updateOrderedFood = [...orderedFood, { dish, quantity }];
    setOrderedFood(updateOrderedFood);
  };

  const handleInfo = () => {
    params.set("query", String(food.id));
    replace(`${pathname}/${food.id}?${params.toString()}`);
  };

  return (
    <Card
      key={food.id}
      style={{ width: "300px", textAlign: "start", cursor: "pointer" }}
      cover={
        <Image
          style={{ height: 200, borderRadius: 10 }}
          alt={food.foodName}
          src={food.image}
        />
      }
    >
      <Meta
        style={{ fontSize: 16 }}
        title={
          <Tooltip title={food.foodName}>
            <span style={{ fontSize: 20 }}>{food.foodName}</span>
          </Tooltip>
        }
        description={`Калорийность ${food.calories}`}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title level={4} style={{ fontSize: 16 }}>
          {food.price} c
        </Title>
        <Button onClick={handleInfo}>Подробности</Button>
      </div>
      <div>
        {!isAddFood() ? (
          <Space>
            <Button onClick={handleDecrement}>-</Button>
            <span>{quantity}</span>
            <Button onClick={handleIncrement}>+</Button>
            <Button onClick={() => handleOrder(food)}>Заказать</Button>
          </Space>
        ) : (
          <Space>
            <Button onClick={() => removeOrder(food.id)}>Отменить</Button>
          </Space>
        )}
      </div>
    </Card>
  );
};

export default Food;
