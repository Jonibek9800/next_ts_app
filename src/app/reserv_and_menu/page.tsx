import FoodMenu, { IDataProps } from "@/components/food-menu/FoodMenu";
import ReservWidget from "@/components/reserv-and-menu/ReservWidget";
import { getDishes } from "@/shared/services/dishes_service/dishes_service";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const MenuAndReserv = async ({
  searchParams,
}: {
  searchParams?: { id: string; page: string };
}) => {
  const data: IDataProps = await getDishes(
    "/dishes",
    searchParams?.page ?? "1"
  );
  return (
    <Content style={{ textAlign: "center" }}>
      <ReservWidget data={data} />
      <Title level={3}>Меню</Title>
      <FoodMenu data={data} />
    </Content>
  );
};

export default MenuAndReserv;
