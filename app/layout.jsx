import { GS } from "@/components/containers/GS";
import { Gfooter } from "@/components/Gfooter";
import "../styles/globals.css";
import Head from "./head";

export default function RootLayout({ children }) {
  // GLOBAL Layout
  return (
    <html lang="es">
      <Head />
      <body className=" overflow-x-hidden">
        <GS>{children}</GS>
        <Gfooter />
      </body>
    </html>
  );
}
