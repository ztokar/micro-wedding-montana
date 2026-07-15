import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import Vision from '@/components/Vision';
import LocationSection from '@/components/LocationSection';
import WhyChoose from '@/components/WhyChoose';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Authority from '@/components/Authority';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import GuidesSection from '@/components/GuidesSection';
import LodgingSection from '@/components/LodgingSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <IntroSection />
      <Vision />
      <LocationSection />
      <LodgingSection />
      <WhyChoose />
      <Gallery />
      <FAQ />
      <Authority />
      <GuidesSection />
      <Contact />
      <Footer />
    </main>
  );
}
