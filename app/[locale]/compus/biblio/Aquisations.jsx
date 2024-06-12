"use client";
import React,{useRef} from 'react'
import Carousel from "@/components/Carousel";
import { Source_Serif_4 } from "next/font/google"
import { useTranslations } from "next-intl";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/outline';

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });

  const Book = ({title,author}) => {
    return(
        <div>
            <Image src={'/book.png'} alt='/' width={200} height={250} objectFit='cover'/>
            <p className='font-bold text-lg'>{title}</p>
            <p className='text[#6F6F6F]'><span className='mr-1'>by</span>{author}</p>
        </div>
    )
  }
  
  const Aquisations = () => {
    const t = useTranslations(["biblio.main"]);
    let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };

    const prev = () => {
        sliderRef.slickPrev();
      };
    return (
        <section className="bg-[#EEEEEE]">
        <div className="container py-10">
             <h1 className={`text-center font-bold text-3xl ${sourceSerif.className}`}>{t("aquisation.title")}</h1>
             <p className="text-center text-sm pt-3 pb-6">{t("aquisation.desc")}</p>
             <div className='relative'>
             <Carousel 
                    refAssignment={(ref) => {
                        sliderRef = ref;
                      }}
                    settings={{
                        dots: false,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        initialSlide: 0,
                        centerMode: true,
                        centerPadding: "45px",
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
                    <Book title={'Algorithms'} author={'louis and kevin'}/>
                    <Book title={'Algorithms'} author={'louis and kevin'}/>
                    <Book title={'Algorithms'} author={'louis and kevin'}/>
                    <Book title={'Algorithms'} author={'louis and kevin'}/>
                    </Carousel>
                    <button
                        onClick={prev}
                        className="absolute left-1 top-1/2 -translate-y-1/2 bg-white border border-honolulu p-1 rounded-full text-honolulu focus:outline-none"
                    >
                            <ChevronLeftIcon className="w-7 h-7 " />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white border border-honolulu p-1 rounded-full text-honolulu focus:outline-none"
                    >
                        <ChevronRightIcon className="w-7 h-7 " />
                    </button>
             </div>
        </div>
    </section>
    )
  }
  
  export default Aquisations