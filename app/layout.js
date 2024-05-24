'use client'
import { Inter } from "next/font/google";
import { QuizProvider } from "./lib/QuizContext";
import { useRouter } from "next/router";
import "./globals.css";

const inter = Inter({ subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuizProvider>
          {children}
        </QuizProvider>
      </body>
    </html>
  );
}