import data from "../../../../../db.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const dishes = data.dishes;
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const food = dishes.filter((dish) => dish.id === id);
  console.log(id, food);

  try {
    return NextResponse.json({ ...food[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
