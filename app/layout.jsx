import Navbar from "../components/Navbar";
import {Roboto} from "next/font/google";
import './globals.css'


export const metadata = {
  title: "Mi tienda con Next.js - HomePage",
  description: "Esta es la pagina principal de mi tienda con Next.js",
  keywords: "nextjs, tienda, ecommerce, react",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
