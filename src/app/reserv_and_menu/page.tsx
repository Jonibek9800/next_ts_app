import FoodMenu from "@/components/food-menu/FoodMenu";
import ReservWidget from "@/components/reserv-widget/ReservWidget";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const MenuAndReserv = ({
  searchParams,
}: {
  searchParams?: { id: string; page: string };
}) => {
  return (
    <Content style={{ textAlign: "center" }}>
      <ReservWidget page={searchParams?.page ?? "1"} />
      <Title level={3}>Меню</Title>
      <FoodMenu page={searchParams?.page ?? "1"} />
    </Content>
  );
};

export default MenuAndReserv;
