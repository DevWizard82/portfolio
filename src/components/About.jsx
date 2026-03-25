import { useLang } from "../context/LangContext";

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="mb-16 md:mb-24 py-8 md:py-12 border-t border-primary/10 reveal opacity-0 -translate-x-10 transition-all duration-700 ease-out"
    >
      <div className="max-w-3xl">
        <h3
          className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2"
          dangerouslySetInnerHTML={{ __html: t("about_title") }}
        />
        <div className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed">
          <p>{t("about_p1")}</p>
          <p>{t("about_p2")}</p>
        </div>
      </div>
    </section>
  );
}
