import { useLang } from "../context/LangContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="mb-16 md:mb-24 max-w-3xl mx-auto text-center px-4 sm:px-0">
      <h3
        className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center justify-center gap-2 text-slate-900 reveal opacity-0 -translate-y-10 transition-all duration-700 ease-out"
        dangerouslySetInnerHTML={{ __html: t("contact_title") }}
      />

      <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-primary/10 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100">
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
          {t("contact_desc")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
          {/* Email */}
          <a
            href="mailto:anasberrqia25@gmail.com"
            className="flex items-center gap-3 text-slate-700 font-medium hover:text-primary transition-colors text-base md:text-lg group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary group-hover:text-white">
                mail
              </span>
            </div>
            anasberrqia25@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+212675487676"
            className="flex items-center gap-3 text-slate-700 font-medium hover:text-primary transition-colors text-base md:text-lg group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
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
