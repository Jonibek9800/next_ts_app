"use client"
export const dynamic = "force-dynamic";
import FoodMenu from "@/components/FoodMenu";
import ReservMenu from "@/components/ReservMenu";
import { useAppDispatch } from "@/shared/hooks/hooks";
import { getDishesList } from "@/shared/store/features/dishes/dishes";
import { Button, Image } from "antd";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useEffect, useState, useTransition } from "react";



const MenuAndReserv = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    const [isPending, startTransition] = useTransition();


    useEffect(() => {
        startTransition(() => dispatch(getDishesList()))
    }, [dispatch])

    const toggleClose = () => {
        setOpen(prev => !prev);
    }
    return <Content style={{ textAlign: 'center', }}>
        <Title level={3}>Бронирование</Title>
        <Card
            hoverable
            style={{
                width: 240,
                margin: "auto",
            }}
            cover={<Image alt="example" src="./img/table/table_on_two.jpg" />}
        >
            <Meta
                title={<Button onClick={toggleClose}>Забронировать столик</Button>}
            />
        </Card>
        {open && <ReservMenu onClose={toggleClose} open={open} />}
        <Title level={3}>Меню</Title>
        {isPending ? "Loading..." : <FoodMenu />}
    </Content>;
}

export default MenuAndReserv;