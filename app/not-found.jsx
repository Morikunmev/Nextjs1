import Link from "next/link";
export default function NotFound() {
  return (
    <section>
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p>Por favor, verifica la URL o regresa a la página principal.</p>
        <Link href="/">Volver a la página principal</Link>
    </section>
  );
}
