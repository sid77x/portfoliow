import { FadeIn } from "./FadeIn";

export function Publication() {
  return (
    <section className="py-10" id="publication">
      <FadeIn>
        <div className="paper-rule pt-8">
          <p className="section-number mb-2">03</p>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            Featured Publication
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="border-l-2 border-foreground pl-6 py-4 max-w-2xl">
          <h3 className="text-lg md:text-xl font-heading font-semibold leading-snug">
            A low-cost point-of-care microfluidic chip for rapid and reliable detection of C-reactive protein in clinical serum samples
          </h3>
          <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed">
            Published in SN Applied Sciences (2025). This work presents a microfluidic chip for affordable, rapid, and reliable CRP detection, enabling point-of-care diagnostics in resource-limited settings.
          </p>
          <a
            href="https://doi.org/10.1007/s42452-025-06859-9"
            target="_blank"
            rel="noopener noreferrer"
            className="paper-link inline-block mt-4 text-sm font-body"
          >
            doi:10.1007/s42452-025-06859-9 →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
