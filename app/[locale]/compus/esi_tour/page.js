import React from "react";
import { useTranslations } from "next-intl";
import { Source_Serif_4,Poppins } from "next/font/google"
import Button from "@/components/Button";
import Image from "next/image";
import EsiEnv from "./EsiEnv";
import Link from "next/link";



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
                                <Link href={''}>{t("heroSection.discover.reserve")}</Link>
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
                        <iframe 
                        src="https://esivtour.cse.club/VirtualTour.html?fbclid=IwAR2JyAXGG8MXCQXdlvMfXM0162Q8jAW2LfedtVgLSsfBY8B6hRgx8r3VCRg" 
                        title="description"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          className="w-full h-[120vh] object-cover"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="bg-darkblue">
                <div className="container py-10 text-white text-center">
                    <p className="text-[#B6BDC5]">{t("localisation.title1")}</p>
                    <h1 className={`text-2xl py-4 ${sourceSerif.className}`}>{t("localisation.title2")}</h1>
                    <p className={`text-sm ${poppins.className}`}>{t("localisation.desc")}</p>
                    <div className="my-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.7296401896033!2d3.1713406746926798!3d36.70503417306013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e522f3f317461%3A0x215c157a5406653c!2sEcole%20Nationale%20Sup%C3%A9rieure%20d&#39;Informatique%20(Ex.%20INI)!5e0!3m2!1sfr!2sdz!4v1718203824687!5m2!1sfr!2sdz" 
                     className="w-full h-96 object-cover" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <EsiEnv/>
        </div>
    )}