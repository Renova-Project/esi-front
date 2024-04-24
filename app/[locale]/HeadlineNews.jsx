"use client";
import React, { useRef } from "react";
import New from "@/components/New";
import Carousel from "@/components/Carousel";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Button from "@/components/Button";

const inter = Source_Serif_4({
  subsets: ["latin"],
});
const HeadlineNews = ({ news }) => {
  const t = useTranslations(["Landing"]);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <section className="bg-darkblue">
      <div className="container flex flex-col py-10 text-white">
        <div className="w-full flex items-center justify-between pb-10">
          <h1 className={`text-2xl sm:text-3xl font-bold ${inter.className}`}>
            {t("a_la_une.title")}
          </h1>
        </div>
        <div className="hidden lg:block">
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
              responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
              ],
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                  },
                },
              ],
            }}
          >
            {news.map((nw) => (
              <New key={nw.id} image={nw.image} description={nw.news_name} />
            ))}
            <New
              image="/LMCS-11.svg"
              description="Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio"
            />
            <New
              image="/LMCS-11.svg"
              description="Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio"
            />
            <New
              image="/LMCS-11.svg"
              description="Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio"
            />
          </Carousel>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4 lg:hidden">
          <New
            image="/LMCS-11.svg"
            description="Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio"
          />
          <New
            image="/LMCS-11.svg"
            description="Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio"
          />
          <New
            image="/LMCS-11.svg"
            description="Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio"
          />
        </div>
        <div className="py-4 md:py-10 flex items-center justify-between">
          <Button className="border-white border-[0.1rem] bg-transparent">
            {t("a_la_une.allActualities")}
          </Button>
          <div className="hidden lg:flex gap-2 mt-4">
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
    </section>
  );
};

export default HeadlineNews;
