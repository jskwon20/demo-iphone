import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Specs } from '@/components/Specs';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Specs />
      <CTA />
    </main>
  );
}
