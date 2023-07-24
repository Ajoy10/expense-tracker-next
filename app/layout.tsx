"use client";
import { Header } from "@/components/Header";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track all your expenses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-woodsmoke-950  text-slate-100 h-screen flex flex-col"
        }
      >
        <SessionProvider>
          <Header />
          <main className="px-8 flex flex-col justify-center items-center flex-1">
            {children}
          </main>
          {/* Footbar if any */}
        </SessionProvider>
      </body>
    </html>
  );
}
