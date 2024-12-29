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
        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Softenum | Mahfujul Alam Anik's Portfolio"
        />
        <meta
          name="description"
          content="Professional Web and App Development Services designed to transform your concepts into user-friendly digital experiences. I specialize in creating responsive websites and high-performance mobile apps that engage users and boost business growth. With expertise in front-end and back-end development, I deliver customized solutions that meet your unique needs, ensuring your online presence stands out in a competitive market. Mahfujul Alam Anik."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softenum.com/" />
        <meta
          property="og:title"
          content="Softenum | Mahfujul Alam Anik's Portfolio"
        />
        <meta
          property="og:description"
          content="Professional Web and App Development Services designed to transform your concepts into user-friendly digital experiences. I specialize in creating responsive websites and high-performance mobile apps that engage users and boost business growth. With expertise in front-end and back-end development, I deliver customized solutions that meet your unique needs, ensuring your online presence stands out in a competitive market. Mahfujul Alam Anik."
        />
        <meta
          property="og:image"
          content="https://www.softenum.com/favicon.ico"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://softenum.com/" />
        <meta
          property="twitter:title"
          content="Softenum | Mahfujul Alam Anik's Portfolio"
        />
        <meta
          property="twitter:description"
          content="Professional Web and App Development Services designed to transform your concepts into user-friendly digital experiences. I specialize in creating responsive websites and high-performance mobile apps that engage users and boost business growth. With expertise in front-end and back-end development, I deliver customized solutions that meet your unique needs, ensuring your online presence stands out in a competitive market. Mahfujul Alam Anik."
        />
        <meta
          property="twitter:image"
          content="https://www.softenum.com/favicon.ico"
        />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Web Development, web development agency, agency, App Development, Portfolio, Mahfujul Alam Anik, Responsive Websites, Digital Solutions"
        />
        <meta name="author" content="Mahfujul Alam Anik" />
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
