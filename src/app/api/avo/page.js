// import { NextResponse } from "next/server";
// import Database from "../../../database/db";

// export default async function allAvos(req) {
//   try {
//     const data = await Database.getAll();
//     return NextResponse.json({
//       length: data.length,
//       data: data
//     });
//   } catch (error) {
//     return NextResponse.error(error.message);
//   }
// }