import Food from "../food/Food";
import { getDishes } from "@/shared/services/dishes_service/dishes_service";
import { IFood } from "@/shared/ui/interfaces";
import PaginationWidget from "../pagination-widget/PaginationWidget";
import { BASE_API_URL } from "@/shared/services";
export interface IDataProps {
  data: IFood[];
  items: number;
}
export const revalidate = 10;

const FoodMenu = async ({ page }: { page: string }) => {
  if (!BASE_API_URL) {
    return <h1>Not found Menu</h1>;
  }
  const data: IDataProps = await getDishes("/dishes", page ?? "1");

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
