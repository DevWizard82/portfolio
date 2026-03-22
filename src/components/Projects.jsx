import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";
import { projects } from "../data/projects";

const FILTERS = [
  { key: "all", labelKey: "filter_all" },
  { key: "ai", labelKey: "filter_ai" },
  { key: "fullstack", labelKey: "filter_fullstack" },
  { key: "mobile", labelKey: "filter_mobile" },
  { key: "3d", labelKey: "filter_3d" },
];

function useReveal(ref, options = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      },
      { threshold: 0.15, ...options },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

// ── ProjectCard ───────────────────────────────────────────────────────────────
function ProjectCard({ project, lang, t, index }) {
  const cardRef = useRef(null);
  const title = project.title;
  const desc = lang === "fr" ? project.desc_fr : project.desc;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), (index % 3) * 100);
        } else {
          el.classList.remove("visible");
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="reveal group bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail */}
      <div className={`h-48 overflow-hidden ${project.bgClass} relative`}>
        <div className="absolute top-2 right-2 bg-background-dark/80 text-primary text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm z-10">
          {project.badge}
        </div>
        <img
          alt={`${title} Thumbnail`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={project.image}
        />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-slate-600 text-sm mb-4">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto min-h-[56px] items-end">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold px-2 py-0.5 bg-background-light border border-slate-200 rounded text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:shadow-md hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">
                visibility
              </span>
              {t("btn_demo")}
            </a>
          )}
          <a
            href={project.source}
            target="_blank"
            rel="noreferrer"
            className={`${project.demo ? "flex-1" : "w-full"} flex items-center justify-center gap-1.5 px-3 py-2 bg-white text-slate-700 border border-slate-200 text-xs font-bold rounded-lg hover:border-primary hover:text-primary transition-all`}
          >
            <i className="devicon-github-original text-[16px]" />
            {t("btn_source")}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Projects() {
  const { t, lang } = useLang();
  const headerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [animating, setAnimating] = useState(false);
  const [displayFilter, setDisplayFilter] = useState("all");
  const timeoutRef = useRef(null);

  // Reveal the header on scroll
  useReveal(headerRef);

  const handleFilter = (key) => {
    if (key === activeFilter) return;
    setAnimating(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDisplayFilter(key);
      setActiveFilter(key);
      setAnimating(false);
    }, 280);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const visibleProjects = projects.filter(
    (p) => displayFilter === "all" || p.category === displayFilter,
  );

  return (
    <section id="projects" className="mb-24">
      {/* Header + Filters — slides in from left on scroll */}
      <div
        ref={headerRef}
        className="reveal-left flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10"
      >
        <h3
          className="text-2xl font-bold flex items-center gap-2"
          dangerouslySetInnerHTML={{ __html: t("proj_h") }}
        />
        <div className="flex flex-wrap items-center gap-3">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => handleFilter(f.key)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary"
                }`}
              >
                {t(f.labelKey)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {visibleProjects.map((project, i) => (
          <ProjectCard
            key={`${displayFilter}-${project.id}`}
            project={project}
            lang={lang}
            t={t}
            index={i}
            visible={!animating}
          />
        ))}
      </div>
    </section>
  );
}
