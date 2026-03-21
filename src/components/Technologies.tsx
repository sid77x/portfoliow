import { FadeIn } from "./FadeIn";

const techs = [
  "Python", "TypeScript", "React", "TensorFlow", "PyTorch", "Docker",
  "Kubernetes", "FastAPI", "PostgreSQL", "MongoDB", "AWS", "GCP",
  "LangChain", "OpenCV", "Scikit-learn", "Git", "Linux", "Node.js",
];

export function Technologies() {
  return (
    <section className="py-10">
      <FadeIn>
        <div className="paper-rule pt-8">
          <h2 className="text-sm font-heading font-semibold tracking-[0.15em] uppercase mb-4">
            Technologies
          </h2>
          <p className="text-sm md:text-base leading-loose text-foreground/75 font-body max-w-2xl whitespace-normal break-words [overflow-wrap:anywhere]">
            {techs.join(" · ")}
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
