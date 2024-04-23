"use client";
import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import New from "@/components/New";
import Carousel from "@/components/Carousel";
import { Source_Serif_4 } from "next/font/google";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Button from "@/components/Button";

const inter = Source_Serif_4({
  subsets: ["latin"],
});

const News = ({ news }) => {
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
      <div className="w-full flex items-center justify-between pb-10">
        <h1 className={`text-2xl sm:text-3xl font-bold ${inter.className}`}>
          {t("Actualities.title")}
        </h1>
      </div>
      <div className="">
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
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
            ],
          }}
        >
          {news
            .concat(news)
            .concat(news)
            .concat(news)
            .map((nw) => (
              <New
                key={nw.id}
                image={nw.image && "/LMCS-11.svg"}
                description={nw.news_name}
              />
            ))}
        </Carousel>
      </div>

      <div className="py-4 md:py-10 flex items-center justify-between">
        <Button >
          {t("a_la_une.allActualities")}
        </Button>
        <div className="hidden lg:flex  gap-2 mt-4">
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
    </section>
  );
};

export default News;
