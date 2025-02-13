// app/layout.tsx
import './globals.css';
import Navbar from './components/navbar';
import React from 'react';
import { Kaisei_HarunoUmi } from 'next/font/google';

// Configure the font
const kaisei = Kaisei_HarunoUmi({
  subsets: ['latin'],  // Add other subsets if needed
  weight: ['400', '700'], // Optional: specify weights if you need multiple weights
});

export const metadata = {
  title: 'Luis Delotavo',
  description: '',
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      {/* Apply the font by adding its className to the body */}
      <body className={`${kaisei.className} bg-white text-black tracking-[-0.1em]`}>
        <Navbar />
        <div className="container mx-auto px-4">{children}</div>
      </body>
    </html>
  );
};

export default Layout;
