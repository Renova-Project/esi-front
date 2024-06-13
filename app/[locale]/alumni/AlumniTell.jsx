"use client";
import React,{useRef} from 'react'
import Carousel from "@/components/Carousel";
import { Source_Serif_4 } from "next/font/google"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const Tell = ({nextSlide}) => {
  return(
    <div className="relative md:h-[20rem] w-auto max-w-[35rem] flex flex-col p-3 md:p-0">
    <div className="md:absolute md:top-[5%] md:left-[7%]">
      <Image 
        src="/boy.png" 
        alt="Bouberbachne Karim"
        width={150}
        height={300}
        className="md:w-[10rem] md:h-[10rem] w-[8rem] h-[8rem] rounded-md"
      />
    </div>
    <div className="md:absolute md:bottom-2 md:right-0 md:shadow-xl md:rounded bg-white mt-2 md:mt-0 md:p-3 md:max-w-[70%]">
      <h3 className="text-sm md:text-base font-bold text-[#5D5D5D]">Bouberbachne Karim</h3>
      <p className="text-xs md:text-sm text-gray-300 py-4">Etudiant ICS | Membre du club CSE</p>
      <p className="text-black font-semibold">
        “Le club scientifique a changé ma vision de l'apprentissage en ouvrant des portes vers la découverte au-delà des manuels académiques.”
      </p>
    </div>
    <button className='text-gray-700 absolute right-0 top-[5%]' onClick={nextSlide}>
        <ArrowRightIcon className='w-10 h-10'/>
    </button>
  </div>
      
      
  )}

const AlumniTell = () => {
  const t = useTranslations(["alumni"]);
  let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
  return (
    <section className='py-10'>
        <div className='container text-center'>
            <p className={`font-bold text-xl lg:text-3xl pb-6 ${sourceSerif.className}`}>{t("alumniTell.title")}</p>
        </div>
        <div className="relative text-white">
                    <Carousel 
                    refAssignment={(ref) => {
                        sliderRef = ref;
                      }}
                    settings={{
                        infinite: true,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        initialSlide: 0,
                        centerPadding: "50px",
                        centerMode:true
                      }}
                      responsive={[
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 3,
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
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                          },
                        },
                      ]}
                    >
                     <Tell nextSlide={next}/>
                     <Tell nextSlide={next}/>
                     <Tell nextSlide={next}/>
                    </Carousel>
                </div>
    </section>
  )
}

export default AlumniTell