"use client";
import React,{useRef} from 'react'
import Carousel from "@/components/Carousel";
import { Source_Serif_4 } from "next/font/google"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const StudentsTell = () => {
  const t = useTranslations(["clubs.main"]);
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
            <p className='font-semibold text-base pb-6 text-[#5D5D5D]'>{t("studentTell.title")}</p>
            <p className={`font-bold text-xl lg:text-3xl ${sourceSerif.className}`}>{t("studentTell.discover")}</p>
        </div>
        <div className="relative text-white">
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
                        centerMode: true,
                        centerPadding: "50px",
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
                     {/* The content */}
                    </Carousel>
                </div>
    </section>
  )
}

export default StudentsTell