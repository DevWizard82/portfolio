import { useLang } from "../context/LangContext";

const experiences = [
  {
    date: { en: "09/2025 - 10/2025", fr: "09/2025 - 10/2025" },
    role: {
      en: "Software Developer / Full Stack Intern",
      fr: "Développeur Logiciel / Stagiaire Full Stack",
    },
    company: "Omnidata",
    bullets: {
      en: [
        "Full-stack development (UI, backend logic, database) of a responsive Leave Management System.",
        "Creation of custom interfaces with role-based access: Employees (requests, history, PDF export), Managers (approval/rejection), and HR/Admins (balance management, holidays, leave types, data visualization, and Excel export).",
        "Integration of secure authentication via LDAP / Active Directory.",
      ],
      fr: [
        "Développement de A à Z (interface utilisateur, logique backend, base de données) d'une application web réactive de gestion des congés.",
        "Création d'interfaces sur mesure avec gestion des rôles : Employés (demandes, historique, export PDF), Managers (approbation ou rejet), et RH/Admins (gestion des soldes, jours fériés, types de congés, visualisation des données et export Excel).",
        "Intégration de l'authentification sécurisée via LDAP / Active Directory.",
      ],
    },
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="experience" className="mb-24">
      <h3
        className="text-2xl font-bold mb-10 flex items-center gap-2 reveal opacity-0 -translate-x-10 transition-all duration-700 ease-out"
        dangerouslySetInnerHTML={{ __html: t("exp_title") }}
      />

      <div className="relative border-l-2 border-primary/20 ml-4 pl-8 space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-white reveal opacity-0 scale-0 transition-all duration-700 ease-out delay-200" />

            {/* Content */}
            <div className="space-y-2 reveal opacity-0 translate-x-10 transition-all duration-700 ease-out delay-300">
              {/* Date badge */}
              <span className="text-sm font-bold text-primary uppercase">
                {exp.date[lang] ?? exp.date.en}
              </span>

              {/* Role */}
              <h4 className="text-xl font-bold">
                {exp.role[lang] ?? exp.role.en}
              </h4>

              {/* Company */}
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <span className="material-symbols-outlined text-base">
                  domain
                </span>
                {exp.company}
              </div>

              {/* Bullet list */}
              <div className="text-slate-600 max-w-3xl mt-4">
                <ul className="list-disc space-y-2 ml-4">
                  {(exp.bullets[lang] ?? exp.bullets.en).map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
