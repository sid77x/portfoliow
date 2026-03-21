import { FadeIn } from "./FadeIn";

export function Abstract() {
  return (
    <section className="py-10">
      <FadeIn>
        <div className="paper-rule pt-8">
          <h2 className="text-sm font-heading font-semibold tracking-[0.15em] uppercase mb-4">
            Abstract
          </h2>
          <div className="max-w-2xl space-y-5 text-base md:text-lg leading-[1.85] text-foreground/85 font-body">
            <p>
              I'm a Data Science Engineering student at MIT Manipal and IIT Madras, and I like building AI systems that actually run outside controlled environments.
            </p>
            <p>
              From multimodal agents to real-world applications from healthcare to applied physics, most of my work focuses on taking ideas from concept to deployment. I'm also involved in research around making newer, better and more practical models.
            </p>
            <p>
              I'm especially interested in the messy part, where models meet reality and either fail, or become something useful.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
