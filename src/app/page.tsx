'use client'
import React from 'react';
import ResearchPaper from '../components/ResearchPaper';
import { Hero } from "../components/Hero";
import Footer from '../components/Footer';
import HowToUse from '../components/HowToUse';
import { RainbowButton } from "../components/magicui/rainbow-button";


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
  {
    title: "Language Models are Few-Shot Learners",
    summary: "Demonstrates the capability of large language models to perform tasks with minimal examples.",
    authors: ["Tom B. Brown", "Benjamin Mann", "Nick Ryder", "Melanie Subbiah", "Jared Kaplan", "Prafulla Dhariwal", "Arvind Neelakantan", "Pranav Shyam", "Girish Sastry", "Amanda Askell", "Sandhini Agarwal", "Ariel Herbert-Voss", "Gretchen Krueger", "Tom Henighan", "Rewon Child", "Aditya Ramesh", "Daniel M. Ziegler", "Jeffrey Wu", "Clemens Winter", "Christopher Hesse", "Mark Chen", "Eric Sigler", "Mateusz Litwin", "Scott Gray", "Benjamin Chess", "Jack Clark", "Christopher Berner", "Sam McCandlish", "Alec Radford", "Ilya Sutskever", "Dario Amodei"],
    pdfUrl: "https://arxiv.org/pdf/2005.14165.pdf",
    podcastUrl: "https://example.com/gpt3-podcast.mp3",
  },
  {
    title: "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer",
    summary: "Proposes a unified framework for various NLP tasks using a text-to-text approach.",
    authors: ["Colin Raffel", "Noam Shazeer", "Adam Roberts", "Katherine Lee", "Sharan Narang", "Michael Matena", "Yanqi Zhou", "Wei Li", "Peter J. Liu"],
    pdfUrl: "https://arxiv.org/pdf/1910.10683.pdf",
    podcastUrl: "https://example.com/t5-podcast.mp3",
  },
  {
    title: "RoBERTa: A Robustly Optimized BERT Pretraining Approach",
    summary: "Presents an optimized method for pretraining BERT models, achieving state-of-the-art results.",
    authors: ["Yinhan Liu", "Myle Ott", "Naman Goyal", "Jingfei Du", "Mandar Joshi", "Danqi Chen", "Omer Levy", "Mike Lewis", "Luke Zettlemoyer", "Veselin Stoyanov"],
    pdfUrl: "https://arxiv.org/pdf/1907.11692.pdf",
    podcastUrl: "https://example.com/roberta-podcast.mp3",
  },
  {
    title: "LLaMA: Open and Efficient Foundation Language Models",
    summary: "Introduces LLaMA, a series of foundation language models that are open and efficient.",
    authors: ["Hugo Touvron", "Louis Martin", "Kevin Stone", "Peter Albert", "Amjad Almahairi", "Raphaël Gontijo Lopes", "Timothy Dettmers", "Myle Ott", "Francisco Massa", "Alexandre Défossez", "Timothy Lewis", "Angela Fan", "Naman Goyal", "Edouard Grave", "Michael Auli", "Armand Joulin"],
    pdfUrl: "https://arxiv.org/pdf/2302.13971.pdf",
    podcastUrl: "https://example.com/llama-podcast.mp3",
  },
  {
    title: "BLOOM: A 176B-Parameter Open-Access Multilingual Language Model",
    summary: "Presents BLOOM, a large multilingual language model with 176 billion parameters.",
    authors: ["BigScience Workshop"],
    pdfUrl: "https://arxiv.org/pdf/2211.05100.pdf",
    podcastUrl: "https://example.com/bloom-podcast.mp3",
  },
  {
    title: "PaLM: Scaling Language Modeling with Pathways",
    summary: "Introduces PaLM, a large language model that scales language modeling with the Pathways system.",
    authors: ["Aakanksha Chowdhery", "Sharan Narang", "Jacob Devlin", "Maarten Bosma", "Gaurav Mishra", "Adam Roberts", "Paul Barham", "Hyung Won Chung", "Charles Sutton", "Sebastian Gehrmann", "Katherine Lee", "Noam Shazeer", "Megan N. Smith", "Jared Kaplan", "Nan Ding", "Thang Luong", "Quoc V. Le"],
    pdfUrl: "https://arxiv.org/pdf/2204.02311.pdf",
    podcastUrl: "https://example.com/palm-podcast.mp3",
  },
  {
    title: "Training Compute-Optimal Large Language Models",
    summary: "Discusses strategies for training large language models in a compute-optimal manner.",
    authors: ["Jared Kaplan", "Sam McCandlish", "Tom Henighan", "Tom B. Brown", "Benjamin Chess", "Rewon Child", "Scott Gray", "Alec Radford", "Jeffrey Wu", "Dario Amodei", "Ilya Sutskever"],
    pdfUrl: "https://arxiv.org/pdf/2203.15556.pdf",
    podcastUrl: "https://example.com/compute-optimal-podcast.mp3",
  },
  {
    title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
    summary: "Introduces FlashAttention, a method for fast and memory-efficient exact attention with IO-awareness.",
    authors: ["Tri Dao", "Daniel Y. Fu", "Stefano Ermon", "Atri Rudra", "Christopher Ré"],
    pdfUrl: "https://arxiv.org/pdf/2205.14135.pdf",
    podcastUrl: "https://example.com/flashattention-podcast.mp3",
  },
  {
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    summary: "Presents LoRA, a method for low-rank adaptation of large language models.",
    authors: ["Edward J. Hu", "Yelong Shen", "Phillip Wallis", "Zeyuan Allen-Zhu", "Yuanzhi Li", "Shean Wang", "Weizhu Chen"],
    pdfUrl: "https://arxiv.org/pdf/2106.09685.pdf",
    podcastUrl: "https://example.com/lora-podcast.mp3",
  },
  {
    title: "The Llama 3 Herd of Models",
    summary: "Introduces the Llama 3 Herd of Models, a series of models designed for various NLP tasks.",
    authors: ["Hugo Touvron", "Louis Martin", "Kevin Stone", "Peter Albert", "Amjad Almahairi", "Raphaël Gontijo Lopes", "Timothy Dettmers", "Myle Ott", "Francisco Massa", "Alexandre Défossez", "Timothy Lewis", "Angela Fan", "Naman Goyal", "Edouard Grave", "Michael Auli", "Armand Joulin"],
    pdfUrl: "https://arxiv.org/pdf/2302.13971.pdf",
    podcastUrl: "https://example.com/llama3-podcast.mp3",
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
