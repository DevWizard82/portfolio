import { useLang } from "../context/LangContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="mb-24 max-w-3xl mx-auto text-center">
      <h3
        className="text-2xl font-bold mb-8 flex items-center justify-center gap-2 text-slate-900 reveal opacity-0 -translate-y-10 transition-all duration-700 ease-out"
        dangerouslySetInnerHTML={{ __html: t("contact_title") }}
      />

      <div className="bg-white p-10 rounded-3xl shadow-sm border border-primary/10 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100">
        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          {t("contact_desc")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {/* Email */}
          <a
            href="mailto:anasberrqia25@gmail.com"
            className="flex items-center gap-3 text-slate-700 font-medium hover:text-primary transition-colors text-lg group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white">
                mail
              </span>
            </div>
            anasberrqia25@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+212675487676"
            className="flex items-center gap-3 text-slate-700 font-medium hover:text-primary transition-colors text-lg group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white">
                call
              </span>
            </div>
            +212 6 75 48 76 76
          </a>
        </div>
      </div>
    </section>
  );
}
