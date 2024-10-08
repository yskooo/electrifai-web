import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from './context/DarkModeContext';

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})
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
      <DarkModeProvider>
        <body className={poppins.className}>{children}</body>
      </DarkModeProvider>
    </html>
  );
}
