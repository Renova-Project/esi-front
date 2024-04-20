import Nav from "@/components/Nav";
import Carousel from "@/components/Carousel";
import { useTranslations } from "next-intl";
import { Donegal_One, Source_Serif_4 } from "next/font/google";

const donegalOne = Donegal_One({
  subsets: ["latin"],
  weight: "400",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

export default function Home() {
  const t = useTranslations(["Landing"]);

  return (
    <div>
      <Nav />
      {/* HERO SECTION */}
      <section>
        <Carousel>
          <div>
            <div className="relative bg-[url('/hero.jpg')] h-heroSectionMobile lg:h-heroSection bg-cover bg-center flex justify-center items-center ">
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
          <div className="bg-[url('/hero.jpg')] h-heroSectionMobile lg:h-heroSection  bg-cover bg-center">
            <div className="bg-darkblue/60 h-full" />
          </div>
        </Carousel>
      </section>
      {/* NUMBERS SECTION */}
      <section className="bg-sectionBgGray">
        <div className="container py-8 lg:py-12">
          <h2
            className={`text-3xl font-semibold mb-6 md:text-center md:text-4xl md:mb-12 ${sourceSerif.className}`}
          >
            {t("inNumbers.title")}
          </h2>
          <div className="flex flex-wrap justify-center md:bg-white md:border-b  md:border-b-honolulu  p-10 gap-12 md:gap-20">
            <div className="max-w-36 flex-1 md:max-w-52 ">
              <div className="flex items-start gap-2">
                <span className="text-4xl font-bold text-honolulu">
                  {t("inNumbers.numbers.0.value")}
                </span>
                <span className="font-bold text-2xl">
                  {t("inNumbers.numbers.0.ordinalIndicator")}
                </span>
              </div>
              <div className="h-[0.39px] bg-black/40 my-1"></div>
              <div>
                <span className="font-bold text-sm">
                  {t("inNumbers.numbers.0.label")}
                </span>
              </div>
            </div>
            <div className="max-w-36 flex-1 md:max-w-52">
              <div className="text-4xl font-bold text-honolulu">
                {t("inNumbers.numbers.1.value")}
              </div>
              <div className="h-[0.39px] bg-black/40 my-1"></div>
              <div>
                <span className="font-bold text-sm">
                  {t("inNumbers.numbers.1.label")}
                </span>
              </div>
            </div>
            <div className="max-w-36 flex-1 md:max-w-52">
              <div className="flex items-start gap-2">
                <span className="text-4xl font-bold text-honolulu">
                  {t("inNumbers.numbers.2.value")}
                </span>
                <span className="font-bold text-2xl">
                  {t("inNumbers.numbers.2.ordinalIndicator")}
                </span>
              </div>
              <div className="h-[0.39px] bg-black/40 my-1"></div>
              <div>
                <span className="font-bold text-sm">
                  {t("inNumbers.numbers.2.label")}
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="bg-darkblue w-56 h-14"></div>
          </div>
          <div className="flex flex-wrap justify-center  gap-12 md:gap-20 md:bg-white md:border-b  md:border-b-honolulu py-10">
            <div className="max-w-36 flex-1 md:max-w-52">
              <div className="text-4xl font-bold text-honolulu">
                {t("inNumbers.numbers.3.value")}
              </div>
              <div className="h-[0.39px] bg-black/40 my-3"></div>
              <div>
                <span className="font-bold text-sm">
                  {t("inNumbers.numbers.3.label")}
                </span>
              </div>
            </div>
            <div className="max-w-36 flex-1 md:max-w-52">
              <div className="text-4xl font-bold text-honolulu">
                {t("inNumbers.numbers.4.value")}
              </div>
              <div className="h-[0.39px] bg-black/40 my-3"></div>
              <div>
                <span className="font-bold text-sm">
                  {t("inNumbers.numbers.4.label")}
                </span>
              </div>
            </div>
            <div className="max-w-36 flex-1 md:max-w-52">
              <div className="text-4xl font-bold text-honolulu">
                {t("inNumbers.numbers.5.value")}
              </div>
              <div className="h-[0.39px] bg-black/40 my-3"></div>
              <div>
                <span className="font-bold text-sm">
                  {t("inNumbers.numbers.5.label")}
                </span>
              </div>
            </div>
            <div className="max-w-36 flex-1 md:max-w-52">
              <div className="text-4xl font-bold text-honolulu">
                {t("inNumbers.numbers.6.value")}
              </div>
              <div className="h-[0.39px] bg-black/40 my-3"></div>
              <div>
                <span className="font-bold text-sm">
                  {t("inNumbers.numbers.6.label")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
