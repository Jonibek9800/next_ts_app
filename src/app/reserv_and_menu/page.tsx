import FoodMenu from "@/components/food-menu/FoodMenu";
import ReservWidget from "@/components/reserv-widget/ReservWidget";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const MenuAndReserv = () => {
  return (
    <>
      <Content style={{ textAlign: "center" }}>
        <ReservWidget />
        <Title level={3}>Меню</Title>
        <FoodMenu />
      </Content>
    </>
  );
};

export default MenuAndReserv;
