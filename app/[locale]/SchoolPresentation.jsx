"use client";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

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
    <section className="bg-[#050E1C] text-white pb-10 md:py-20 relative">
      <Image
        src="/gradient-blue.svg"
        className="absolute right-0 top-0 rotate-180"
        width={301}
        height={326}
        alt=""
      />
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
            <Button className="flex-1 min-w-48 bg-gradient-to-b from-btnGradientStart via-btnGradientStart via-30% to-btnGradientEnd">
              <span>{t("presentation.visit")}</span>
            </Button>
            <Button className="flex-1 min-w-48  bg-transparent border border-white">
              <span>{t("presentation.virtualVisit")}</span>
            </Button>
          </div>
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
                className: "school-presentation-carousel",
              }}
            >
              <div className="h-56 md:h-72  bg-cover bg-center relative border-[5px] solid border-[#9bc1fb]">
                <Image
                  className="top-0 left-0 object-cover"
                  src="/presentation.jpg"
                  fill
                  alt="School"
                />
              </div>
              <div className="h-56 md:h-72  bg-cover bg-center relative border-[5px] solid border-[#9bc1fb]">
                <Image
                  className="top-0 left-0 object-cover"
                  src="/presentation.jpg"
                  fill
                  alt="School"
                />
              </div>
            </Carousel>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={previous}
              className="bg-[#203960] border border-[#f8f8f8] p-1 rounded-full text-white relative focus:outline-none"
            >
              <ChevronLeftIcon className="w-7 h-7" />
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
