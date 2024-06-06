"use client";
import { Pagination } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IDataProps } from "../food-menu/FoodMenu";
import { useNavigateStore } from "@/shared/store/navigate/navigate";

const PaginationPage = ({ data }: { data: IDataProps }) => {
  const searchParams = useSearchParams();
  const page = useNavigateStore((state) => state.page);
  const setPage = useNavigateStore((state) => state.setPage);
  const { replace } = useRouter();
  const pathname = usePathname();

  const updateRoute = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
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
        defaultPageSize={data.limit}
        total={data.total}
        onChange={changePage}
      />
    </>
  );
};

export default PaginationPage;
