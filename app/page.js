import HeroSection from '@/components/HeroSection';
import QuickServices from '@/components/QuickServices';
import FeaturedServices from '@/components/FeaturedServices';
import OffersSection from '@/components/OffersSection';
import TrustSection from '@/components/TrustSection';
import GalleryPreview from '@/components/GalleryPreview';
import ReviewsSection from '@/components/ReviewsSection';
import BookingCTA from '@/components/BookingCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickServices />
      <FeaturedServices />
      <OffersSection />
      <TrustSection />
      <GalleryPreview />
      <ReviewsSection />
      <BookingCTA />
    </>
  );
}
