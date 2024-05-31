"use client";
import Food from "../food/Food";
import { IFood } from "@/shared/ui/interfaces";
import PaginationWidget from "../pagination-widget/PaginationWidget";
export interface IDataProps {
  data: IFood[];
  total: number;
  limit: number;
}
export const revalidate = 10;

const FoodMenu = ({ data }: { data: IDataProps }) => {
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
