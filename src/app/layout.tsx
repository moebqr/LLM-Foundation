import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const fontSans = GeistSans;

export const metadata: Metadata = {
  title: "Introduction to LLMs",
  description: "By Mohamed Alderazi",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { ThemeProvider } from "../components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
      <head />
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
    </>

  )
}
