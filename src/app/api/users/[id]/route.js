import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    // Await params antes de usarlos
    const { id } = await params;
    
    // También puedes obtener searchParams si los necesitas
    const { searchParams } = new URL(request.url);
    console.log(searchParams.get("apellido"));
    
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await res.json();
    return NextResponse.json(data);
}