import Nav from "@/components/Nav";
import Carousel from "@/components/Carousel";
import { useTranslations } from "next-intl";
import { Donegal_One } from "next/font/google";

const donegalOne = Donegal_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const t = useTranslations(["Landing"]);

  return (
    <div>
      <Nav />
      <main>
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
      </main>
    </div>
  );
}
