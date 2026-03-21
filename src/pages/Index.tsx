import { TitleSection } from "@/components/TitleSection";
import { Abstract } from "@/components/Abstract";
import { Experience } from "@/components/Experience";
import { SelectedWork } from "@/components/SelectedWork";
import { Publication } from "@/components/Publication";
import { Technologies } from "@/components/Technologies";
import { Contact } from "@/components/Contact";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { ParallaxBackground } from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParallaxBackground />
      <DarkModeToggle />
      <main className="max-w-3xl mx-auto px-6 md:px-8 lg:px-4 relative z-10">
        <TitleSection />
        <Abstract />
        <Experience />
        <SelectedWork />
        <Publication />
        <Technologies />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
