import Nav from "@/components/Nav";
import { Donegal_One, Source_Serif_4 } from "next/font/google";
import NumbersSection from "./NumbersSection";
import HeroSection from "./HeroSection";
import SchoolPresentation from "./SchoolPresentation";
import Footer from "@/components/Footer";
import Image from "next/image";
import HeadlineNews from "./HeadlineNews";
import News from "./News";
import Carousel from "@/components/Carousel";
import { getTranslations } from "next-intl/server";
import { API_URL } from "@/lib/constants";
import Button from "@/components/Button";

const inter = Source_Serif_4({
  subsets: ["latin"],
});

export const Speciality = ({ abrevihation, name, image }) => {
  return (
    <div className="h-[6.125rem] md:h-[8rem] w-full sm:w-11/12 lg:w-[46%] xl:w-[48%] flex gap-3 bg-[#081F3A] shadow-md md:hover:scale-105">
      <div className="h-full w-[30%] relative">
        <Image
          src={image}
          alt="/"
          fill={true}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-full w-[70%] flex flex-col justify-center items-start">
        <p className="font-semibold text-lg">{abrevihation}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export const Partner = ({ image }) => {
  return (
    <div className="relative w-[14rem] max-w-[16rem] h-[6rem]">
      <Image
        src={image}
        alt="/"
        fill={true}
        className="w-full h-full"
        objectFit="cover"
      />
    </div>
  );
};

const donegalOne = Donegal_One({
  subsets: ["latin"],
  weight: "400",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const getData = async () => {
  try {
    const res = await fetch(API_URL + "/home");
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

export default async function Home() {
  const t = await getTranslations("Landing");
  const data = await getData();
  return (
    <div>
      <Nav />
      <HeroSection sliderContent={data?.sliders} />
      <NumbersSection />
      <SchoolPresentation />
      <section className="container py-10 ">
        <div className="flex items-center justify-between mb-10 lg:mb-0">
          <h1 className={`text-2xl sm:text-3xl font-bold ${inter.className}`}>
            {t("events.title")}
          </h1>
          <Button className="hidden md:inline-block">
            {t("events.allEvents")}
          </Button>
        </div>
        <hr className="hidden lg:flex mt-6 mb-10 text-black font-bold text-xl" />
        <div className="flex justify-between gap-3 flex-wrap  lg:mt-0">
          {/* {data.events
            .concat(data.events)
            .concat(data.events)
            .map((ev) => (
              <Event
                key={ev.id}
                startDate={ev.start_date}
                title={ev.event_name}
              />
            ))} */}
        </div>
        <div className="pt-4">
          <Button className="md:hidden mt-10">{t("events.allEvents")}</Button>
        </div>
      </section>
      {/* <HeadlineNews news={data.headline_news} /> */}
      {/* <News news={data.news} /> */}
      <section className="bg-darkblue relative overflow-hidden">
        <div className="container flex flex-col py-10 text-white">
          <div className="w-full flex items-center justify-between pb-10">
            <h1 className={`text-2xl sm:text-3xl font-bold ${inter.className}`}>
              {t("Specialities.title")}
            </h1>
            <button className="hidden lg:flex px-10 py-4 bg-honolulu text-white relative z-10">
              {t("Specialities.details")}
            </button>
          </div>
          <div className="w-full flex flex-col items-start justify-between gap-4 lg:hidden">
            <Speciality
              abrevihation={t("Specialities.speciality.SID.abrevihation")}
              name={t("Specialities.speciality.SID.name")}
              image="/SID.png"
            />
            <Speciality
              abrevihation={t("Specialities.speciality.SIQ.abrevihation")}
              name={t("Specialities.speciality.SIQ.name")}
              image="/SIQ.png"
            />
            <Speciality
              abrevihation={t("Specialities.speciality.SIT.abrevihation")}
              name={t("Specialities.speciality.SIT.name")}
              image="/SIT.png"
            />
            <Speciality
              abrevihation={t("Specialities.speciality.SIL.abrevihation")}
              name={t("Specialities.speciality.SIL.name")}
              image="/SIL.png"
            />
          </div>
          <div className="w-full hidden lg:flex flex-col items-center justify-center gap-10">
            <div className="w-full flex items-center justify-between">
              <Speciality
                abrevihation={t("Specialities.speciality.SID.abrevihation")}
                name={t("Specialities.speciality.SID.name")}
                image="/SID.png"
              />
              <Speciality
                abrevihation={t("Specialities.speciality.SIQ.abrevihation")}
                name={t("Specialities.speciality.SIQ.name")}
                image="/SIQ.png"
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <Speciality
                abrevihation={t("Specialities.speciality.SIT.abrevihation")}
                name={t("Specialities.speciality.SIT.name")}
                image="/SIT.png"
              />
              <Speciality
                abrevihation={t("Specialities.speciality.SIL.abrevihation")}
                name={t("Specialities.speciality.SIL.name")}
                image="/SIL.png"
              />
            </div>
          </div>
          <div className="pt-10 lg:hidden">
            <Button>{t("Specialities.details")}</Button>
          </div>
        </div>
        <Image
          src="/gradient-blue.svg"
          className="absolute right-0 top-0 rotate-180"
          width={301}
          height={326}
          alt=""
        />
        <Image
          src="/gradient-blue.svg"
          className="absolute left-0 bottom-0 "
          width={301}
          height={326}
          alt=""
        />
      </section>
      <section className="py-10 bg-[#f8f8f8]">
        <div className="w-full container flex items-center justify-between pb-10">
          <h1 className={`text-2xl sm:text-3xl font-bold ${inter.className}`}>
            {t("partners.title")}
          </h1>
        </div>
        <div className="w-full border-y-2 border-x-0 lg:border-0 border-honolulu bg-white">
          <div className="container min-h-[8rem]">
            <Carousel
              sliderRef={null}
              settings={{
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
              }}
            >
              <Partner image="/LMCS-11.svg" />
              <Partner image="/LMCS-11.svg" />
              <Partner image="/LMCS-11.svg" />
            </Carousel>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
