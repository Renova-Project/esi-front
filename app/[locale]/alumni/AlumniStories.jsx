"use client";
import React,{useRef} from 'react'
import Carousel from "@/components/Carousel";
import { Source_Serif_4 } from "next/font/google"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@/components/Button';

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });


export const Story = ({image,date,title,description}) => {
    return(
        <div className="max-w-[20rem] bg-transparent">
            <img src={image} alt="/" className='w-full h-52'/>
            <div className='text-white px-2 pb-2'>
                <p className="text-sm pt-2">{date}</p>
                <p className="font-bold py-2">{title}</p>
                <p className={`text-sm ${sourceSerif.className}`}>{description}</p>
            </div>
        </div>
    )}

export const AlumniStories = () => {
    const t = useTranslations(["alumni"]);
    let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
  return (
    <div className='bg-darkblue'>
        <div className='container py-10'>
            <h1 className={`text-center text-4xl text-white mb-8 ${sourceSerif.className}`}>{t("alumniStories.title")}</h1>
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
                        centerPadding: "50px",
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
                        <Story image={'/alumni/story1.jpg'} date={'Publié le 03 Mars 2024'} title={'From Campus to Code: Alumni Spotlight on Tech Innovator'} description={"Découvrez l'inspirante trajectoire d'un ancien étudiant del’ESI qui a transformé son parcours académique en une carrière  florissante dans le domaine...."}/>
                        <Story image={'/alumni/story2.jpg'} date={'Publié le 03 Mars 2024'} title={'Entrepreneurial Ventures: IT Alumni Shaping the Startup Landscape'} description={"Rencontrez les diplômés de l’ESI qui ont embrassé  l'entrepreneuriat dans le secteur informatique, partageant..."}/>
                        <Story image={'/alumni/story3.jpg'} date={'Publié le 03 Mars 2024'} title={'From Campus to Code: Alumni Spotlight on Tech Innovator'} description={"Explorez les réalisations exceptionnelles de nos anciens étudiants qui  ont tracé la voie dans le domaine de l'intelligence artificielle,  mettant en lumière ...."}/>  
                </Carousel>
                <button
                        onClick={previous}
                        className="absolute left-1 top-1/2 -translate-y-1/2 bg-[#203960] border border-[#f8f8f8] p-1 rounded-full text-white focus:outline-none"
                    >
                        <ChevronLeftIcon className="w-7 h-7" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#203960] border border-[#f8f8f8] p-1 rounded-full text-white focus:outline-none"
                    >
                        <ChevronRightIcon className="w-7 h-7 " />
                    </button>
            </div>
            <div className='pt-10 flex justify-center'>
                <Button className={''}>
                    <span>{t("alumniStories.submit")}</span>
                </Button>
            </div>
        </div>
    </div> 
  )
}        