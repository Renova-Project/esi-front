import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

function Page() {
  const t = useTranslations(["Studies.Engineering"]);

  return (
    <div>
      <section className="relative h-heroSectionMobile  bg-cover bg-center flex items-end pb-8 lg:pb-20">
        <Image
          src="/studies/engineering/hero.jpg"
          className="top-0 left-0 object-cover"
          fill
          alt=""
        />
        <div className="bg-gradient-to-b from-heroGradientStart/75 to-heroGradientEnd/60 absolute top-0 left-0 w-full h-full" />
        <div className="relative text-white container">
          <h1
            className={cn(
              sourceSerif.className,
              "font-bold text-2xl lg:text-5xl max-w-2xl mb-2 lg:mb-5"
            )}
          >
            {t("hero.title.0")}
            <span className="text-crayola"> {t("hero.title.1")} </span>
            {t("hero.title.2")}
            <span className="text-crayola"> {t("hero.title.3")} </span>
            {t("hero.title.4")}
          </h1>
          <p className="lg:text-lg">{t("hero.subtitle")}</p>
        </div>
      </section>
      <section className="bg-darkblue text-white relative overflow-hidden">
        <Image
          src="/studies/engineering/gray-dots.svg"
          className="absolute hidden lg:inline-block top-0 left-0"
          width={100}
          height={40}
        />
        <Image
          src="/studies/engineering/black-dots.svg"
          className="absolute hidden lg:inline-block -top-5 left-1/4"
          width={200}
          height={40}
        />
        <div className="container py-10 relative">
          <h2
            className={cn(
              "font-bold text-2xl  mb-6 lg:text-3xl lg:text-center lg:mb-12",
              sourceSerif.className
            )}
          >
            {t("access.title")}
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center">
            <p className="mb-4 flex-1 lg:p-0 lg:pr-32">
              {t("access.description")}
            </p>
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-y-5 gap-x-8 lg:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <div className="" key={i}>
                    <div className="text-[#1D93F3] font-black text-4xl">
                      {t(`access.grades.${i}.value`)}
                    </div>
                    <div className="h-[1px] bg-white/20 my-2" />
                    <div className="font-medium">
                      {t(`access.grades.${i}.branch`)}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                className="text-crayola text-lg mt-4 block hover:underline"
                href="/"
              >
                {t("access.oldGrades")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F8]">
        <div className="container py-10 lg:py-20">
          <h2
            className={cn(
              "font-bold text-2xl mb-2 lg:text-3xl lg:text-center lg:mb-4",
              sourceSerif.className
            )}
          >
            {t("cursus.title.0")}
            <span className="text-crayola"> {t("cursus.title.1")} </span>
            {t("cursus.title.2")}
          </h2>
          <p className="mb-8 lg:text-center">{t("cursus.subtitle")}</p>
          <div className="flex flex-col gap-x-20 gap-y-8 lg:flex-row">
            <div className="bg-white relative p-8 flex-1 shadow-sm">
              <div className="flex items-center gap-4 text-[#00B2FF] pb-2 border-b border-[#00b3ff2e]">
                <h3 className="text-3xl font-bold">{t("cursus.cp.abr")}</h3>
                <p className="text-lg">{t("cursus.cp.title")}</p>
              </div>
              <p className="mt-4  whitespace-pre-line">
                {t("cursus.cp.description")}
              </p>
            </div>
            <div className="bg-white relative p-8 flex-1 shadow-sm">
              <div className="flex items-center gap-4 text-[#1B76FF] pb-2 border-b border-[#1b76ff65]">
                <h3 className="text-3xl font-bold">{t("cursus.cs.abr")}</h3>
                <p className="text-lg">{t("cursus.cs.title")}</p>
              </div>

              <p className="mt-4  whitespace-pre-line">
                {t.rich("cursus.cs.description", {
                  strong: (chunks) => <b>{chunks}</b>,
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
