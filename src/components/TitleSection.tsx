import { FadeIn } from "./FadeIn";

export function TitleSection() {
  return (
    <header className="pt-16 pb-12 md:pt-24 md:pb-16">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight leading-tight">
          hi, I'm siddhant
        </h1>
        <p className="mt-6 text-lg md:text-xl font-heading italic text-paper-accent leading-relaxed max-w-xl">
          "I build things that are supposed to work. They usually do."
        </p>
      </FadeIn>
    </header>
  );
}
