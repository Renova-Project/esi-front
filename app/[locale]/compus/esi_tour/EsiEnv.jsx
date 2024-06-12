"use client";
import React,{useRef} from 'react'
import Carousel from "@/components/Carousel";
import { Source_Serif_4 } from "next/font/google"
import { useTranslations } from "next-intl";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });

const Env = ({title,desc}) =>{
    return(
        <div className='max-w-[15rem] pl-2 border-2'>
            <Image src={'/esi-logo.svg'} width={200} height={200} objectFit='cover'/>
            <div className=''>
                <p className='font-semibold'>{title}</p>
                <p className='text-[#5D5D5D]'>{desc}</p>
            </div>
        </div>
    )
}
  
  const EsiEnv = () => {
    const t = useTranslations(["esi_tour.main"]);
    let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };
    
    return (
      <div className='bg-white'>
        <div className='container py-10'>
            <p className="text-[#B6BDC5] font-bold text-center">{t("environement.title1")}</p>
            <h1 className={`font-bold text-3xl pt-4 pb-6 text-center ${sourceSerif.className}`}>{t("environement.title2")}</h1>
            <div className='relative'>
                    <Carousel 
                        refAssignment={(ref) => {
                            sliderRef = ref;
                          }}
                        settings={{
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false,
                            initialSlide: 0,
                            customPaging: () => (
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                    border: "1px white solid",
                                  }}
                                ></div>
                              ),
                          }}
                          responsive={[
                            {
                                breakpoint: 480,
                                settings: {
                                  slidesToShow: 1,
                                  slidesToScroll: 1,
                                },
                            },
                            {
                              breakpoint: 600,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                              },
                            },
                            {
                                breakpoint: 1024,
                                settings: {
                                  slidesToShow: 3,
                                  slidesToScroll: 1,
                                },
                              },
                          ]}
                        >
                        <Env title={'Amphi'} desc={'06 Amphi'}/>
                        <Env title={'Salles TD/TP'} desc={'36 Salles de travaux dirigés et travaux pratiques'}/>
                        <Env title={'Bibliothèque'} desc={'01 bibliothèque et 2 salles de lecture d’une capacité de 100 places'}/>
                    </Carousel>
                    <button className='absolute top-1/2 -translate-y-1/2 right-0' onClick={next}>
                        <ArrowRightIcon className='w-10 h-10'/>
                    </button>
                </div>
        </div>
      </div>
    )
  }
  
  export default EsiEnv