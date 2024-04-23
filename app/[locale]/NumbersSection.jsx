"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Source_Serif_4 } from "next/font/google";
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const NumbersSection = () => {
  const t = useTranslations(["Landing"]);
  const [secondPartShown, setSecondPartShown] = useState(false);
  return (
    <section className="bg-sectionBgGray">
      <div className="container py-8 lg:py-12">
        <h2
          className={`text-3xl font-semibold mb-6 md:text-center md:text-4xl md:mb-12 ${sourceSerif.className}`}
        >
          {t("inNumbers.title")}
        </h2>
        <div className="flex flex-wrap justify-center md:bg-white md:shadow md:border-b  md:border-b-honolulu mb-10 md:mb-0  md:p-10 gap-12 md:gap-20">
          <div className="max-w-36 flex-1 md:max-w-52">
            <div className="flex items-start gap-2 text-honolulu">
              <span className="text-4xl font-black">
                {t("inNumbers.numbers.0.value")}
              </span>
              <span className="font-black text-2xl">
                {t("inNumbers.numbers.0.ordinalIndicator")}
              </span>
            </div>
            <div className="h-[0.39px] bg-black/40 my-1"></div>
            <div>
              <span className="font-black text-sm md:text-lg">
                {t("inNumbers.numbers.0.label")}
              </span>
            </div>
          </div>
          <div className="max-w-36 flex-1 md:max-w-52">
            <div className="text-4xl font-black text-honolulu">
              {t("inNumbers.numbers.1.value")}
            </div>
            <div className="h-[0.39px] bg-black/40 my-1"></div>
            <div>
              <span className="font-black text-sm md:text-lg">
                {t("inNumbers.numbers.1.label")}
              </span>
            </div>
          </div>
          <div className="max-w-36 flex-1 md:max-w-52">
            <div className="flex items-start gap-2 text-black">
              <span className="text-4xl font-black">
                {t("inNumbers.numbers.2.value")}
              </span>
              <span className="font-black text-2xl">
                {t("inNumbers.numbers.2.ordinalIndicator")}
              </span>
            </div>
            <div className="h-[0.39px] bg-black/40 my-1"></div>
            <div>
              <span className="font-black text-sm md:text-lg">
                {t("inNumbers.numbers.2.label")}
              </span>
            </div>
          </div>
          {!secondPartShown ? (
            <button
              onClick={() => {
                setSecondPartShown(true);
              }}
              className="max-w-36 flex-1 md:hidden flex flex-col items-center text-darkgrey text-center"
            >
              <PlusIcon className="w-5 h-5" />
              <span className="text-sm">Afficher plus</span>
            </button>
          ) : null}
        </div>
        <div className="hidden md:flex justify-center">
          <div className="bg-darkblue w-56 h-14"></div>
        </div>
        <div
          className={`flex flex-wrap justify-center  gap-12 md:gap-20 md:bg-white md:shadow md:border-b  md:border-b-honolulu md:p-10 ${
            !secondPartShown ? "hidden md:flex" : ""
          }`}
        >
          <div className="max-w-36 flex-1 md:max-w-52">
            <div className="text-4xl font-black text-honolulu">
              {t("inNumbers.numbers.3.value")}
            </div>
            <div className="h-[0.39px] bg-black/40 my-3"></div>
            <div>
              <span className="font-black text-sm md:text-lg">
                {t("inNumbers.numbers.3.label")}
              </span>
            </div>
          </div>
          <div className="max-w-36 flex-1 md:max-w-52">
            <div className="text-4xl font-black text-black">
              {t("inNumbers.numbers.4.value")}
            </div>
            <div className="h-[0.39px] bg-black/40 my-3"></div>
            <div>
              <span className="font-black text-sm md:text-lg">
                {t("inNumbers.numbers.4.label")}
              </span>
            </div>
          </div>
          <div className="max-w-36 flex-1 md:max-w-52">
            <div className="text-4xl font-black text-honolulu">
              {t("inNumbers.numbers.5.value")}
            </div>
            <div className="h-[0.39px] bg-black/40 my-3"></div>
            <div>
              <span className="font-black text-sm md:text-lg">
                {t("inNumbers.numbers.5.label")}
              </span>
            </div>
          </div>
          <div className="max-w-36 flex-1 md:max-w-52">
            <div className="text-4xl font-black text-black">
              {t("inNumbers.numbers.6.value")}
            </div>
            <div className="h-[0.39px] bg-black/40 my-3"></div>
            <div>
              <span className="font-black text-sm md:text-lg">
                {t("inNumbers.numbers.6.label")}
              </span>
            </div>
          </div>
          <div className="max-w-36 flex-1 md:max-w-52">
            <div className="text-4xl font-black text-honolulu">
              {t("inNumbers.numbers.7.value")}
            </div>
            <div className="h-[0.39px] bg-black/40 my-3"></div>
            <div>
              <span className="font-black text-sm md:text-lg">
                {t("inNumbers.numbers.7.label")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NumbersSection;
