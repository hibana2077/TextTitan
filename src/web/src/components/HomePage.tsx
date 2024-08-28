import React from 'react';
import { BookOpen, User, Settings, BarChart2, Clock, BookMarked } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  welcomeMessage: string;
  progressDigest: string;
  readingMaterials: Array<{ title: string; url: string }>;
}

const HomePage: React.FC<HomePageProps> = ({ welcomeMessage, progressDigest, readingMaterials }) => {
  const readingTips = [
    "Skim the passage before reading in detail",
    "Identify key words in questions",
    "Practice time management",
    "Don't spend too much time on one question"
  ];

  return (
    <div className="min-h-screen bg-dodger-blue-50">
      <nav className="bg-dodger-blue-600 text-white p-4">
        {/* Navigation content */}
      </nav>

      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold text-dodger-blue-800 mb-6">{welcomeMessage}</h1>

        <Button className="bg-dodger-blue-500 hover:bg-dodger-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 mb-8">
          Start Practice
        </Button>

        {/* Progress and Tips cards */}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookMarked className="mr-2" /> Recommended Reading Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {readingMaterials.map((material, index) => (
                <li key={index}>
                  <a href={material.url} className="text-dodger-blue-600 hover:underline">{material.title}</a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default HomePage;