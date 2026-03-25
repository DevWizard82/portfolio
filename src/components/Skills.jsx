import { useEffect } from "react";
import { useLang } from "../context/LangContext";

// ─── Data ────────────────────────────────────────────────────────────────────

const webSkillIcons = [
  { icon: "devicon-html5-plain", title: "HTML5" },
  { icon: "devicon-css3-plain", title: "CSS3" },
  { icon: "devicon-javascript-plain", title: "JavaScript" },
  { icon: "devicon-react-original", title: "React" },
  { icon: "devicon-python-plain", title: "Python" },
  { icon: "devicon-django-plain", title: "Django" },
  { icon: "devicon-java-plain", title: "Java" },
  { icon: "devicon-spring-original", title: "Spring Boot" },
  { icon: "devicon-php-plain", title: "PHP" },
  { icon: "devicon-symfony-original", title: "Symfony" },
  { icon: "devicon-threejs-original", title: "Three.js" },
];

const dataSkillIcons = [
  { icon: "devicon-python-plain", title: "Python" },
  { icon: "devicon-jupyter-plain", title: "Jupyter Notebooks" },
];

const dataSkillBadges = [
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib & Seaborn",
  "Feature Engineering",
];

const mobileSkillIcons = [
  { icon: "devicon-dart-plain", title: "Dart" },
  { icon: "devicon-flutter-plain", title: "Flutter" },
  { icon: "devicon-firebase-plain", title: "Firebase" },
];

const mobileSkillBadges = [
  "Cross-Platform UI",
  "REST API Integration",
  "State Management",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SkillIcon({ icon, title, isCustom, customIcon }) {
  return (
    <div
      className="skill-tilt w-14 h-14 bg-white border border-slate-100 rounded-xl shadow-[0_6px_0_0_rgba(222,184,135,0.4)] flex items-center justify-center text-primary cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
      title={title}
    >
      {isCustom ? (
        <span
          className="material-symbols-outlined text-3xl drop-shadow-md"
          style={{ transform: "translateZ(30px)" }}
        >
          {customIcon}
        </span>
      ) : (
        <i
          className={`${icon} text-3xl drop-shadow-md`}
          style={{ transform: "translateZ(30px)" }}
        />
      )}
    </div>
  );
}

function SkillBadge({ label }) {
  return (
    <div className="bg-white border border-slate-100 border-l-4 border-l-primary/60 rounded-lg shadow-sm px-4 py-2.5 text-sm font-medium text-slate-700 hover:-translate-y-1 transition-transform cursor-default">
      {label}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Skills() {
  const { t } = useLang();

  useEffect(() => {
    const els = document.querySelectorAll(".skill-tilt");
    if (els.length && window.VanillaTilt) {
      window.VanillaTilt.init(els, {
        max: 35,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.15,
      });
    }
  }, []);

  return (
    <section id="skills" className="mb-16 md:mb-24">
      <h3
        className="text-xl md:text-2xl font-bold mb-8 md:mb-10 flex items-center gap-2 text-slate-900 reveal opacity-0 -translate-x-10 transition-all duration-700 ease-out"
        dangerouslySetInnerHTML={{ __html: t("skills_title") }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Full Stack Web */}
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-primary/10 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100">
          <h4 className="text-primary font-bold mb-6 uppercase text-xs tracking-widest">
            {t("skills_cat1")}
          </h4>
          <div className="flex flex-wrap gap-4">
            {webSkillIcons.map((s) => (
              <SkillIcon key={s.title} {...s} />
            ))}
            {/* SQL – uses Material Symbol, not devicon */}
            <SkillIcon title="SQL / Databases" isCustom customIcon="database" />
          </div>
        </div>

        {/* Data Science & AI */}
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-primary/10 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200">
          <h4 className="text-primary font-bold mb-6 uppercase text-xs tracking-widest">
            {t("skills_cat2")}
          </h4>
          <div className="flex flex-wrap gap-4 mb-4">
            {dataSkillIcons.map((s) => (
              <SkillIcon key={s.title} {...s} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {dataSkillBadges.map((label) => (
              <SkillBadge key={label} label={label} />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-primary/10 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300">
          <h4 className="text-primary font-bold mb-6 uppercase text-xs tracking-widest">
            {t("skills_cat3")}
          </h4>
          <div className="flex flex-wrap gap-4 mb-4">
            {mobileSkillIcons.map((s) => (
              <SkillIcon key={s.title} {...s} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {mobileSkillBadges.map((label) => (
              <SkillBadge key={label} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
