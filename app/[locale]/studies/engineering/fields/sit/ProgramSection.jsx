"use client";
import Button from "@/components/Button";
import Table, { TableBody, TableHead, TableRow } from "@/components/Table";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import { useState } from "react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const SwitchButton = ({
  semesterNumber,
  activeSemester,
  setActiveSemester,
  children,
}) => {
  return (
    <button
      className={cn(
        "text-white/80 relative ",
        semesterNumber == activeSemester ? "text-[#00B2FF]" : ""
      )}
      onClick={() => setActiveSemester(semesterNumber)}
    >
      {children}
      {semesterNumber == activeSemester ? (
        <span className="absolute w-full h-[2px] left-0 -bottom-1 bg-[#00B2FF]" />
      ) : null}
    </button>
  );
};

const semesterOneModules = [
  {
    slug: "ANAD",
    name: "Analyse de données",
    coeff: 4,
    cours: "30h",
    td: "4Oh",
  },
  {
    slug: "AQUA",
    name: "Assurance qualité",
    coeff: 1,
    cours: "20h",
    td: "2Oh",
  },
  {
    slug: "SIAD",
    name: "Système d'information d'aide a la décision",
    coeff: 1,
    cours: "20h",
    td: "2Oh",
  },
  {
    slug: "TICO",
    name: "Technologie d'information et de communication",
    coeff: 3,
    cours: "30h",
    td: "3Oh",
  },
  {
    slug: "ASI",
    name: "Analyse des systems d'informations",
    coeff: 4,
    cours: "40h",
    td: "4Oh",
  },
  {
    slug: "BDA",
    name: "Base de données avancées",
    coeff: 3,
    cours: "30h",
    td: "3Oh",
  },
  {
    slug: "PGI",
    name: "Progiciel de gestion intégré",
    coeff: 3,
    cours: "30h",
    td: "3Oh",
  },
  {
    slug: "SIC",
    name: "Système d'information collaborative",
    coeff: 3,
    cours: "30h",
    td: "3Oh",
  },
];
const semesterTwoModules = [
  {
    slug: "AUSI",
    name: "Audit des systems d'informations",
    coeff: 2,
    cours: "20h",
    td: "2Oh",
  },
  {
    slug: "MSSI",
    name: "Management de la sécurité des systems d'informations",
    coeff: 2,
    cours: "20h",
    td: "2Oh",
  },
  {
    slug: "URSI",
    name: "Urbanisation des systems d'informations",
    coeff: 2,
    cours: "20h",
    td: "2Oh",
  },
  {
    slug: "BI",
    name: "Business intelligence",
    coeff: 4,
    cours: "40h",
    td: "4Oh",
  },
  {
    slug: "BDM",
    name: "Big data mining",
    coeff: 4,
    cours: "40h",
    td: "4Oh",
  },
  {
    slug: "ALOG",
    name: "Architecture logicielle",
    coeff: 4,
    cours: "30h",
    td: "3Oh",
  },
  {
    slug: "FASI",
    name: "Files d'attente et simulation",
    coeff: 3,
    cours: "30h",
    td: "3Oh",
  },
  {
    slug: "CRM",
    name: "Client relationship management",
    coeff: 3,
    cours: "30h",
    td: "3Oh",
  },
];
function ProgramSection() {
  const t = useTranslations("Studies.Engineering.Fields.sit.program");
  const [activeSemester, setActiveSemester] = useState(1);

  return (
    <section className="bg-darkblue relative overflow-hidden">
      <div className="container py-10 lg:py-20">
        <h2
          className={cn(
            "font-bold text-2xl text-white mb-8 lg:text-3xl lg:text-center lg:mb-16",
            sourceSerif.className
          )}
        >
          {t("title")}
        </h2>
        <div className="flex justify-evenly mb-8">
          <SwitchButton
            semesterNumber={1}
            activeSemester={activeSemester}
            setActiveSemester={setActiveSemester}
          >
            {t("firstSemester")}
          </SwitchButton>
          <SwitchButton
            semesterNumber={2}
            activeSemester={activeSemester}
            setActiveSemester={setActiveSemester}
          >
            {t("secondSemester")}
          </SwitchButton>
        </div>
        {activeSemester === 1 ? (
          <Table>
            <TableHead className="grid-cols-5">
              {Array.from({
                length: 5,
              }).map((_, i) => (
                <span key={i}>{t(`tableColumns.${i}`)}</span>
              ))}
            </TableHead>
            {semesterOneModules.map((module) => (
              <TableRow className="grid-cols-5" key={module.slug}>
                <span className="font-bold">{module.slug}</span>
                <span>{module.name}</span>
                <span>{module.coeff}</span>
                <span>{module.cours}</span>
                <span>{module.td}</span>
              </TableRow>
            ))}
          </Table>
        ) : (
          <Table>
            <TableHead className="grid-cols-5">
              {Array.from({
                length: 5,
              }).map((_, i) => (
                <span key={i}>{t(`tableColumns.${i}`)}</span>
              ))}
            </TableHead>
            {semesterTwoModules.map((module) => (
              <TableRow className="grid-cols-5" key={module.slug}>
                <span className="font-bold">{module.slug}</span>
                <span>{module.name}</span>
                <span>{module.coeff}</span>
                <span>{module.cours}</span>
                <span>{module.td}</span>
              </TableRow>
            ))}
          </Table>
        )}
        <div className="mt-10 lg:flex lg:justify-end lg:items-center lg:gap-6">
          <p className="text-grey mb-4 lg:mb-0">{t("getPdf")}</p>
          <Button>{t("getPdfBtn")}</Button>
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
