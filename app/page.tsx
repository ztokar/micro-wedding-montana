import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Vision />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
