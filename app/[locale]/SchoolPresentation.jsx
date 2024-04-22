"use client";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const SchoolPresentation = () => {
  const t = useTranslations(["Landing"]);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <section className="bg-[#050E1C] text-white py-20">
      <div className="container flex items-center flex-col md:justify-between md:flex-row md:gap-20">
        <div className="md:max-w-[40%]">
          <div className="bg-crayola h-16 w-[2px] mb-8"></div>
          <h3 className="text-crayola font-bold text-xl">
            {t("presentation.beforeTitle")}
          </h3>
          <h2 className={cn("text-2xl font-bold my-4", sourceSerif.className)}>
            {t("presentation.title")}
          </h2>
          <p>{t("presentation.description")}</p>
          <div className="flex gap-x-8 gap-y-4 mt-8 flex-wrap">
            <Button className="flex-1 min-w-48">
              <span>{t("presentation.visit")}</span>
            </Button>
            <Button className="flex-1 min-w-48 bg-none border border-white">
              <span>{t("presentation.virtualVisit")}</span>
            </Button>
          </div>
        </div>
        <div className="flex-1  max-w-full md:max-w-[50%] lg:max-w-[40%] mt-10">
          <div className="">
            <Slider
              ref={(ref) => {
                sliderRef = ref;
              }}
              {...{
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }}
            >
              <div>
                <div className="h-52 md:h-72  bg-[url('/presentation.jpg')]  bg-cover bg-center relative border-[5px] border-[#9BC1FB]"></div>
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
            </Slider>
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
    </section>
  );
};

export default SchoolPresentation;
