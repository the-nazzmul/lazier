import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const font = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lazier",
  description:
    "Why should you work hard when you can be smart and lazy? Automate your work with Lazier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}  antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
