import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "../components/theme-provider"

export const metadata: Metadata = {
  title: "Introduction to LLMs",
  description: "By Mohamed Alderazi",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "A Foundational Introduction to LLMs",
    description: "By Mohamed Alderazi",
    url: "llm.mohamedalderazi.com",
    siteName: "Introduction to LLMs",
    images: [
      {
        url: "https://llm.mohamedalderazi.com/assets/preview.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Foundational Introduction to LLMs",
    description: "By Mohamed Alderazi",
    images: ["https://llm.mohamedalderazi.com/assets/preview.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
