import React from 'react';
import { BookOpen, User, Settings, BarChart2, Clock, BookMarked } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import QuickTipsCarousel from '@/components/QuickTipsCarousel';

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
    <div className="min-h-screen bg-gradient-to-br from-dodger-blue-900 to-dodger-blue-950 p-8">
      <nav className="bg-dodger-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-4 mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-dodger-blue-100">Text Titan</div>
          <div className="space-x-4">
            <a href="#" className="text-dodger-blue-200 hover:text-dodger-blue-100 transition-colors"><BookOpen className="inline-block mr-1" size={20} />Practice</a>
            <a href="#" className="text-dodger-blue-200 hover:text-dodger-blue-100 transition-colors"><User className="inline-block mr-1" size={20} />Profile</a>
            <a href="#" className="text-dodger-blue-200 hover:text-dodger-blue-100 transition-colors"><Settings className="inline-block mr-1" size={20} />Settings</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto">
        <h1 className="text-4xl font-bold text-dodger-blue-100 mb-8 text-center">{welcomeMessage}</h1>

        <div className="flex justify-center mb-12">
          <Button className="bg-dodger-blue-500 hover:bg-dodger-blue-400 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Start Practice
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-dodger-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-dodger-blue-100">
                <BarChart2 className="mr-2" /> Recent Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="text-dodger-blue-200">
              <p>{progressDigest}</p>
            </CardContent>
          </Card>

          <QuickTipsCarousel tips={readingTips} />
        </div>

        <Card className="bg-dodger-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-dodger-blue-100">
              <BookMarked className="mr-2" /> Recommended Reading Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {readingMaterials.map((material, index) => (
                <li key={index}>
                  <a href={material.url} className="text-dodger-blue-300 hover:text-dodger-blue-100 transition-colors">{material.title}</a>
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