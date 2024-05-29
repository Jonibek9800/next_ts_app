"use client";
import { IFood } from "@/shared/ui/interfaces";
import { Pagination } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IDataProps } from "../food-menu/FoodMenu";
import { useNavigateStore } from "@/shared/store/navigate/navigate";

const PaginationWidget = ({ data }: { data: IDataProps }) => {
  const searchParams = useSearchParams();
  const page = useNavigateStore((state) => state.page);
  const setPage = useNavigateStore((state) => state.setPage);
  const { replace } = useRouter();
  const pathname = usePathname();
  // const [currentPage, setCurrentPage] = useState(1);
  const updateRoute = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("_page", page.toString());
    console.log("parameters:  ", params);
    replace(`${pathname}?${params.toString()}`);
  };

  const changePage = (page: number) => {
    setPage(page);
    updateRoute(page);
  };

  return (
    <>
      <Pagination
        style={{ marginTop: 10 }}
        current={Number(page)}
        total={data.items}
        onChange={changePage}
      />
    </>
  );
};

export default PaginationWidget;
