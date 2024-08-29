import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElectrifAI",
  description: "ElectrifAI is an AI-driven platform focused on enhancing electricity efficiency and security that is aligned to the UN Sustainable Development Goals. The company is spearheaded by a team of students from the Polytechnic University of the Philippines (PUP) Manila, under the team of PENTATRONICS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
