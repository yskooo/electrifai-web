import { Unbounded } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from './context/DarkModeContext';
import type { Metadata } from 'next';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const unbounded = Unbounded({
  weight: ['400', '500', '700'], // Choose the weights you use
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ElectrifAI | The Smart Choice for Energy Optimization',
  description: 'ElectrifAI is an AI-driven platform focused on enhancing electricity efficiency and security.',
  openGraph: {
    type: 'website',
    title: 'ElectrifAI PH | Making Each kWh Count',
    description: 'ElectrifAI is an AI-driven platform focused on enhancing electricity efficiency and security.',
    url: 'https://www.electrifai.tech',
    images: [
      {
        url: 'https://www.electrifai.tech/svgs/metatag.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElectrifAI | The Smart Choice for Energy Optimization',
    description: 'ElectrifAI is an AI-driven platform focused on enhancing electricity efficiency and security.',
    images: ['https://www.electrifai.tech/svgs/metatag.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${unbounded.className}`}>
        <DarkModeProvider>
          <div className="min-h-screen bg-gradient-to-r from-[#eef2f3] to-[#ffffff] dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#001027]">
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}