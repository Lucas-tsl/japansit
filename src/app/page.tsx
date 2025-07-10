import Hero from '@/components/Hero';
import FeaturedSections from '@/components/FeaturedSections';
import LatestPosts from '@/components/LatestPosts';
import NewsletterSignup from '@/components/NewsletterSignup';
import FloatingParticles from '@/components/FloatingParticles';

export default function Home() {
  return (
    <div className="min-h-screen relative page-transition">
      <FloatingParticles type="sakura" />
      <Hero />
      <FeaturedSections />
      <LatestPosts />
      <NewsletterSignup />
    </div>
  );
}
