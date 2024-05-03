import FoodMenu from "@/app/components/FoodMenu";
import ReservMenu from "@/app/components/ReservMenu";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getDishesList } from "@/store/features/dishes/dishes";
import { Button } from "antd";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useEffect, useState, useTransition } from "react";

const MenuAndReserv = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    const dishes = useAppSelector(state => state.dishes);
    const [isPending, startTransition] = useTransition();


    useEffect(() => {
        startTransition(() => dispatch(getDishesList()))
    }, [])

    const toggleClose = () => {
        setOpen(prev => !prev);
    }
    return <Content style={{ textAlign: 'center' }}>
        <Title level={3}>Бронирование</Title>
        <Card
            hoverable
            style={{
                width: 240,
                margin: "auto",
            }}
            cover={<img alt="example" src="./img/table/table_on_two.jpg" />}
        >
            <Meta
                title={<Button onClick={toggleClose}>Забронировать столик</Button>}
            />
        </Card>
        {open && <ReservMenu onClose={toggleClose} open={open} />}
        <Title level={3}>Меню</Title>
        {isPending ? "Loading..." : <FoodMenu dishes={dishes.dishes} />}
    </Content>;
}

export default MenuAndReserv;