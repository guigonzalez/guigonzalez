import { Hero } from '@/components/home/Hero';
import { ToolsSection } from '@/components/home/ToolsSection';
import { CasesGrid } from '@/components/home/CasesGrid';
import { ContactCTA } from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolsSection />
      <CasesGrid />
      <ContactCTA />
    </>
  );
}
