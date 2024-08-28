import HomePage from '@/components/HomePage';
import { getWelcomeMessage, getProgressDigest, getRecommendedReadingMaterials } from '../lib/api';

export default async function Home() {
  const welcomeMessage = await getWelcomeMessage(1);
  const progressDigest = await getProgressDigest(1);
  const readingMaterials = await getRecommendedReadingMaterials(1);

  return (
    <HomePage
      welcomeMessage={welcomeMessage}
      progressDigest={progressDigest}
      readingMaterials={readingMaterials}
    />
  );
}