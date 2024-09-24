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
          <li>Browse through the collection of 12 influential research papers on Large Language Models (LLMs).</li>
          <li>Click on the &quot;Open PDF&quot; button to view the research paper.</li>
          <li>Click on the &quot;Listen to Podcast&quot; button to open the audio player.</li>
          <li>I recommend going through the papers in order. If not, at least go through the first 3 and the last 1.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HowToUse;