import data from "../../../../db.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const dishes = data.dishes;
  const { searchParams } = new URL(request.url);
  const page: string | null = searchParams.get("page");
  console.log(searchParams);

  const PER_PAGE = 10;
  const paginateData = () => {
    const startIndex = (Number(page) - 1) * PER_PAGE;

    return page ? [...dishes].splice(startIndex, PER_PAGE) : dishes;
  };
  try {
    return NextResponse.json(
      {
        data: [...paginateData()],
        total: dishes.length,
        page: Number(page) ?? 1,
        limit: PER_PAGE,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
