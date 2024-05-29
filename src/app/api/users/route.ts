import data from "../../../../db.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const users = data.users;
  try {
    // const result =
    //   await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
