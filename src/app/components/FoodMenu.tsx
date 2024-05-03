import { FC, useState } from "react";
import { IFood } from "../ui/interfaces";
import Food from "./Food";

interface IProps {
    dishes: Array<IFood>
}

const FoodMenu: FC<IProps> = ({ dishes }) => {

    const [totalSum, setTotalSum] = useState(0);
    return <div style={{ display: 'flex', flexWrap: "wrap", gap: "10px"}}>
        {dishes.map(dish => {
            return <Food key={dish.id} food={dish} setTotalSum={setTotalSum} totalSum={totalSum}/>
        })}
    </div>;
}

export default FoodMenu;