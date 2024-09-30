'use client'
import React from 'react';
import ResearchPaper from '../components/ResearchPaper';
import { Hero } from "../components/Hero";
import Footer from '../components/Footer';
import HowToUse from '../components/HowToUse';
import { RainbowButton } from "../components/magicui/rainbow-button";
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

const researchPapers = [
  {
    title: "Attention Is All You Need",
    summary: "Introduces the Transformer architecture, which has become the foundation for many modern LLMs.",
    authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit", "Llion Jones", "Aidan N. Gomez", "Łukasz Kaiser", "Illia Polosukhin"],
    pdfUrl: "https://arxiv.org/pdf/1706.03762.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQBBFDmbjkQWHs4qmvAFYKGL8ebcp5VwPX6lg21",
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    summary: "Presents BERT, a bidirectional transformer model that revolutionized NLP tasks.",
    authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee", "Kristina Toutanova"],
    pdfUrl: "https://arxiv.org/pdf/1810.04805.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQBfOWtMBJfmh7l5TqDtw2xdIr3sPAWHOgYyLQS",
  },
  {
    title: "Language Models are Few-Shot Learners",
    summary: "Demonstrates the capability of large language models to perform tasks with minimal examples.",
    authors: ["Tom B. Brown", "Benjamin Mann", "Nick Ryder", "Melanie Subbiah", "Jared Kaplan", "Prafulla Dhariwal", "Arvind Neelakantan", "Pranav Shyam", "Girish Sastry", "Amanda Askell", "Sandhini Agarwal", "Ariel Herbert-Voss", "Gretchen Krueger", "Tom Henighan", "Rewon Child", "Aditya Ramesh", "Daniel M. Ziegler", "Jeffrey Wu", "Clemens Winter", "Christopher Hesse", "Mark Chen", "Eric Sigler", "Mateusz Litwin", "Scott Gray", "Benjamin Chess", "Jack Clark", "Christopher Berner", "Sam McCandlish", "Alec Radford", "Ilya Sutskever", "Dario Amodei"],
    pdfUrl: "https://arxiv.org/pdf/2005.14165.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQBVSNqFNVWyDbK07GaJX3IABSVL6MoetiRgCWu",
  },
  {
    title: "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer",
    summary: "Proposes a unified framework for various NLP tasks using a text-to-text approach.",
    authors: ["Colin Raffel", "Noam Shazeer", "Adam Roberts", "Katherine Lee", "Sharan Narang", "Michael Matena", "Yanqi Zhou", "Wei Li", "Peter J. Liu"],
    pdfUrl: "https://arxiv.org/pdf/1910.10683.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQB3MVvtjsTuRr8yNzkUSO2cAgCmwVi65b7EahP",
  },
  {
    title: "RoBERTa: A Robustly Optimized BERT Pretraining Approach",
    summary: "Presents an optimized method for pretraining BERT models, achieving state-of-the-art results.",
    authors: ["Yinhan Liu", "Myle Ott", "Naman Goyal", "Jingfei Du", "Mandar Joshi", "Danqi Chen", "Omer Levy", "Mike Lewis", "Luke Zettlemoyer", "Veselin Stoyanov"],
    pdfUrl: "https://arxiv.org/pdf/1907.11692.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQBBezCsKkQWHs4qmvAFYKGL8ebcp5VwPX6lg21",
  },
  {
    title: "LLaMA: Open and Efficient Foundation Language Models",
    summary: "Introduces LLaMA, a series of foundation language models that are open and efficient.",
    authors: ["Hugo Touvron", "Louis Martin", "Kevin Stone", "Peter Albert", "Amjad Almahairi", "Raphaël Gontijo Lopes", "Timothy Dettmers", "Myle Ott", "Francisco Massa", "Alexandre Défossez", "Timothy Lewis", "Angela Fan", "Naman Goyal", "Edouard Grave", "Michael Auli", "Armand Joulin"],
    pdfUrl: "https://arxiv.org/pdf/2302.13971.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQB2lokK6cfwF4hqKJYmx6UkceLp9DNgsQbZzAE",
  },
  {
    title: "BLOOM: A 176B-Parameter Open-Access Multilingual Language Model",
    summary: "Presents BLOOM, a large multilingual language model with 176 billion parameters.",
    authors: ["BigScience Workshop"],
    pdfUrl: "https://arxiv.org/pdf/2211.05100.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQBg1HGC3LIWNat3myb01iQXleUJB45wVGTDFLM",
  },
  {
    title: "PaLM: Scaling Language Modeling with Pathways",
    summary: "Introduces PaLM, a large language model that scales language modeling with the Pathways system.",
    authors: ["Aakanksha Chowdhery", "Sharan Narang", "Jacob Devlin", "Maarten Bosma", "Gaurav Mishra", "Adam Roberts", "Paul Barham", "Hyung Won Chung", "Charles Sutton", "Sebastian Gehrmann", "Katherine Lee", "Noam Shazeer", "Megan N. Smith", "Jared Kaplan", "Nan Ding", "Thang Luong", "Quoc V. Le"],
    pdfUrl: "https://arxiv.org/pdf/2204.02311.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQBaFVCD9BrsfcGFQhSbRkJiOxNguP7UvTm1DXY",
  },
  {
    title: "Training Compute-Optimal Large Language Models",
    summary: "Discusses strategies for training large language models in a compute-optimal manner.",
    authors: ["Jared Kaplan", "Sam McCandlish", "Tom Henighan", "Tom B. Brown", "Benjamin Chess", "Rewon Child", "Scott Gray", "Alec Radford", "Jeffrey Wu", "Dario Amodei", "Ilya Sutskever"],
    pdfUrl: "https://arxiv.org/pdf/2203.15556.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQBSUPQT8HY4gHZOeIM31NuWJRFESqv0Vobrjkp",
  },
  {
    title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
    summary: "Introduces FlashAttention, a method for fast and memory-efficient exact attention with IO-awareness.",
    authors: ["Tri Dao", "Daniel Y. Fu", "Stefano Ermon", "Atri Rudra", "Christopher Ré"],
    pdfUrl: "https://arxiv.org/pdf/2205.14135.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQB5sY29PV6GY5DEJouTUdAis47OezqaWpg21xr",
  },
  {
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    summary: "Presents LoRA, a method for low-rank adaptation of large language models.",
    authors: ["Edward J. Hu", "Yelong Shen", "Phillip Wallis", "Zeyuan Allen-Zhu", "Yuanzhi Li", "Shean Wang", "Weizhu Chen"],
    pdfUrl: "https://arxiv.org/pdf/2106.09685.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQBR42r5KgpmAbrlRNLQxqkV53jOWhIu4fawCHT",
  },
  {
    title: "The Llama 3 Herd of Models",
    summary: "Introduces the Llama 3 Herd of Models, a series of models designed for various NLP tasks.",
    authors: ["Hugo Touvron", "Louis Martin", "Kevin Stone", "Peter Albert", "Amjad Almahairi", "Raphaël Gontijo Lopes", "Timothy Dettmers", "Myle Ott", "Francisco Massa", "Alexandre Défossez", "Timothy Lewis", "Angela Fan", "Naman Goyal", "Edouard Grave", "Michael Auli", "Armand Joulin"],
    pdfUrl: "https://arxiv.org/pdf/2302.13971.pdf",
    podcastUrl: "https://utfs.io/f/h8tzHWwZrvQBNibzN9mwlv2VmxSK1RuqjXetP4sdO8kgBnIp",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto sm:px-4 md:px-12 py-8">
        <HowToUse />
        
        <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchPapers.map((paper, index) => (
            <ResearchPaper key={index} {...paper} />
          ))}
        </main>

      </div>
      <div className='flex items-center justify-center flex-col gap-4 py-14'>
        <h1 className='text-2xl font-bold'>
          Found this helpful?
        </h1>
        <p>
          Let us get in touch and see how I can help!
        </p>
        <RainbowButton onClick={() => window.location.href = 'mailto:mohamedalderazi7@gmail.com'}>
          Contact Me Now!
        </RainbowButton>
      </div>
      <Footer />
    </>
  );
}
