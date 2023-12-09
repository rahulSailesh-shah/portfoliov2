import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahul Shah | Full Stack Developer",
  description: "Rahul Shah Portfolio website built with Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full">{children}</body>
    </html>
  );
}
