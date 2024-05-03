import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { cancelOrderedDish, handleOrderFood, totalOrderPrice } from "@/store/features/table_reservation/table_reservation";
import { Button, Card, Space, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import Title from "antd/es/typography/Title";
import { FC, useEffect, useState } from "react";
import { IFood } from "../../ui/interfaces";


interface IFoodProps {
    food: IFood,
    setTotalSum: Function,
    totalSum: number
}


const Food: FC<IFoodProps> = ({ food, setTotalSum, totalSum }) => {

    const orderedFood = useAppSelector(state => state.table.orderedFood)
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const isAddFood = () => {
        const reserFood = orderedFood.filter(dish => dish.dish.id == food.id)
        if (reserFood.length !== 0) {
            return true
        } else {
            return false
        }
    }

    const removeOrder = (dishId: number) => {
        const removeDish = orderedFood.filter(item => item.dish.id === dishId)
        setTotalSum((prev: number) => prev -= (removeDish[0].dish.price * removeDish[0].quantity))
        const newArr = orderedFood.filter(item => item.dish.id !== dishId)
        dispatch(cancelOrderedDish(newArr))
        console.log(newArr);
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => { dispatch(totalOrderPrice(totalSum)); }, [totalSum]);

    const handleOrder = (dish: IFood) => {
        setTotalSum((prev: number) => prev += (dish.price * quantity))
        const updateOrderedFood = [...orderedFood, { dish, quantity }]
        dispatch(handleOrderFood(updateOrderedFood))
    };


    return <Card key={food.id}
        style={{ width: "300px", textAlign: "start" }}
        cover={<img style={{ height: 200, borderRadius: 10 }} alt="" src={food.image} />}>
        <Meta
            style={{ fontSize: 16 }}
            title={<Tooltip title={food.foodName}><span style={{ fontSize: 20 }}>{food.foodName}</span></Tooltip>}
            description={`Калорийность ${food.calories}`}
        />
        <Title level={4} style={{ fontSize: 16 }}>{food.price} c</Title>
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
    </Card>;
}

export default Food;