import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { Providers } from "./providers";

const fire_sans = Fira_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Devies Chat Bot",
  description: "Chatbot for Devies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fire_sans.className} h-full`}>
      <body className={`${fire_sans.className} h-full`}>
        <Providers>
          <div
            className="flex flex-col h-full md:p-8"
            style={{ background: "rgb(38, 38, 41)" }}
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
