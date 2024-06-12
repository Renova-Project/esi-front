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
import { cn } from "@/lib/utils";

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
    <section className='bg-[#EEEEEE]'>
        <div className='container py-10'>
            <h1 className={`text-center font-bold text-3xl ${sourceSerif.className}`}>{t("biblioInPic.title")}</h1>   
            <div className="flex items-center flex-col md:justify-center md:flex-row md:gap-20">
                <div className="md:max-w-[30%]">
                    <p className='text-lg font-semibold'>{t("biblioInPic.explore")}</p>
                </div>
        <div className="flex-1  max-w-full md:max-w-[50%] lg:max-w-[40%] mt-10">
          <div className="">
            <Carousel
              refAssignment={(ref) => {
                sliderRef = ref;
              }}
              settings={{
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }}
            >
              <div>
                <div className="h-52 md:h-72  bg-[url('/biblio1.jpg')]  bg-cover bg-center relative"></div>
              </div>
              <div>
                {/* <Image
                src="/presentation.jpg"
                width={600}
                height={400}
                alt="School"
                className="rounded-lg"
              /> */}
              </div>
            </Carousel>
          </div>
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
      <div className='flex flex-col md:flex-row gap-10 justify-center mt-14'>
        <Button className={'w-full first-letter:md:w-[40%]'}>
          <span>{t("biblioInPic.regl")}</span>
        </Button>
        <Button className={'w-full md:w-[40%]'}>
          <span>{t("biblioInPic.officialWebSite")}</span>
        </Button>
      </div>
        </div>
   </section>
  )
}

export default BiblioInPic