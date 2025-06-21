import { NextResponse } from "next/server";

// extract params
// query database
// comunicate with other services

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json(data);
}
export function POST(request) {
  return NextResponse.json({
    message: "creando datos",
  });
}
export function PUT(request) {
  return NextResponse.json({
    message: "actualizando datos",
  });
}
export function DELETE(request) {
  return NextResponse.json({
    message: "eliminando datos",
  });
}
