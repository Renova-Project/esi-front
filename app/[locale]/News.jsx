import React from 'react'
import { useTranslations } from "next-intl";
import New from '@/components/New'
import { Source_Serif_4 } from "next/font/google";



const inter =Source_Serif_4({
    subsets: ["latin"],
})

const News = () => {
    const t = useTranslations(["Landing"]);
  return (
    <section className="container flex flex-col py-10"> 
                <div className='w-full flex items-center justify-between pb-10'>
                    <h1 className={`text-2xl sm:text-3xl font-bold ${inter.className}`}>{t("Actualities.title")}</h1>
                </div>
                <div className='w-full flex flex-col items-start lg:flex-row lg:items-center justify-between gap-4 lg:gap-0'>
                  <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                  <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                  <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                </div>
                <div className="py-4 md:py-10">
                  <button className='flex px-7 sm:px-16 py-4 bg-honolulu text-white'>{t("Actualities.allActualities")}</button>
              </div>
        </section>
  )
}

export default News