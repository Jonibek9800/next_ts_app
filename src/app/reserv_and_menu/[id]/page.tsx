import { getDishesById } from "@/shared/services/dishes_service/dishes_service";
import { IFood, IProduct } from "@/shared/ui/interfaces";
import { Image } from "antd";
import { Content } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const FoodInfo = async ({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) => {
  console.log(searchParams.query);
  const food: IProduct = await getDishesById(
    "/products",
    searchParams?.query ?? "1"
  );
  console.log(food);
  return (
    <>
      <Content
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: 10,
        }}
      >
        <div style={{ padding: 10, margin: "auto" }}>
          <Image
            style={{ borderRadius: 10, maxWidth: 600, maxHeight: 600 }}
            src={food.thumbnail}
            alt={food.title}
          />
        </div>
        <div style={{ textAlign: "center", maxWidth: 350, margin: "auto" }}>
          <Title level={2}>{food.title}</Title>
          <Paragraph>Калорийность {food.price}</Paragraph>

          <Paragraph>{food.description}</Paragraph>
        </div>
      </Content>
    </>
  );
};

export default FoodInfo;
