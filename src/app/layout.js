import GlobalState from "@/context";
import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/auth-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix Clone App",
  description: "Neflix Clone App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState>{children}</GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}
