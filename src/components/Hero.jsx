import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext";

export default function Hero() {
  const { t } = useLang();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // tsParticles neural network background
    if (window.tsParticles) {
      window.tsParticles.load("tsparticles", {
        particles: {
          number: { value: 90, density: { enable: true, value_area: 800 } },
          color: { value: "#deb887" },
          links: {
            enable: true,
            color: "#deb887",
            distance: 100,
            opacity: 0.6,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
          },
          size: { value: 3, random: true },
          opacity: { value: 0.8, random: true },
        },
        interactivity: {
          events: { onhover: { enable: true, mode: "grab" } },
          modes: {
            grab: { distance: 180, links: { opacity: 0.9 } },
          },
        },
        detectRetina: true,
      });
    }

    // VanillaTilt on profile card
    const el = document.querySelector(".profile-tilt");
    if (el && window.VanillaTilt) {
      window.VanillaTilt.init(el, {
        max: 25,
        speed: 300,
        glare: true,
        "max-glare": 0.4,
        scale: 1.08,
        perspective: 800,
      });
    }

    return () => {
      // Cleanup tsParticles on unmount
      if (window.tsParticles) {
        window.tsParticles.domItem(0)?.destroy();
      }
    };
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
      {/* Left: Text */}
      <div className="lg:col-span-7 space-y-8">
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full uppercase tracking-wider reveal opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100">
            {t("hero_badge")}
          </span>

          <h2
            className="text-4xl md:text-6xl font-black leading-tight text-slate-900 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
            dangerouslySetInnerHTML={{ __html: t("hero_title") }}
          />

          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl reveal opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300">
            {t("hero_desc")}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out delay-500">
          {/* Dropdown Download Button */}
          <div
            className="relative group cursor-pointer w-full sm:w-auto"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="bg-primary text-white px-5 py-3 text-sm md:px-8 md:py-4 md:text-base rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all">
              <span className="material-symbols-outlined">download</span>
              {t("hero_badge") === "Engineering Student"
                ? "Download Resume"
                : "Télécharger le CV"}
            </div>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-full bg-white dark:bg-[#1C1F2A] rounded-xl shadow-xl transition-all duration-300 border border-primary/20 overflow-hidden flex flex-col z-50 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible sm:group-hover:opacity-100 sm:group-hover:visible"}`}
            >
              <a
                href="/Anas_Berrqia_FR.pdf"
                download="Anas_Berrqia_CV_FR.pdf"
                className="px-4 py-3 hover:bg-primary/10 text-slate-900 dark:text-white font-medium text-sm transition-colors text-center border-b border-primary/10"
              >
                🇫🇷 Version Française
              </a>
              <a
                href="/Anas_Berrqia_EN.pdf"
                download="Anas_Berrqia_Resume_EN.pdf"
                className="px-4 py-3 hover:bg-primary/10 text-slate-900 dark:text-white font-medium text-sm transition-colors text-center"
              >
                🇬🇧 English Version
              </a>
            </div>
          </div>

          <a
            href="#contact"
            className="border-2 border-primary text-primary px-5 py-3 text-sm md:px-8 md:py-4 md:text-base rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-all w-full sm:w-auto"
          >
            <span className="material-symbols-outlined">mail</span>
            {t("hero_badge") === "Engineering Student"
              ? "Contact Me"
              : "Me Contacter"}
          </a>
        </div>
      </div>

      {/* Right: Profile card */}
      <div className="lg:col-span-5 reveal opacity-0 scale-90 transition-all duration-700 ease-out delay-300">
        <div className="relative bg-background-dark/5 p-8 rounded-3xl shadow-[inset_0_10px_30px_rgba(0,0,0,0.1)] border border-primary/10 aspect-square flex items-center justify-center overflow-hidden">
          <div id="tsparticles" className="absolute inset-0 z-0 opacity-80" />

          <div
            className="profile-tilt relative z-10 w-[70%] aspect-[3/4] rounded-2xl p-2 bg-gradient-to-br from-primary via-primary/80 to-background-dark shadow-2xl cursor-grab active:cursor-grabbing"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full rounded-xl overflow-hidden bg-white">
              <img
                alt="Anas Berrqia Professional Portrait"
                className="w-full h-full object-cover"
                src="/profile.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
