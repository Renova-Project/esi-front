"use client";

import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { useTranslations } from "next-intl";
import { Donegal_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const donegalOne = Donegal_One({
  subsets: ["latin"],
  weight: "400",
});

const HeroSection = ({ sliderContent }) => {
  const t = useTranslations(["Landing"]);

  return (
    <section>
      <Carousel
        settings={{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                width: "fit-content",
              }}
            >
              <ul className="lg:hidden" style={{ margin: "0px" }}>
                {dots}
              </ul>
            </div>
          ),
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
      >
        <div>
          <div className="relative h-heroSectionMobile lg:h-heroSection bg-cover bg-center flex justify-center items-center ">
            <Image
              src="/hero.jpg"
              className="w-full h-full left-0 top-0 object-cover"
              fill
              alt="Slider image"
            />
            <div className="bg-gradient-to-b from-heroGradientStart/75 to-heroGradientEnd/60 absolute top-0 left-0 w-full h-full" />
            <div className="relative text-white container lg:text-center">
              <p className="text-crayola text-xl font-bold lg:text-4xl lg:font-normal lg:text-white">
                {t("hero.welcome")}
              </p>
              <div className="flex justify-center">
                <span className="hidden lg:block my-5 h-[64px] w-[2.5px] bg-white"></span>
              </div>
              <h1 className={`text-2xl lg:text-6xl ${donegalOne.className}`}>
                {t("hero.title")}
              </h1>
              <div className="flex justify-center">
                <span className="hidden lg:block my-5 h-[64px] w-[2.5px] bg-white"></span>
              </div>
              <p className="hidden font-medium text-3xl lg:block">
                {t("hero.subtitle")}
              </p>
            </div>
          </div>
        </div>
        {sliderContent.map((slide) => (
          <div
            key={slide.id}
            className={` h-heroSectionMobile lg:h-heroSection  bg-cover bg-center relative`}
          >
            <Image
              src={slide.slider_image}
              className="w-full h-full left-0 top-0 object-cover"
              fill
              alt="Slider image"
            />
            <div className="bg-gradient-to-b from-heroGradientStart/75 to-heroGradientEnd/60 absolute top-0 left-0 w-full h-full" />
            <div className="relative container h-full flex items-end pb-8">
              <div className="lg:bg-[rgba(39,62,90,0.6)] lg:py-14 lg:px-7 lg:w-[625px] lg:border lg:border-[rgb(195,193,251,0.5)] lg:backdrop-blur-[10px]">
                <p className="text-white font-medium text-lg mb-2">
                  {slide.slider_description}
                </p>
                <a href={slide.slider_link} target="_blank">
                  <Button>{slide.slider_action_name}</Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
