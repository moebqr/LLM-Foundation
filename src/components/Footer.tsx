import React from 'react';
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 text-center text-muted-foreground pt-8 pb-16 bg-gray-50">
        <p>
            Made & Compiled by
            <Button variant="link" asChild>
                <a href="https://github.com/moebqr" className='dark:text-black' target="_blank" rel="noopener noreferrer">
                    Mohamed Alderazi
                </a>
            </Button>
        </p>
      <p>
        View the source code on
        <Button variant="link" asChild>
          <a
            href="https://github.com/yourusername/llm-research-papers"
            target="_blank"
            rel="noopener noreferrer"
            className='dark:text-black'
          >
            GitHub
          </a>
        </Button>
      </p>
    </footer>
  );
};

export default Footer;