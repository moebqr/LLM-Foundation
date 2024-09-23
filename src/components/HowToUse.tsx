import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const HowToUse: React.FC = () => {
  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle>How to Use This Page</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>Browse through the collection of 10 influential research papers on Large Language Models (LLMs).</li>
          <li>Use the "Open PDF" button to access the full paper for in-depth reading.</li>
          <li>Click on "Listen to Podcast" to hear an AI generated podcast discussing the paper.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HowToUse;