import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./(components)/Navbar";
import clsx from 'clsx';
import { Recursive } from 'next/font/google'

const recursive = Recursive({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "NeuroKnight MRI: Detecting Brain Tumors",
  description: 'Author: Kaushik Barman',
  icons: {
    icon: '/knight.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("bg-white antialiased text-[#111827] h-full", recursive.className)}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
