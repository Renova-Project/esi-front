import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import InternshipOffers from "./InternshipOffers";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const HeroSection = () => {
  const t = useTranslations("Studies.Engineering.Internship-service.hero");

  return (
    <section
      className={cn(
        sourceSerif.className,
        "relative bg-darkblue pb-10 bg-cover bg-center flex lg:pb-20"
      )}
    >
      <Image
        src="/gradient-blue.svg"
        className="absolute right-0 top-0 rotate-180"
        width={301}
        height={326}
        alt=""
      />
      <div className="container h-full flex flex-col">
        <div className="flex items-start gap-4 mt-16 mb-6">
          <button className="hidden md:inline-block">
            <ChevronLeftIcon className="text-white w-14 h-14" />
          </button>
          <h1 className="font-bold text-white text-2xl lg:text-5xl max-w-2xl">
            {t("title.0")}
            <span className="text-crayola"> {t("title.1")}</span>
          </h1>
        </div>
        <div className="relative flex-1 lg:p-10">
          <Image
            className="!h-[calc(100%+8rem)] hidden left-0   object-cover lg:block"
            fill
            src="/studies/engineering/internship-service/hero.png"
            alt=""
          />
          <div className="relative text-white  lg:max-w-3xl lg:bg-[rgba(39,62,90,0.6)] lg:py-14 lg:px-7 lg:border lg:border-[rgb(195,193,251,0.5)] lg:backdrop-blur-[10px]">
            <h3 className="text-xl mb-2 font-semibold">{t("info.title")}</h3>
            <p className="mb-4">{t("info.description")}</p>
            <Button>{t("info.actionBtn")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const InternshipTypesSection = () => {
  const t = useTranslations(
    "Studies.Engineering.Internship-service.internshipTypes"
  );

  return (
    <section className="py-10 bg-grayishBg  lg:pt-24 lg:pb-20">
      <div className="container">
        <h2
          className={cn(
            "font-bold text-2xl mb-2 lg:text-3xl lg:text-center lg:mb-4",
            sourceSerif.className
          )}
        >
          <span className="text-crayola"> {t("title.0")} </span>
          {t("title.1")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-8  mt-10">
          {Array.from({
            length: 3,
          }).map((_, index) => (
            <div key={t(`types.${index}.name`)} className="relative">
              <span className="absolute top-0 right-0 bg-crayola text-white py-1 px-2">
                {t(`types.${index}.duration`)}
              </span>
              <Image
                className="object-cover w-full h-40 lg:h-52 mb-4"
                src={`/studies/engineering/internship-service/type${
                  index + 1
                }.${index > 1 ? "jpg" : "png"}`}
                width={300}
                height={200}
                alt=""
              />
              <h3 className="font-bold text-xl mb-2 flex justify-between">
                {t(`types.${index}.name`)}
                <span> {t(`types.${index}.year`)}</span>
              </h3>
              <p>{t(`types.${index}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function page() {
  return (
    <div>
      <HeroSection />
      <InternshipTypesSection />
      <InternshipOffers />
    </div>
  );
}

export default page;
