import React from "react";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { AlumniStories } from "./AlumniStories";


const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
    weight: "400",
  });


const Event = ({date,title,image}) => {
    return(
        <div className='w-full max-w-[15rem] md:max-w-[20rem] h-72'>
           <img src={image} alt="/" className='w-full h-48' />
           <p className="text-sm">{date}</p>
           <p className={`font-bold text-lg ${sourceSerif.className}`}>{title}</p>
        </div>
    )
}


export default function Home() {
    const t = useTranslations(["alumni"]);

    return(
        <div>
            <div className="relative bg-[url('/alumni.jpg')] h-heroPartnersMobile lg:h-heroPartners bg-cover bg-center">
                <div className="h-full container py-10 flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:max-w-[40%]">
                        <h1 className={`text-white text-4xl md:text-7xl font-bold text-center mb-5 md:mb-0 ${sourceSerif.className}`}>{t("hero.title")}</h1>
                    </div>
                    <div className={`flex flex-wrap items-center justify-center md:justify-between gap-20 text-white w-full md:max-w-[50%] ${sourceSerif.className}`}>
                        <div className="max-w-[15rem]">
                            <h1 className="text-5xl text-[#1B76FF] font-bold">+20K</h1>
                            <p className="text-lg">{t("hero.alumni")}</p>
                        </div>
                        <div className="max-w-[15rem]">
                            <h1 className="text-5xl font-bold">24</h1>
                            <p className="text-lg">{t("hero.history")}</p>
                        </div>
                        <div className="max-w-[15rem]">
                           <h1 className="text-5xl font-bold">80%</h1>
                           <p className="text-lg">{t("hero.taux")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-10">
                <div className="flex justify-center md:justify-start container py-10">
                     <h1 className={`font-bold text-4xl ${sourceSerif.className}`}>{t("events.title")}</h1>
                </div>
                <div className="container flex items-center justify-center md:justify-between gap-4 flex-wrap">
                    <Event date={'14 Mars 2021'} title={'Alumni Reconnect'} image={'/alumni/event1.jpg'}/>
                    <Event date={'14 Mars 2021'} title={'ESI Alumni Awards 2021'} image={'/alumni/event2.jpg'}/>
                    <Event date={'14 Mars 2021'} title={'ESI Alumni Conference'} image={'/alumni/event3.jpg'}/>
                </div>
            </div>
            <AlumniStories/>
            <div className="bg-[#EEEEEE]">
                <div className="container py-10 flex flex-col md:flex-row justify-center items-center md:justify-between">
                    <div className="w-full md:max-w-[50%]">
                         <h1 className="text-4xl font-bold">
                         Vous êtes <span className="text-honolulu">alumnis</span>?
                         </h1>
                         <h1 className="text-4xl font-bold">bienvenue de nouveau!</h1>
                         <p className="mt-6">Bienvenue dans la famille des alumnis de notre école, un réseau qui s'étend bien au-delà des jours de remise des diplômes. À l’ESI, nous croyons que votre parcours ne fait que commencer une fois que vous avez franchi les portes de notre campus. Votre réussite est la nôtre, et nous sommes fiers de partager chacune de vos réalisations</p>
                    </div>
                    <div className="w-full md:max-w-[30%]">
                        <h1 className={`font-bold text-2xl mb-2 ${sourceSerif.className}`}>Je veux</h1>
                        <div className="w-full px-2 py-1 mb-2 rounded-md bg-white">
                            <p >Donner un témoignage</p>
                        </div>
                        <div className="w-full px-2 py-1 mb-2 rounded-md bg-white">
                            <p >Récupérer mes documents de diplôme</p>
                        </div>
                        <div className="w-full px-2 py-1 mb-2 rounded-md bg-white">
                            <p >Find career opportunities</p>
                        </div>
                        <div className="w-full px-2 py-1 mb-2 rounded-md bg-white">
                            <p >Contribuer en tant que mentor</p>
                        </div>
                        <div className="w-full px-2 py-1 mb-2 rounded-md bg-white">
                            <p >Accéder à des ressources de formation continue</p>
                        </div>
                        <div className="w-full px-2 py-1 mb-2 rounded-md bg-white">
                            <p >Faire un don</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}