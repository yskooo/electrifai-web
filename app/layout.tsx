import { Poppins } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from './context/DarkModeContext';
import Head from 'next/head';

// Import the Poppins font with weight '500'
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

// Remove the 'Metadata' type since we'll be handling meta tags manually
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>ElectrifAI | The Smart Choice for Energy Optimization</title>
        <meta name="description" content="ElectrifAI is an AI-driven platform focused on enhancing electricity efficiency and security that is aligned to the UN Sustainable Development Goals. The company is spearheaded by a team of students from the Polytechnic University of the Philippines (PUP) Manila, under the team of PENTATRONICS." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.electrifai.tech" />
        <meta property="og:title" content="ElectrifAI | The Smart Choice for Energy Optimization" />
        <meta property="og:description" content="ElectrifAI is an AI-driven platform focused on enhancing electricity efficiency and security that is aligned to the UN Sustainable Development Goals. The company is spearheaded by a team of students from the Polytechnic University of the Philippines (PUP) Manila, under the team of PENTATRONICS." />
        <meta property="og:image" content="https://www.electrifai.tech/svgs/metatag.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.electrifai.tech" />
        <meta property="twitter:title" content="ElectrifAI | The Smart Choice for Energy Optimization" />
        <meta property="twitter:description" content="ElectrifAI is an AI-driven platform focused on enhancing electricity efficiency and security that is aligned to the UN Sustainable Development Goals. The company is spearheaded by a team of students from the Polytechnic University of the Philippines (PUP) Manila, under the team of PENTATRONICS." />
        <meta property="twitter:image" content="https://www.electrifai.tech/svgs/metatag.png" />
      </Head>
      <DarkModeProvider>
        <body className={poppins.className}>
          {children}
        </body>
      </DarkModeProvider>
    </html>
  );
}
