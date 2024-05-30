import { getDishesById } from "@/shared/services/dishes_service/dishes_service";
import { IFood } from "@/shared/ui/interfaces";
import { Divider, Image } from "antd";
import { Content } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const FoodInfo = async ({
  searchParams,
}: {
  searchParams: { id: string; page: string };
}) => {
  const food: IFood = await getDishesById("/dishes", searchParams?.id ?? "1");
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
          <Divider />
          <Paragraph>Калорийность {food.calories}</Paragraph>
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "end",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h4 style={{ fontSize: 22, fontWeight: 500, lineHeight: 0 }}>
              {food.price} c
            </h4>
            <span>/ 400 гр</span>
          </div>
          <Divider />
          <div>
            <Title level={4}>Описаные</Title>
            <Paragraph>{food.description}</Paragraph>
          </div>
        </div>
      </Content>
    </>
  );
};

export default FoodInfo;
