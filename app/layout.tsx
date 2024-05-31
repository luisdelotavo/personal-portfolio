import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from 'react';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luis Delotavo's Portfolio",
  description: "Explore my projects, technical skills, and professional experience.",
};

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
      );
}