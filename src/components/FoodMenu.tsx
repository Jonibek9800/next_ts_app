"use client";

import { useAppSelector, useDishes } from "@/shared/hooks/hooks";
import { FC, useState } from "react";
import { IFood } from "../shared/ui/interfaces";
import Food from "./food/Food";
import { Pagination } from "antd";

const FoodMenu: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useDishes(currentPage);
  
  const changePage = (page: number) => {
    setCurrentPage(page);
    console.log(page);
  };

  const [totalSum, setTotalSum] = useState(0);
  return (
    <>
      {isLoading ? (
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
            {data?.data !== undefined
              ? data.data.map((dish) => {
                  return (
                    <Food
                      key={dish.id}
                      food={dish}
                      setTotalSum={setTotalSum}
                      totalSum={totalSum}
                    />
                  );
                })
              : null}
          </div>
          <Pagination
          style={{marginTop: 10}}
            current={currentPage}
            total={data?.items}
            onChange={changePage}
          />
        </>
      )}
    </>
  );
};

export default FoodMenu;
