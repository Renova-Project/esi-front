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

const semesterOneModules = [
  {
    slug: "IMR",
    name: "Initiation à la méthodologie de recherche",
    coeff: 2,
    cours: "30h",
    td: "2Oh",
  },
  {
    slug: "RDCR",
    name: "Recherche documentaire et communication de recherche",
    coeff: 2,
    cours: "30h",
    td: "2Oh",
  },
  {
    slug: "IVR",
    name: "Innovation et valorisation de la recherche",
    coeff: 1,
    cours: "30h",
    td: "2Oh",
  },
  {
    slug: "GPS",
    name: "Gestion de projets scientifiques",
    coeff: 3,
    cours: "30h",
    td: "3Oh",
  },
  {
    slug: "MR",
    name: "Mémoire de recherche",
    coeff: 8,
    cours: "120h",
    td: "8Oh",
  },
];

function ProgramSection() {
  const t = useTranslations("Studies.Engineering.Fields.sit.program");
  const [activeSemester, setActiveSemester] = useState(1);

  return (
    <section className="bg-grayishBg relative overflow-hidden -z-10">
      <div className="container py-10 lg:pt-40">
        <h2
          className={cn(
            "font-bold text-2xl mb-8 lg:text-3xl lg:text-center lg:mb-16",
            sourceSerif.className
          )}
        >
          {t("title")}
        </h2>
        <Table>
          <TableHead className="grid-cols-5">
            {Array.from({
              length: 5,
            }).map((_, i) => (
              <span key={i}>{t(`tableColumns.${i}`)}</span>
            ))}
          </TableHead>
          {semesterOneModules.map((module) => (
            <TableRow
              className="grid-cols-5 text-black border-b-black/10"
              key={module.slug}
            >
              <span className="font-bold">{module.slug}</span>
              <span>{module.name}</span>
              <span>{module.coeff}</span>
              <span>{module.cours}</span>
              <span>{module.td}</span>
            </TableRow>
          ))}
        </Table>
        <div className="mt-10 lg:flex lg:justify-end lg:items-center lg:gap-6">
          <p className="text-darkgrey mb-4 lg:mb-0">{t("getPdf")}</p>
          <Button>{t("getPdfBtn")}</Button>
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
