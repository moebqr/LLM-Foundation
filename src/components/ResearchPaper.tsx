import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import AudioPlayer from './AudioPlayer';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Headphones } from 'lucide-react';

interface ResearchPaperProps {
  title: string;
  summary: string;
  authors: string[];
  pdfUrl: string;
  podcastUrl: string;
}

const ResearchPaper: React.FC<ResearchPaperProps> = ({
  title,
  summary,
  authors,
  pdfUrl,
  podcastUrl,
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-2">{summary}</p>
        <p className="text-sm text-muted-foreground mb-4">
          Authors: {authors.join(', ')}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            Open PDF
          </a>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Headphones className="mr-2 h-4 w-4" />
              Listen to Podcast
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[400px] md:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Listen to Podcast</DialogTitle>
            </DialogHeader>
            <AudioPlayer src={podcastUrl} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ResearchPaper;