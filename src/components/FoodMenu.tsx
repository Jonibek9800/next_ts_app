"use client"

import { useAppSelector } from "@/shared/hooks/hooks";
import { FC, useState } from "react";
import { IFood } from "../shared/ui/interfaces";
import Food from "./food/Food";


const FoodMenu: FC = () => {

    const { dishes } = useAppSelector(state => state.dishes);

    const [totalSum, setTotalSum] = useState(0);
    return <div style={{ display: 'flex', flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
        {dishes.map(dish => {
            return <Food key={dish.id} food={dish} setTotalSum={setTotalSum} totalSum={totalSum} />
        })}
    </div>;
}

export default FoodMenu;