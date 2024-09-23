import React from 'react';
import ResearchPaper from '../components/ResearchPaper';
import { Hero } from "../components/Hero";
import Footer from '../components/Footer';
import HowToUse from '../components/HowToUse';

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
    podcastUrl: "https://example.com/bert-podcast.mp3",
  },
  // Add 8 more research papers here with similar structure
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

        <Footer />
      </div>
    </>
  );
}
