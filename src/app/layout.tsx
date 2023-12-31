import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { TanstackProvider } from "@/providers";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TanstackProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </TanstackProvider>
  );
}
