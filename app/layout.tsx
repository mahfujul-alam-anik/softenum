import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Softenum | Mahfujul Alam Anik's Portfolio",
  description:
    "Professional Web and App Development Services designed to transform your concepts into user-friendly digital experiences. I specialize in creating responsive websites and high-performance mobile apps that engage users and boost business growth. With expertise in front-end and back-end development, I deliver customized solutions that meet your unique needs, ensuring your online presence stands out in a competitive market. Mahfujul Alam Anik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
