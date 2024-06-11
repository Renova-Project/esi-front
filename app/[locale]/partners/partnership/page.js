import React from "react";
import { getTranslations } from "next-intl/server";
import { Donegal_One, Source_Serif_4, Work_Sans } from "next/font/google";
import Button from "@/components/Button";
import { ArrowUpTrayIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "@/navigation";

const donegalOne = Donegal_One({
  subsets: ["latin"],
  weight: "400",
});

const inter = Source_Serif_4({
  subsets: ["latin"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
});

export default async function Home() {
  const t1 = await getTranslations("Partners");
  const t2 = await getTranslations("Partners.partnership");
  return (
    <div>
      {/* Mobile Nav */}

      <div className="flex items-center lg:hidden">
        <div className="w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold border-white border-r-2">
          <Link href={"/partners/recruitment"}>
            {t1("nav.recruitment.recruitmentSm")}
          </Link>
        </div>
        <div className="w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold">
          <Link href={"/partners/formation"}>
            {t1("nav.formation.formationSm")}
          </Link>
        </div>
        <div className="w-1/3 flex justify-center py-4 text-[#0061B1] text-sm md:text-base font-semibold">
          <Link href={"/partners/partnership"}>
            {t1("nav.partnership.partnershipSm")}
          </Link>
        </div>
      </div>

      {/* Desktop Nav */}

      <div className="hidden lg:flex items-center">
        <div className="w-1/3 flex justify-center py-4 bg-honolulu text-white border-white border-r-[1px]">
          <Link
            className="flex items-center gap-3 text-sm md:text-base font-semibold"
            href={"/partners/recruitment"}
          >
            <p>{t1("nav.recruitment.recruitmentLg")}</p>
            <span className="rounded-full p-1 text-white border-[1px] bg-[#5F9EFF]/30">
              <ChevronRightIcon className="w-5 h-5" />
            </span>
          </Link>
        </div>
        <div className="w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold">
          <Link
            className="flex items-center gap-3 text-sm md:text-base"
            href={"/partners/formation"}
          >
            <p>{t1("nav.formation.formationLg")}</p>
            <span className="rounded-full p-1 text-white border-[1px] bg-[#5F9EFF]/30">
              <ChevronRightIcon className="w-5 h-5" />
            </span>
          </Link>
        </div>
        <div className="w-1/3 flex justify-center py-4 font-semibold text-[#0061B1]">
          <Link
            className="flex items-center gap-3 text-sm md:text-base"
            href={"/partners/partnership"}
          >
            <p>{t1("nav.partnership.partnershipLg")}</p>
            <span className="rounded-full p-1 text-[#0061B1] border-[1px] border-[#0061B1]">
              <ChevronRightIcon className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="container pt-6 pb-10">
        <div className="text-center">
          <h1
            className={`text-[#0061B1] text-xl lg:text-2xl font-bold ${inter.className}`}
          >
            {t2("title")}
          </h1>
        </div>
        <div className="flex justify-center md:justify-between items-center gap-3 flex-wrap">
          <div className="max-w-[25rem]">
            <div className="flex items-center gap-2 py-4 font-bold">
              <span className="flex items-center justify-center text-lg w-8 h-8 rounded-full font-bold p-4 text-[#0061B1] border-[2px] border-[#0061B1]">
                1
              </span>
              <h1>{t2("organisationInfos.title")}</h1>
            </div>
            <p className="text-xs pb-6">{t2("organisationInfos.text")}</p>
            <form className="flex flex-col gap-6">
              <input
                placeholder={t2("organisationInfos.name")}
                type="text"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none"
              />
              <select
                type="text"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none"
              >
                <option
                  value={t2("organisationInfos.type")}
                  disabled
                  selected
                  hidden
                >
                  {t2("organisationInfos.type")}
                </option>
                <option value="proposition1">Proposition 1</option>
                <option value="proposition2">Proposition 2</option>
              </select>
              <select
                type="text"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none"
              >
                <option
                  value={t2("organisationInfos.sector")}
                  disabled
                  selected
                  hidden
                >
                  {t2("organisationInfos.sector")}
                </option>
                <option value="proposition1">Proposition 1</option>
                <option value="proposition2">Proposition 2</option>
              </select>
              <select
                type="text"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none"
              >
                <option
                  value={t2("organisationInfos.size")}
                  disabled
                  selected
                  hidden
                >
                  {t2("organisationInfos.size")}
                </option>
                <option value="proposition1">Proposition 1</option>
                <option value="proposition2">Proposition 2</option>
              </select>
            </form>
          </div>
          <div className="max-w-[25rem]">
            <div className="flex items-center gap-2 py-4 font-bold">
              <span className="flex items-center justify-center text-lg w-8 h-8 rounded-full font-bold p-4 text-[#0061B1] border-[2px] border-[#0061B1]">
                2
              </span>
              <h1>{t2("contactDetails.title")}</h1>
            </div>
            <p className="text-xs pb-6">{t2("contactDetails.text")}</p>
            <form className="flex flex-col gap-6">
              <input
                placeholder={t2("contactDetails.email")}
                type="email"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none"
              />
              <input
                placeholder={t2("contactDetails.phoneNumber")}
                type="number"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none focus:appearance-none"
              />
              <select
                type="text"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none"
              >
                <option
                  value={t2("contactDetails.pays")}
                  disabled
                  selected
                  hidden
                >
                  {t2("contactDetails.pays")}
                </option>
                <option value="Algerie">Algerie</option>
                <option value="France">France</option>
              </select>
              <input
                placeholder={t2("contactDetails.fullAdress")}
                type="text"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none"
              />
            </form>
          </div>
          <div className="max-w-[25rem]">
            <div className="flex items-center gap-2 py-4 font-bold">
              <span className="flex items-center justify-center text-lg w-8 h-8 rounded-full font-bold p-4 text-[#0061B1] border-[2px] border-[#0061B1]">
                3
              </span>
              <h1>{t2("partnershipObjectives.title")}</h1>
            </div>
            <p className="text-xs pb-6">{t2("partnershipObjectives.text")}</p>
            <form className="flex flex-col gap-6">
              <select
                type="text"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none"
              >
                <option
                  value={t2("partnershipObjectives.areasOfInterest")}
                  disabled
                  selected
                  hidden
                >
                  {t2("partnershipObjectives.areasOfInterest")}
                </option>
                <option value="proposition1">Proposition 1</option>
                <option value="proposition2">Proposition 2</option>
              </select>
              <select
                type="text"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none"
              >
                <option
                  value={t2("partnershipObjectives.type")}
                  disabled
                  selected
                  hidden
                >
                  {t2("partnershipObjectives.type")}
                </option>
                <option value="proposition1">Proposition 1</option>
                <option value="proposition2">Proposition 2</option>
              </select>
              <input
                placeholder={t2("partnershipObjectives.webSite")}
                type="text"
                className="w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none"
              />
              <div className="w-full flex justify-between items-center text-[#555555] bg-[#EAEAEA] p-2 text-sm">
                <span>{t2("partnershipObjectives.officielDoc")}</span>
                <input type="file" id="upload-btn" hidden />
                <label
                  for="upload-btn"
                  className="w-28 cursor-pointer flex items-center justify-between bg-gradient-to-r from-btnGradientStart via-btnGradientStart via-30% to-[#2e6dc6] p-2 text-sm text-white font-semibold"
                >
                  <span>{t2("partnershipObjectives.import")}</span>
                  <ArrowUpTrayIcon className="w-5 h-5" />
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center pt-10">
          <Button className="bg-gradient-to-r from-btnGradientStart via-btnGradientStart via-30% to-[#2e6dc6] font-normal px-3 py-4 text-sm">
            <span>{t2("submitYourRequest")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
