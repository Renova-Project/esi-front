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

function ProgramSection() {
  const t = useTranslations("Studies.Fields.sit.program");
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
            {Array.from({
              length: 5,
            }).map((_, i) => (
              <TableRow className="grid-cols-5" key={i}>
                <span className="font-bold">ANA2</span>
                <span>Analyse Mathematique 2 1 </span>
                <span>4</span>
                <span>30h</span>
                <span>15H</span>
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
            {Array.from({
              length: 5,
            }).map((_, i) => (
              <TableRow className="grid-cols-5" key={i}>
                <span className="font-bold">ANA2</span>
                <span>Analyse Mathematique 2 1 </span>
                <span>4</span>
                <span>30h</span>
                <span>15H</span>
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
