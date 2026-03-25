import { useLang } from "../context/LangContext";
import { useState } from "react";

export default function Header() {
  const { t, toggle } = useLang();
  const [open, setOpen] = useState(false);

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
              onClick={() => setOpen(false)}
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#about"
            >
              {t("nav_about")}
            </a>
            <a
              onClick={() => setOpen(false)}
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#skills"
            >
              {t("nav_skills")}
            </a>
            <a
              onClick={() => setOpen(false)}
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#experience"
            >
              {t("nav_experience")}
            </a>
            <a
              onClick={() => setOpen(false)}
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#projects"
            >
              {t("nav_projects")}
            </a>
            <a
              onClick={() => setOpen(false)}
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#certifications"
            >
              {t("nav_certifications")}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="bg-primary text-white px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined text-sm">
                language
              </span>
              FR / EN
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl text-primary"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
        {/* Mobile Nav */}

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <a href="#about" className="text-sm font-medium hover:text-primary">
            {t("nav_about")}
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary">
            {t("nav_skills")}
          </a>
          <a
            href="#experience"
            className="text-sm font-medium hover:text-primary"
          >
            {t("nav_experience")}
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-primary"
          >
            {t("nav_projects")}
          </a>
          <a
            href="#certifications"
            className="text-sm font-medium hover:text-primary"
          >
            {t("nav_certifications")}
          </a>
        </div>
      </div>
    </header>
  );
}
