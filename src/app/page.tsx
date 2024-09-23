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
    title: "GPT-3: Language Models are Few-Shot Learners",
    summary: "Demonstrates the capability of large language models to perform tasks with minimal examples.",
    authors: ["Tom B. Brown", "Benjamin Mann", "Nick Ryder", "Melanie Subbiah", "Jared Kaplan", "Prafulla Dhariwal", "Arvind Neelakantan", "Pranav Shyam", "Girish Sastry", "Amanda Askell", "Sandhini Agarwal", "Ariel Herbert-Voss", "Gretchen Krueger", "Tom Henighan", "Rewon Child", "Aditya Ramesh", "Daniel M. Ziegler", "Jeffrey Wu", "Clemens Winter", "Christopher Hesse", "Mark Chen", "Eric Sigler", "Mateusz Litwin", "Scott Gray", "Benjamin Chess", "Jack Clark", "Christopher Berner", "Sam McCandlish", "Alec Radford", "Ilya Sutskever", "Dario Amodei"],
    pdfUrl: "https://arxiv.org/pdf/2005.14165.pdf",
    podcastUrl: "https://example.com/gpt3-podcast.mp3",
  },
  {
    title: "DALL·E: Creating Images from Text",
    summary: "Introduces DALL·E, a neural network that generates images from text descriptions.",
    authors: ["Aditya Ramesh", "Mikhail Pavlov", "Gabriel Goh", "Scott Gray", "Chelsea Voss", "Alec Radford", "Mark Chen", "Ilya Sutskever"],
    pdfUrl: "https://arxiv.org/pdf/2102.12092.pdf",
    podcastUrl: "https://example.com/dalle-podcast.mp3",
  },
  {
    title: "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context",
    summary: "Presents an architecture for language modeling that can handle longer-term dependencies.",
    authors: ["Zihang Dai", "Zhilin Yang", "Yiming Yang", "Jaime Carbonell", "Quoc V. Le", "Ruslan Salakhutdinov"],
    pdfUrl: "https://arxiv.org/pdf/1901.02860.pdf",
    podcastUrl: "https://example.com/transformer-xl-podcast.mp3",
  },
  {
    title: "ELMo: Deep contextualized word representations",
    summary: "Introduces ELMo, which uses bidirectional LSTMs to create context-aware word embeddings.",
    authors: ["Matthew E. Peters", "Mark Neumann", "Mohit Iyyer", "Matt Gardner", "Christopher Clark", "Kenton Lee", "Luke Zettlemoyer"],
    pdfUrl: "https://arxiv.org/pdf/1802.05365.pdf",
    podcastUrl: "https://example.com/elmo-podcast.mp3",
  },
  {
    title: "T5: Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer",
    summary: "Proposes a unified framework for various NLP tasks using a text-to-text approach.",
    authors: ["Colin Raffel", "Noam Shazeer", "Adam Roberts", "Katherine Lee", "Sharan Narang", "Michael Matena", "Yanqi Zhou", "Wei Li", "Peter J. Liu"],
    pdfUrl: "https://arxiv.org/pdf/1910.10683.pdf",
    podcastUrl: "https://example.com/t5-podcast.mp3",
  },
  {
    title: "ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators",
    summary: "Introduces a more sample-efficient pre-training task for language representation.",
    authors: ["Kevin Clark", "Minh-Thang Luong", "Quoc V. Le", "Christopher D. Manning"],
    pdfUrl: "https://arxiv.org/pdf/2003.10555.pdf",
    podcastUrl: "https://example.com/electra-podcast.mp3",
  },
  {
    title: "XLNet: Generalized Autoregressive Pretraining for Language Understanding",
    summary: "Proposes a generalized autoregressive pretraining method that overcomes limitations of BERT.",
    authors: ["Zhilin Yang", "Zihang Dai", "Yiming Yang", "Jaime Carbonell", "Ruslan Salakhutdinov", "Quoc V. Le"],
    pdfUrl: "https://arxiv.org/pdf/1906.08237.pdf",
    podcastUrl: "https://example.com/xlnet-podcast.mp3",
  },
  {
    title: "RoBERTa: A Robustly Optimized BERT Pretraining Approach",
    summary: "Presents an optimized method for pretraining BERT models, achieving state-of-the-art results.",
    authors: ["Yinhan Liu", "Myle Ott", "Naman Goyal", "Jingfei Du", "Mandar Joshi", "Danqi Chen", "Omer Levy", "Mike Lewis", "Luke Zettlemoyer", "Veselin Stoyanov"],
    pdfUrl: "https://arxiv.org/pdf/1907.11692.pdf",
    podcastUrl: "https://example.com/roberta-podcast.mp3",
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
