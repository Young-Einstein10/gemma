import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Header from "./header";
import Footer from "./footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <section>
      <Header />
      <main
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </main>
      <Footer />
    </section>
  );
}
