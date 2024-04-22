import React from 'react'
import New from '@/components/New'
import Carousel from '@/components/Carousel';
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/20/solid'


const inter =Source_Serif_4({
    subsets: ["latin"],
})
const HeadlineNews = () => {
    const t = useTranslations(["Landing"]);
  return (
        <section className='bg-darkblue'>
            <div className="container flex flex-col py-10 text-white"> 
                <div className='w-full flex items-center justify-between pb-10'>
                    <h1 className={`text-2xl sm:text-3xl font-bold ${inter.className}`}>{t("a_la_une.title")}</h1>
                </div>
                <div className='w-full flex flex-col items-start lg:flex-row lg:items-center justify-between gap-4 lg:gap-0'>
                  <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                  <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                  <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                </div>
                <div className="py-4 md:py-10 flex items-center justify-between">
                  <button className='flex px-7 sm:px-16 py-4 border-white border-[0.1rem]'>{t("a_la_une.allActualities")}</button>
                  <div className='hidden lg:flex gap-6 border-2'>
                    <button className='text-white bg-[#203960] w-14 h-14 rounded-full border-[#f8f8f8] border-[1px]'>
                        <ChevronLeftIcon/>
                    </button>
                    <button className='text-white bg-[#203960] w-14 h-14 rounded-full border-[#f8f8f8] border-[1px]'>
                        <ChevronRightIcon/>
                    </button>
                  </div>
              </div>
            </div>
        </section>
  )
}

export default HeadlineNews