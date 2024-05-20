import Food from "../food/Food";
import { getDishes } from "@/shared/services/dishes_service/dishes_service";
import { IFood } from "@/shared/ui/interfaces";
import PaginationWidget from "../pagination-widget/PaginationWidget";
interface IDataProps {
  data: IFood[];
  items: number;
}

const FoodMenu = async () => {
  const data: IDataProps = await getDishes("/dishes", 1);
  // console.log("context:", searchParams);

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
              ? data.data.map((dish) => {
                  return <Food key={dish.id} food={dish} />;
                })
              : null}
          </div>
          <PaginationWidget data={data.data} />
        </>
      )}
    </>
  );
};

export default FoodMenu;
