import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import ProgramSection from "./ProgramSection";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const HeroSection = () => {
  const t = useTranslations("Studies.Engineering.Fields.sit.hero");

  return (
    <section
      className={cn(
        sourceSerif.className,
        "relative bg-darkblue h-heroSectionMobile lg:min-h-screen  bg-cover bg-center flex items-end"
      )}
    >
      <Image
        src="/gradient-blue.svg"
        className="absolute right-0 top-0 rotate-180"
        width={301}
        height={326}
        alt=""
      />
      <div className="container h-full flex flex-col">
        <div className="flex items-start gap-4 mt-10 mb-6">
          <button className="hidden md:inline-block">
            <ChevronLeftIcon className="text-white w-14 h-14" />
          </button>
          <div>
            <h1 className="font-bold text-crayola text-2xl lg:text-5xl max-w-2xl">
              {t("title")}
            </h1>
            <p className="text-white font-semibold lg:text-lg">
              {t("subtitle")}
            </p>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            className="!h-[calc(100%+8rem)]  object-cover"
            fill
            src="/studies/engineering/sit-bg.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const LifeSection = () => {
  const t = useTranslations("Studies.Engineering.Fields.sit.life");

  return (
    <section className="pb-10 bg-grayishBg pt-40 lg:pb-20">
      <div className="container">
        <h2
          className={cn(
            "font-bold text-2xl mb-2 lg:text-3xl lg:text-center lg:mb-4",
            sourceSerif.className
          )}
        >
          {t("title.0")}
          <span className="text-crayola"> {t("title.1")} </span>
        </h2>
        <p className="whitespace-pre-line leading-7">{t("description")}</p>
        <iframe
          className="mt-10 w-full h-60 md:h-72 lg:h-96"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/K-Bnn25OCJU?si=Scx5l1Ra9d93draP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};
const skills = [
  {
    name: "Business analysis",
    description:
      "Business analysis involves identifying business needs, defining solutions, and facilitating change to enhance business processes and achieve organizational goals. It focuses on analyzing data and workflows to improve efficiency, profitability, and competitiveness.",
  },
  {
    name: "Project managment",
    description:
      "Project management entails planning, organizing, and overseeing the execution of tasks and resources to achieve specific objectives within defined constraints such as time, cost, and scope. It involves coordinating teams, managing risks, and ensuring successful project delivery to meet stakeholder expectations.",
  },
  {
    name: "Data Analysis",
    description:
      "L’analyse de données est un domaine issu du monde des statistiques qui vise à faire le lien entre les différentes données statistiques pour les classer, les décrire et les analyser de manière succincte. L'objectif de l’analyse des données est d’extraire une information statistique qui permet de cerner plus précisément le profil de la donnée. Les résultats obtenus permettent ensuite d’optimiser la stratégie de la société en question en ajustant certains points.",
  },
];
const SkillsSection = () => {
  const t = useTranslations("Studies.Engineering.Fields.sit.skills");
  return (
    <section className="bg-grayishBg">
      <div className="container py-10 lg:py-20">
        <h2
          className={cn(
            "font-bold text-2xl lg:text-3xl lg:text-center mb-10",
            sourceSerif.className
          )}
        >
          {t("title")}
        </h2>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col lg:flex-row group mb-8"
          >
            <div
              className={cn(
                "bg-honolulu relative overflow-hidden px-20 py-10 text-center text-white font-bold text-xl transition-all lg:text-2xl group-hover:bg-black lg:w-1/4",
                sourceSerif.className
              )}
            >
              {skill.name}
              <Image
                className="absolute transition-all top-0 -right-full group-hover:right-0"
                src="/studies/engineering/skill-card-layer1.svg"
                width={100}
                height={100}
                alt=""
              />
              <Image
                className="absolute transition-all bottom-0 -left-full group-hover:left-0"
                src="/studies/engineering/skill-card-layer2.svg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="bg-white p-4 shadow text-gray-600 lg:w-3/4">
              {skill.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const careers = [
  {
    name: "Gestionnaire de projet",
    image: "/studies/engineering/sit-careers1.png",
  },
  {
    name: "Analyst de données",
    image: "/studies/engineering/sit-careers2.png",
  },
  {
    name: "Consultant BI",
    image: "/studies/engineering/sit-careers3.png",
  },
];

const CareerSection = () => {
  const t = useTranslations("Studies.Engineering.Fields.sit.career");
  return (
    <section className="bg-grayishBg">
      <div className="container py-10 lg:py-20">
        <h2
          className={cn(
            "font-bold text-2xl mb-8 lg:text-3xl lg:text-center lg:mb-10",
            sourceSerif.className
          )}
        >
          {t("title.0")}
          <span className="text-crayola"> {t("title.1")} </span>
          {t("title.2")}
        </h2>
        <div className="flex justify-center lg:justify-between flex-wrap gap-10">
          {careers.map((career) => (
            <div key={career.name}>
              <Image src={career.image} width={300} height={200} />
              <div className="text-center text-lg font-semibold mt-4">
                {career.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
function Page() {
  const t = useTranslations("Studies.Engineering.Fields.sit");

  return (
    <div>
      <HeroSection />
      <LifeSection />
      <ProgramSection />
      <SkillsSection />
      <CareerSection />
    </div>
  );
}

export default Page;
