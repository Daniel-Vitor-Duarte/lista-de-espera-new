import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Tagmanager from "@/app/Tagmanager";
import Tagmanager2 from "@/app/Tagmanager2";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venda Todo Santo Dia",
  description: "Qualquer pessoa pode começar um negócio digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Suspense>
        <Tagmanager />
        <Tagmanager2 />
      </Suspense>
      
      <body className={sora.className}>{children}</body>
    </html>
  );
}
