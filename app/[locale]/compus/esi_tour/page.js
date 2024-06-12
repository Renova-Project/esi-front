import React from "react";
import { useTranslations } from "next-intl";
import { Source_Serif_4,Poppins } from "next/font/google"
import Button from "@/components/Button";
import Image from "next/image";
import EsiEnv from "./EsiEnv";



const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
  });



export default function Home () {
    const t = useTranslations(["esi_tour.main"]);

    return(
        <div>
            <div className="bg-darkblue">
                 <div className="container py-10">
                    <h1 className={`text-white text-4xl font-bold text-center pb-10 ${sourceSerif.className}`}>{t("heroSection.title")}</h1>
                    <div className="flex justify-between gap-3 items-center flex-wrap">
                        <div className="text-white md:max-w-[50%]">
                            <p className={`font-semibold ${poppins.className}`}>{t("heroSection.discover.title")}</p>
                            <p className="py-4">{t("heroSection.discover.desc")}</p>
                            <Button className='border-2 border-white text-base px-3 py-2 bg-transparent'>
                                <span>{t("heroSection.discover.reserve")}</span>
                            </Button>
                        </div>
                        <div className="relative h-[20rem] w-full md:max-w-[25rem] bg-[url('/esi-tour.jpg')] bg-cover bg-center"/>
                    </div>
                 </div>
            </div>
            <div className="bg-white">
                <div className="container py-10">
                    <p className={`text-center font-bold ${poppins.className}`}>{t("vue_360.title1")}</p>
                    <h1 className={`text-center font-bold text-2xl pb-5 ${sourceSerif.className}`}>{t("vue_360.title2")}</h1>
                    <div className="flex justify-center">
                        <Image src={'/vue_360.png'} alt="/" width={100} height={100} className="h-[20rem] w-full md:max-w-[35rem]" objectFit="contain"/>
                    </div>
                </div>
            </div>
            <div className="bg-darkblue">
                <div className="container py-10 text-white text-center">
                    <p className="text-[#B6BDC5]">{t("localisation.title1")}</p>
                    <h1 className={`text-2xl py-4 ${sourceSerif.className}`}>{t("localisation.title2")}</h1>
                    <p className={`text-sm ${poppins.className}`}>{t("localisation.desc")}</p>
                    <div className="flex justify-center">
                        {/* Map View */}
                    </div>
                </div>
            </div>
            <EsiEnv/>
        </div>
    )}