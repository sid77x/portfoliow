import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
      <a
        href="/RenderCV_sb2nov_Theme%20(1).pdf"
        download="SiddhantChutke_Resume"
        className="text-xs font-body text-muted-foreground border border-border px-3 py-1.5 bg-background hover:text-foreground transition-colors duration-200 tracking-wide"
      >
        Download Resume
      </a>
      <button
        onClick={() => setDark(!dark)}
        className="text-xs font-body text-muted-foreground border border-border px-3 py-1.5 bg-background hover:text-foreground transition-colors duration-200 tracking-wide"
        aria-label="Toggle dark mode"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </div>
  );
}
