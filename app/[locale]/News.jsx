"use client";
import React,{useRef} from 'react'
import { useTranslations } from "next-intl";
import New from '@/components/New'
import Carousel from '@/components/Carousel';
import { Source_Serif_4 } from "next/font/google";
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/20/solid'

const inter =Source_Serif_4({
    subsets: ["latin"],
})

const News = () => {
    const t = useTranslations(["Landing"]);
    let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
       sliderRef.slickPrev();
    };
  return (
    <section className="container flex flex-col py-10"> 
                <div className='w-full flex items-center justify-between pb-10'>
                    <h1 className={`text-2xl sm:text-3xl font-bold ${inter.className}`}>{t("Actualities.title")}</h1>
                </div>
                <div className='hidden lg:block'>
                  <Carousel 
                    refAssignment={(ref)=>{
                      sliderRef=ref
                  }}
                    settings={{
                        dots: false,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows:false,
                        responsive: [
                          {
                            breakpoint: 1024,
                            settings: {
                              slidesToShow: 3,
                              slidesToScroll: 3,
                              infinite: true,
                              dots: true
                            }
                          },
                          {
                            breakpoint: 600,
                            settings: {
                              slidesToShow: 2,
                              slidesToScroll: 2,
                              initialSlide: 2
                            }
                          },
                      
                    ]
                    }}>
                        <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                        <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                        <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                    </Carousel>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-4 lg:hidden'>
                        <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                        <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                        <New image="/LMCS-11.svg" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                </div>
                <div className="py-4 md:py-10 flex items-center justify-between">
                  <button className='flex px-7 sm:px-16 py-4 bg-honolulu text-white border-[0.1rem]'>{t("a_la_une.allActualities")}</button>
                  <div className='hidden lg:flex gap-6 pr-4'>
                    <button onClick={previous} className='text-white bg-[#203960] w-14 h-14 rounded-full border-[#f8f8f8] border-[1px]'>
                        <ChevronLeftIcon/>
                    </button>
                    <button onClick={next} className='text-white bg-[#203960] w-14 h-14 rounded-full border-[#f8f8f8] border-[1px]'>
                        <ChevronRightIcon/>
                    </button>
                  </div>
              </div>
        </section>
  )
}

export default News