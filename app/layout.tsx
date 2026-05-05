import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrains_Mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salty Licorice Radio",
  description: "Every 2nd and 4th Tuesday of the month on Germantown Community Radio",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrains_Mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-900 text-lime-400 font-mono">{children}</body>
    </html>
  );
}
