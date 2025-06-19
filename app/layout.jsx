import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mi tienda con Next.js - HomePage",
  description: "Esta es la pagina principal de mi tienda con Next.js",
  keywords: "nextjs, tienda, ecommerce, react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
