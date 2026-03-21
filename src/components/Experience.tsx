import { FadeIn } from "./FadeIn";

const experiences = [
  {
    role: "AI Engineering Intern",
    org: "KognitoAI",
    items: [
      "Built and deployed 10+ multimodal AI agents and applications",
      "Designed CI/CD pipeline using Docker + Kubernetes reducing deployment time by 60%",
      "Revamped legacy web app using React",
    ],
  },
  {
    role: "ML Intern",
    org: "IIT Roorkee",
    items: [
      "Built classification model achieving 97% accuracy outperforming benchmarks",
      "Applied feature engineering and evaluation techniques",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-10" id="experience">
      <FadeIn>
        <div className="paper-rule pt-8">
          <p className="section-number mb-2">01</p>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-10">Experience</h2>
        </div>
      </FadeIn>

      <div className="space-y-10 ml-0 md:ml-6">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="border-l border-border pl-6 py-1">
              <h3 className="text-lg font-heading font-semibold">
                {exp.role}
                <span className="text-muted-foreground font-body font-normal text-base">
                  {" — "}{exp.org}
                </span>
              </h3>
              <ul className="mt-3 space-y-2">
                {exp.items.map((item, j) => (
                  <li key={j} className="text-sm md:text-base leading-relaxed text-foreground/80 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
