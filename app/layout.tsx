import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import ReactQueryProviders from "./providers/ReactQueryProviders";
import Footer from "./components/layout/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="" >
        <ReactQueryProviders>
        <Header/>
        {children}
        <Footer/>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
