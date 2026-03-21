import { FadeIn } from "./FadeIn";

const figures = [
  "Figure 1: CNN-based crop disease detection pipeline",
  "Figure 2: Multimodal agent architecture overview",
  "Figure 3: CI/CD deployment flow — Docker + Kubernetes",
];

export function Figures() {
  return (
    <section className="py-10">
      <FadeIn>
        <div className="paper-rule pt-8 mb-8">
          <h2 className="text-sm font-heading font-semibold tracking-[0.15em] uppercase">
            Figures
          </h2>
        </div>
      </FadeIn>

      <div className="space-y-8">
        {figures.map((caption, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <figure className="max-w-xl">
              <div className="w-full h-40 md:h-52 border border-border bg-muted/40 flex items-center justify-center">
                <span className="text-xs text-muted-foreground tracking-wide font-body uppercase">
                  [ Placeholder ]
                </span>
              </div>
              <figcaption className="mt-2 text-xs md:text-sm text-muted-foreground italic font-body">
                {caption}
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
