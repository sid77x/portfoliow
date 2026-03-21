import { FadeIn } from "./FadeIn";

const projects = [
  {
    title: "Blight Detection in Potato Plants",
    year: "2025",
    abstract:
      "This work presents an end-to-end CNN-based mobile system for detecting crop disease, deployed across 15+ Indian states, integrating cloud inference and real-time image processing.",
  },
  {
    title: "Voice Assisted Meeting Buddy",
    year: "2025",
    abstract:
      "We propose a multimodal AI agent capable of summarizing meetings, answering contextual queries, and automating minute generation with enterprise integrations.",
  },
  {
    title: "Multimodal AI Agent Systems",
    year: null,
    abstract:
      "This work explores the design and deployment of scalable multimodal AI agents across real-world applications using modern cloud infrastructure.",
  },
  {
    title: "CI/CD Pipeline for AI Systems",
    year: null,
    abstract:
      "This work presents a containerized deployment pipeline leveraging Docker and Kubernetes to significantly reduce system deployment latency.",
  },
  {
    title: "Sports Supplement Classification Model",
    year: null,
    abstract:
      "We propose a classification system achieving 97% accuracy, outperforming existing benchmarks through robust feature engineering and evaluation.",
  },
];

export function SelectedWork() {
  return (
    <section className="py-10" id="work">
      <FadeIn>
        <div className="paper-rule pt-8">
          <p className="section-number mb-2">02</p>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-10">Selected Work</h2>
        </div>
      </FadeIn>

      <div className="space-y-10">
        {projects.map((project, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <article className="max-w-2xl">
              <h3 className="text-lg font-heading font-semibold">
                {project.title}
                {project.year && (
                  <span className="text-muted-foreground font-body font-normal text-sm ml-2">
                    ({project.year})
                  </span>
                )}
              </h3>
              <p className="mt-2 text-sm md:text-base leading-[1.85] text-foreground/80 italic font-body">
                {project.abstract}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
