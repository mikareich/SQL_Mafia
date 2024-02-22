import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SQL Mafia",
  description:
    "A simple game made to introduce students to the basic functions of sql in a mafia world.",
};

export default function RootLayout({
  story: StoryView,
  tables: TableView,
}: Readonly<{
  story: React.ReactNode;
  tables: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full min-h-screen grid grid-cols-2 gap-10 p-10 ${inter.className}`}
      >
        {TableView}
        {StoryView}
      </body>
    </html>
  );
}
