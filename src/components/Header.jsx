import { useLang } from "../context/LangContext";

export default function Header() {
  const { t, toggle } = useLang();

  return (
    <header className="sticky-header bg-background-light/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">
              terminal
            </span>
            <h1 className="text-xl font-bold tracking-tight">Anas Berrqia</h1>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#about"
            >
              {t("nav_about")}
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#skills"
            >
              {t("nav_skills")}
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#experience"
            >
              {t("nav_experience")}
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#projects"
            >
              {t("nav_projects")}
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#certifications"
            >
              {t("nav_certifications")}
            </a>
          </nav>

          {/* Lang Toggle */}
          <button
            onClick={toggle}
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all"
          >
            <span className="material-symbols-outlined text-sm">language</span>
            FR / EN
          </button>
        </div>
      </div>
    </header>
  );
}
