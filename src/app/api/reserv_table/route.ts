import data from "../../../../db.json";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const reserv = data.reservTable;
  try {
    // const result =
    //   await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return NextResponse.json([...reserv], { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const reservTable = data.reservTable;
    const { searchParams } = new URL(request.url);
    const reserveTable = searchParams.get("reserve_table");
    const filePath = path.join(process.cwd(), "db.json");
    if (reserveTable) {
      reservTable.push(JSON.parse(reserveTable));
    }
    fs.writeFileSync(filePath, JSON.stringify(reservTable));

    // const result =
    //   await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return NextResponse.json(
      { message: "Данные успешно добавлены" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
