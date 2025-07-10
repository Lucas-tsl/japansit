import Hero from '@/components/Hero';
import FeaturedSections from '@/components/FeaturedSections';
import LatestPosts from '@/components/LatestPosts';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedSections />
      <LatestPosts />
      <NewsletterSignup />
    </div>
  );
}
