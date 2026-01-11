import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import PriceDisplayModal from "./components/modals/PriceDisplayModal";

export const metadata: Metadata = {
  title: "Airbnb clone",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <PriceDisplayModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
