'use client';
import { useEffect } from "react";
import { Inter } from 'next/font/google';
import "./styles/globals.css";
import Script from 'next/script';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from '@/components/ui/Navbar';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  // Load Bootstrap JS on client only
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
        />
      </head>
      <body className="h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
