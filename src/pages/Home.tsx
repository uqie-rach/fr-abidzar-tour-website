import { lazy, Suspense } from 'react';

const HeroSection = lazy(() => import("@/components/Hero"));
const ServicesSection = lazy(() => import("@/components/Services"));
const DestinationsSection = lazy(() => import("@/components/Destinations"));
const BookingSection = lazy(() => import("@/components/Booking"));
const TestimonialsSection = lazy(() => import("@/components/Testimonials"));
const SubscriptionSection = lazy(() => import("@/components/Subscription"));

const Loading = () => <div>Loading section...</div>;

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <ServicesSection />
        <DestinationsSection />
        <BookingSection />
        <TestimonialsSection />
        <SubscriptionSection />
      </Suspense>
    </div>
  )
}

export default Home;
