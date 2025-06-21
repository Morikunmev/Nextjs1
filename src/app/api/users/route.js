import { NextResponse } from "next/server";

console.log(process.env.TOKEN);
// extract params
// query database
// comunicate with other services

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?apikey="+process.env.TOKEN);
  console.log("http://localhost:3000/api/users?apikey="+process.env.TOKEN);
  const data = await res.json();
  return NextResponse.json(data);
}
export async function POST(request) {
  const { nombre, apellido } = await request.json();
  console.log(nombre, apellido);
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
