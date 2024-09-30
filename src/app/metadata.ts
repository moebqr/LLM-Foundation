import { Metadata } from 'next';

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