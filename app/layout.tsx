import type { Metadata } from "next";

import "./globals.css";
import Appbar from "@/components/ui/Appbar";
import Bg from "@/components/Bg";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Shubham Lad | Portfolio ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=panchang@200,300,400,500,600,700,800,1&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>

      </head>
      <body className="font-spaceGrotesk scroll-smooth" >
        <Bg />
        <Appbar />
        <main className="min-h-[100vh] flex justify-center">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
