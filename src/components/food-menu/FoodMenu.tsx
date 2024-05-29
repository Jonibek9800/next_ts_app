import Food from "../food/Food";
import { getDishes } from "@/shared/services/dishes_service/dishes_service";
import { IFood, IProduct } from "@/shared/ui/interfaces";
import PaginationWidget from "../pagination-widget/PaginationWidget";
export interface IDataProps {
  data: IProduct[];
  items: number;
}
export const revalidate = 10;

const FoodMenu = async ({ page }: { page: string }) => {
  const data = await getDishes("/dishes", page ?? "1");
  console.log(data);

  return (
    <>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {data !== undefined
              ? data.data.map((dish: any) => {
                  return <Food key={dish.id} food={dish} />;
                })
              : null}
          </div>
          <PaginationWidget data={data} />
        </>
      )}
    </>
  );
};

export default FoodMenu;
