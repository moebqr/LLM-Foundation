import React from 'react';
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 text-center text-muted-foreground">
      <p>
        View the source code on
        <Button variant="link" asChild>
          <a
            href="https://github.com/yourusername/llm-research-papers"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Button>
      </p>
    </footer>
  );
};

export default Footer;