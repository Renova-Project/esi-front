"use client";
import React,{useRef} from 'react'
import Carousel from "@/components/Carousel";
import { Source_Serif_4 } from "next/font/google"
import { useTranslations } from "next-intl";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '@/components/Button';

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });

const BiblioInPic = () => {
    const t = useTranslations(["biblio.main"]);
    let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
      };

  return (
    <section className='bg-white'>
        <div className='container py-10'>
            <h1 className={`text-center font-bold text-3xl ${sourceSerif.className}`}>{t("biblioInPic.title")}</h1>
            <div className='flex items-center flex-col md:justify-between md:flex-row md:gap-20'>
                <div className="md:max-w-[30%]">
                    <p className='text-center text-lg'>{t("biblioInPic.explore")}</p>
                </div>
                <div className='relative max-w-full border-2 md:max-w-[60%] mt-10'>
                <Carousel 
                    refAssignment={(ref) => {
                        sliderRef = ref;
                      }}
                    settings={{
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        initialSlide: 0,
                        centerMode: true,
                        centerPadding: "45px",
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
                    <div className="h-52 md:h-72  bg-[url('/presentation.jpg')]  bg-cover bg-center relative border-[5px] border-[#9BC1FB]"></div>

                    </Carousel>
                   <div className="flex justify-center gap-2 mt-4">
                        <button
                          onClick={previous}
                          className="bg-[#203960] border border-[#f8f8f8] p-1 rounded-full text-white relative focus:outline-none"
                        >
                          <ChevronLeftIcon className="w-7 h-7 " />
                        </button>
                        <button
                          onClick={next}
                          className="bg-[#203960] border border-[#f8f8f8] p-1 rounded-full text-white relative focus:outline-none"
                        >
                          <ChevronRightIcon className="w-7 h-7 " />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 mt-8'>
                <Button className={'md:min-w-[40%]'}>
                    <span>{t("biblioInPic.regl")}</span>
                </Button>
                <Button className={'md:min-w-[40%]'}>
                    <span>{t("biblioInPic.officialWebSite")}</span>
                </Button>
            </div>
        </div>
   </section>
  )
}

export default BiblioInPic