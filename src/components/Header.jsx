import { useState } from "react";
import { useLang } from "../context/LangContext";

export default function Header() {
  const { t, toggle, lang } = useLang();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky-header bg-background-light/95 backdrop-blur-md border-b border-primary/20 transition-all z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">
              terminal
            </span>
            <h1 className="text-xl font-bold tracking-tight">Anas Berrqia</h1>
          </div>

          {/* Nav - Desktop */}
          <nav className="hidden md:flex items-center gap-8 z-50">
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

          {/* Lang Toggle & Hamburger - Mobile container */}
          <div className="flex items-center gap-3 md:gap-4 z-50">
            <button
              onClick={toggle}
              className="bg-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold flex items-center gap-1.5 md:gap-2 hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined text-[16px] md:text-sm">language</span>
              <span>{lang === "fr" ? "FR" : "EN"}</span>
            </button>

            {/* Hamburger Button */}
            <button 
              className="md:hidden flex items-center justify-center p-2 text-slate-700 hover:text-primary transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md border-b border-primary/20 shadow-lg ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-2">
          <a onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors" href="#about">{t("nav_about")}</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors" href="#skills">{t("nav_skills")}</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors" href="#experience">{t("nav_experience")}</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors" href="#projects">{t("nav_projects")}</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors" href="#certifications">{t("nav_certifications")}</a>
        </nav>
      </div>
    </header>
  );
}
