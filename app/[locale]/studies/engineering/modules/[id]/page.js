import Button from "@/components/Button";
import Table, { TableHead, TableRow } from "@/components/Table";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <section className="relative bg-darkblue">
      <div className="container pt-10 pb-80 lg:pb-40">
        <div className="flex flex-col gap-4 text-white lg:flex-row lg:justify-between lg:items-center">
          <div className={cn("", sourceSerif.className)}>
            <h1 className="font-bold text-crayola text-3xl mb-2 lg:text-5xl">
              AQUA
            </h1>
            <p className="text-3xl mb-2 lg:text-5xl">Assurance Qualité</p>
          </div>
          <div>
            <div className="text-lg mb-2 font-medium">Prérequis</div>
            <div className="flex gap-4 flex-wrap">
              <Button>MACSI 1CS</Button>
              <Button>CPROJ 1CS</Button>
            </div>
          </div>
        </div>
        <div className="absolute w-full left-0 -bottom-64  overflow-hidden lg:-bottom-10 ">
          <div className="flex container flex-col flex-wrap justify-center bg-white p-10 gap-12 border-b border-b-honolulu rounded-lg lg:flex-row lg:rounded-none lg:gap-20">
            <div className="flex-1">
              <div className="text-4xl font-black text-honolulu">5</div>
              <div className="h-[0.39px] bg-black/40 my-1" />
              <idv className="font-black text-sm md:text-lg">Coéfficient</idv>
            </div>
            <div className="flex-1">
              <div className="text-4xl font-black">6</div>
              <div className="h-[0.39px] bg-black/40 my-1" />
              <div>
                <span className="font-black text-sm md:text-lg">Crédit</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-4xl font-black text-honolulu">30</div>
              <div className="h-[0.39px] bg-black/40 my-1" />
              <div>
                <span className="font-black text-sm md:text-lg">
                  Volume horaire Cours
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-4xl font-black">60</div>
              <div className="h-[0.39px] bg-black/40 my-1" />
              <div>
                <span className="font-black text-sm md:text-lg">
                  Volume horaire TD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const SkillsSection = () => {
  const t = useTranslations("Studies.Engineering.Module.Skills");
  return (
    <section className="bg-grayishBg pt-80 pb-10 lg:pb-20 lg:pt-28">
      <div className="container">
        <h2
          className={cn(
            "font-bold text-2xl mb-4 lg:text-3xl lg:text-center lg:mb-10",
            sourceSerif.className
          )}
        >
          <span className="text-crayola">{t("title.0")} </span>
          {t("title.1")}
        </h2>
        <Table>
          <TableHead className="grid-cols-5 bg-darkblue font-semibold border-0 text-white">
            {Array.from({
              length: 5,
            }).map((_, i) => (
              <div key={i}>{t(`tableColumns.${i}`)}</div>
            ))}
          </TableHead>
          {Array.from({
            length: 2,
          }).map((_, i) => (
            <TableRow
              className="grid-cols-5 text-darkgrey bg-white pt-10"
              key={i}
            >
              <div className="font-bold row-span-3">CF8</div>
              <div className="row-span-3">
                C8.2 : Mettre en oeuvre une démarche qualité
              </div>
              <div>
                C82.1 : Décrire une démarche qualité et identifier ses atouts
                pour l&apos;entreprise
              </div>
              <div>
                <span className="bg-black text-white px-10 py-2">Avancé</span>
              </div>
              <div>OPE</div>
              <div>
                C82.1 : Décrire une démarche qualité et identifier ses atouts
                pour l&apos;entreprise
              </div>
              <div>
                <span className="bg-honolulu text-white px-10 py-2">
                  Intermédiaire
                </span>
              </div>
              <div>MET</div>
              <div>
                C82.1 : Décrire une démarche qualité et identifier ses atouts
                pour l&apos;entreprise
              </div>
              <div>
                <span className="bg-crayola text-white px-10 py-2">Base</span>
              </div>
              <div>OPE</div>
            </TableRow>
          ))}
        </Table>
      </div>
    </section>
  );
};
const DescriptionSection = () => {
  const t = useTranslations("Studies.Engineering.Module.Description");
  return (
    <section className="bg-darkblue relative overflow-hidden">
      <div className="container py-10 lg:py-20">
        <h2
          className={cn(
            "font-bold text-2xl text-white mb-8 lg:text-3xl lg:text-center lg:mb-16",
            sourceSerif.className
          )}
        >
          {t("title.0")}
          <span className="text-crayola"> {t("title.1")} </span>
          {t("title.2")}
        </h2>
        <div className="flex flex-col gap-6 text-white lg:gap-0 lg:flex-row">
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-4">{t("goal")}</h3>
            <p>
              Appréhender l&apos;intérêt de la démarche qualité dans le domaine
              des sciences et technologies, pour avoir soi-même confiance et
              inspirer confiance dans les actions engagées et les décisions
              prises pour l&apos;analyse, la conception, la production et
              l’évaluation de processus et projets, particulièrement dans le
              contexte des processus IT et/ou projetsIT.
            </p>
          </div>
          <div className="h-flex-1 mx-6 w-[1px]  bg-crayola hidden lg:block" />
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-4">{t("subgoal")}</h3>
            <ul className="list-disc ml-6">
              <li className="mb-4">
                Une meilleure connaissance du vocabulaire qualité{" "}
              </li>
              <li className="mb-4">
                Comprendre la démarche qualité et utiliser les outils de la
                qualité et de l&apos;amélioration continue: roue de Deming,
                Diagramme Pareto, Ishikawa...
              </li>
              <li className="mb-4">
                Comprendre l’intérêt des entreprises pour la normalisation, la
                certification et l’accréditation.
              </li>
              <li className="mb-4">
                A l&apos;issue de ce cours-TD, les étudiants seront capables de:
                Définir les concepts de base.
              </li>
              <li className="mb-4">
                Adopter une démarche qualité et à utiliser les principaux outils
                de base
              </li>
              <li className="mb-4">
                Participer, de façon dynamique, à l&apos;amélioration continue
                de la qualité.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        src="/gradient-blue.svg"
        className="absolute right-0 top-0 rotate-180"
        width={301}
        height={326}
        alt=""
      />
    </section>
  );
};

function page() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <DescriptionSection />
    </div>
  );
}

export default page;
