"use client";

import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const offers = [
  {
    id: 1,
    company: "Ornidex",
    type: "PFE",
    title: "Création d'une solution GMAO",
    imgUrl: "/studies/engineering/internship-service/offer1.png",
  },
  {
    id: 2,
    company: "KPMG",
    type: "PFE",
    title: "Création d'une solution GMAO",
    imgUrl: "/studies/engineering/internship-service/offer2.png",
  },
  {
    id: 3,
    company: "Cerist",
    type: "PFE",
    title: "Création d'une solution GMAO",
    imgUrl: "/studies/engineering/internship-service/offer3.png",
  },
];

export default function InternshipOffers() {
  const t = useTranslations(
    "Studies.Engineering.Internship-service.internshipOffers"
  );
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <section className="bg-darkblue relative internshipOffers">
      <Image
        src="/gradient-blue.svg"
        className="absolute right-0 top-0 rotate-180"
        width={301}
        height={326}
        alt=""
      />
      <div className="container py-10 lg:py-20">
        <h2
          className={cn(
            "font-bold text-2xl text-white mb-8 lg:text-3xl lg:text-center lg:mb-12 relative",
            sourceSerif.className
          )}
        >
          {t("title")}
        </h2>
        <Carousel
          refAssignment={(ref) => {
            sliderRef = ref;
          }}
          settings={{
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            dots: false,
            arrows: false,
          }}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
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
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {offers.concat(offers).map((offer) => (
            <div key={offer.title} className="bg-white">
              <Image
                className="object-cover w-full h-40 lg:h-52"
                src={offer.imgUrl}
                width={300}
                height={200}
                alt=""
              />
              <div className="p-4">
                <div className="flex justify-between">
                  <div className="font-semibold">{offer.company}</div>
                  <div className="text-crayola font-semibold">{offer.type}</div>
                </div>
                <p>{offer.title}</p>
                <Link
                  href={`/studies/engineering/internship-service/internships/${offer.id}`}
                >
                  <Button className="py-2 px-4 text-sm block mt-4 ml-auto">
                    Voir plus
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="flex justify-center gap-4 mt-4">
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
}
