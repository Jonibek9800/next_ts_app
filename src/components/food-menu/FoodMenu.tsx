import Food from "../food/Food";
import { getDishes } from "@/shared/services/dishes_service/dishes_service";
import { IFood, IProduct } from "@/shared/ui/interfaces";
import PaginationWidget from "../pagination-widget/PaginationWidget";
export interface IDataProps {
  products: IProduct[];
  total: number;
}
export const revalidate = 10;

const FoodMenu = async ({ page }: { page: string }) => {
  const data: IDataProps = await getDishes(
    "/products/category/groceries",
    page ?? "1"
  );
  const paginateData = () => {
    const PER_PAGE = 10;
    const startIndex = (Number(page) - 1) * PER_PAGE;
    return data.products.slice(startIndex, PER_PAGE);
  };
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
              ? paginateData().map((dish) => {
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
