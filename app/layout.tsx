import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import clsx from "clsx";
import Header from "@/components/home/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azeddine | Personal Portfolio",
  description: "Azeddine is a passionate full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" >
      <body
        className={clsx(
          inter.className,
          "relative bg-gray-50 text-gray-950 pt-28 sm:pt-36",
        )}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-50 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem]  -z-50 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
