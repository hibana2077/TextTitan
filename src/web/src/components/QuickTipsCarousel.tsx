'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface QuickTipsCarouselProps {
  tips: string[];
}

const QuickTipsCarousel: React.FC<QuickTipsCarouselProps> = ({ tips }) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
        setIsAnimating(false);
      }, 500); // 半秒後更換提示，與CSS過渡時間相匹配
    }, 5000); // 每5秒切換一次提示

    return () => clearInterval(intervalId);
  }, [tips.length]);

  return (
    <Card className="bg-dodger-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl h-full">
      <CardHeader>
        <CardTitle className="flex items-center text-dodger-blue-100">
          <Clock className="mr-2" /> Quick Tips
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[150px] flex items-center justify-center">
        <p 
          className={`text-dodger-blue-200 text-center transition-opacity duration-500 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {tips[currentTipIndex]}
        </p>
      </CardContent>
    </Card>
  );
};

export default QuickTipsCarousel;