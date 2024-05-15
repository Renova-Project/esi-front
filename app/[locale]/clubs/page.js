import React from "react"
import { Source_Serif_4,Donegal_One } from "next/font/google"
import { useTranslations } from "next-intl";



const donegalOne = Donegal_One({
    subsets: ["latin"],
    weight: "400",
  });

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });


export default function Home () {

    const t = useTranslations(["clubs.main"]);

    return(
        <div>
            <div className="relative bg-[url('/hero.jpg')] h-heroSectionMobile lg:h-heroSection bg-cover bg-center flex justify-center items-center">
                <div>
                   <h1>{}</h1>
                </div>    
            </div>
        </div>
    )
}