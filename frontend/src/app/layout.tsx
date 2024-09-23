import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/UI/Footer";
import NavBar from "../components/UI/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobNest",
  description: "Job search platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto bg-gray-100
      w-3/4
      
      
      ${inter.className}`}
      >
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
