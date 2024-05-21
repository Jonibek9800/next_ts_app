import { getDishesById } from "@/shared/services/dishes_service/dishes_service";
import { IFood } from "@/shared/ui/interfaces";
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
  const food: IFood = await getDishesById(
    "/dishes",
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
            src={food.image}
            alt={food.foodName}
          />
        </div>
        <div style={{ textAlign: "center", maxWidth: 350, margin: "auto" }}>
          <Title level={2}>{food.foodName}</Title>
          <Paragraph>Калорийность {food.calories}</Paragraph>

          <Paragraph>{food.description}</Paragraph>
        </div>
      </Content>
    </>
  );
};

export default FoodInfo;
