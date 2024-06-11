import React from "react"
import { Source_Serif_4,Donegal_One } from "next/font/google"
import { useTranslations } from "next-intl";
import { MapPinIcon } from "@heroicons/react/20/solid";
import Button from "@/components/Button";
import OurClubs from "./OurClubs";
import StudentsTell from "./StudentsTell";


const donegalOne = Donegal_One({
    subsets: ["latin"],
    weight: "400",
  });

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });


export const Event = ({title,date,type,clubName,localisation}) => {
    return(
        <div className="bg-[#F4F4F4] p-4 border-2">
            <div className="w-[14rem] sm:w-[17rem] lg:w-[20rem] pb-10">
                <div className="bg-[url('/event.jpg')] h-48"/>
                <div className="flex items-center justify-between pt-2 text-[#5D5D5D] text-xs">
                  <p>{type}</p>
                  <p>{date}</p>
                </div>
                <p className="font-semibold pt-3 pb-6">{title}</p>
                <div className="flex items-center gap-3">
                   <span className="w-12 h-12 bg-[url('/GDG.png')] border-[1px] border-gray-400 rounded-full"/>
                   <span>
                      <span className="font-semibold text-xs">{clubName}</span>
                      <span className="flex items-center gap-1 text-xs text-[#c6c6c6]">
                          <MapPinIcon className="w-5 h-5"/>
                          <span>{localisation}</span>
                      </span>
                   </span>
                </div>
            </div>
        </div>
    )
}



export default function Home () {

    const t = useTranslations(["clubs.main"]);

    return(
        <div>
            <div className="relative bg-[url('/hero.jpg')] h-heroSectionMobile lg:h-heroSection bg-cover bg-center flex justify-center items-center">
                <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-darkblue/60">
                    <div className="max-w-[40rem]">
                        <h1 className={`text-xl md:text-3xl text-white text-center ${donegalOne.className}`}>
                            {t("heroSection.title.0")}
                            <span className="text-honolulu px-1">{t("heroSection.title.1")}</span>
                            {t("heroSection.title.2")}
                        </h1>
                    </div> 
                </div>   
            </div>

            {/* Clubs events */}

            <section className="py-10">
                <div className="container">
                    <h1 className={`pb-20 text-3xl text-center font-bold ${sourceSerif.className}`}>{t("events.title")}</h1>
                    <div className="flex justify-center sm:justify-between gap-4 flex-wrap">
                       <Event title='Annual Internal Event' date={'Mars 24,2024'} type='Devloppement' clubName='GDG Algiers' localisation={'ESI Algiers'}/>
                       <Event title='Annual Internal Event' date={'Mars 24,2024'} type='Devloppement' clubName='GDG Algiers' localisation={'ESI Algiers'}/>
                       <Event title='Annual Internal Event' date={'Mars 24,2024'} type='Devloppement' clubName='GDG Algiers' localisation={'ESI Algiers'}/>
                    </div>
                    <div className="flex justify-center pt-8">
                         <Button className='border-2 border-black font-black text-lg bg-white px-3 py-4 text-black'>
                            <span>{t("allEvents")}</span>
                         </Button>
                    </div>
                </div>
            </section>

            <OurClubs/>

            <StudentsTell/>
        </div>
    )
}