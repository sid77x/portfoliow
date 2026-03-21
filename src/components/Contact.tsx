import { FadeIn } from "./FadeIn";

export function Contact() {
  return (
    <footer className="py-10 pb-20" id="contact">
      <FadeIn>
        <div className="paper-rule pt-8">
          <h2 className="text-sm font-heading font-semibold tracking-[0.15em] uppercase mb-4">
            Contact
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-body">
            <a href="https://github.com/sid77x" target="_blank" rel="noopener noreferrer" className="paper-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/siddhantchutke/" target="_blank" rel="noopener noreferrer" className="paper-link">
              LinkedIn
            </a>
            <a href="mailto:sid77x@gmail.com" className="paper-link">
              Email
            </a>
            <a href="https://kaggle.com/siddhantchutke" target="_blank" rel="noopener noreferrer" className="paper-link">
              Kaggle
            </a>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Siddhant Chutke. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
