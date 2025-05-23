import { HeroImage } from '../components/HeroComponent/Hero';
import { LatestPosts } from '../components/LatestPosts/LatestPosts';

export default function HomePage() {
  return (
    <>
      <HeroImage />
      <LatestPosts />
      {/* другие секции */}
    </>
  );
}