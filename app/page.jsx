import Users from "@/components/Users";

export const metadata = {
  title: "Mi tienda con Next.js - HomePage",
  description: "Esta es la pagina principal de mi tienda con Next.js",
  keywords: "nextjs, tienda, ecommerce, react",
};

function Contenido() {
  return (
    <section>
      <h1>Hola mundo</h1>
      <Users />
    </section>
  );
}

export default Contenido;
