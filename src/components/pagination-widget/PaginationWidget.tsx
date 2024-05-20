"use client";
import { IFood } from "@/shared/ui/interfaces";
import { Pagination } from "antd";
import { useState } from "react";

const PaginationWidget = ({ data }: { data: IFood[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        style={{ marginTop: 10 }}
        current={currentPage}
        total={data?.length}
        onChange={changePage}
      />
    </>
  );
};

export default PaginationWidget;
