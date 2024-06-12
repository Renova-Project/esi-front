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

function Organisation() {
  const t = useTranslations("School.Presentation.organisation");
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
            {t("switch.0")}
          </SwitchButton>
          <SwitchButton
            semesterNumber={2}
            activeSemester={activeSemester}
            setActiveSemester={setActiveSemester}
          >
            {t("switch.1")}
          </SwitchButton>
        </div>
        <div className="text-white">
          {activeSemester === 1 ? (
            <div className="whitespace-pre-line">{t("first")}</div>
          ) : (
            <div>{t("second")}</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Organisation;
