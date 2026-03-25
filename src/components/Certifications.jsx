import { useLang } from "../context/LangContext";

const certs = [
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "Coursera / IBM",
  },
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy",
  },
  { title: "Meta MySQL Professional Certificate", issuer: "Meta / Coursera" },
  {
    title: "The Complete Flutter Development Bootcamp with Dart",
    issuer: "App Brewery",
  },
  { title: "Introduction to C++", issuer: "EPFL / EdX" },
];

const delays = [
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-[400ms]",
  "delay-[500ms]",
];

export default function Certifications() {
  const { t } = useLang();

  return (
    <section id="certifications" className="mb-16 md:mb-24">
      <h3
        className="text-xl md:text-2xl font-bold mb-8 md:mb-10 flex items-center gap-2 reveal opacity-0 -translate-x-10 transition-all duration-700 ease-out"
        dangerouslySetInnerHTML={{ __html: t("cert_title") }}
      />

      <ul className="space-y-6">
        {certs.map((cert, i) => (
          <li
            key={cert.title}
            className={`bg-white rounded-2xl border border-primary/10 shadow-sm p-5 md:p-6 flex items-center justify-between hover:shadow-md hover:-translate-y-1 transition-all reveal opacity-0 -translate-x-10 duration-700 ease-out ${delays[i]}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">
                  school
                </span>
              </div>
              <div>
                <h5 className="font-bold text-lg">{cert.title}</h5>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-medium mt-1">
                  {cert.issuer}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
