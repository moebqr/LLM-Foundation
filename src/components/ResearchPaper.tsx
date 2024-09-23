import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

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
        <p className="text-sm text-muted-foreground">
          Authors: {authors.join(', ')}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            Open PDF
          </a>
        </Button>
        <Button asChild>
          <a href={podcastUrl} target="_blank" rel="noopener noreferrer">
            Listen to Podcast
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResearchPaper;