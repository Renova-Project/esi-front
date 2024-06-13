import Nav from "@/components/Nav";
import { Donegal_One, Source_Serif_4 } from "next/font/google";
import NumbersSection from "./NumbersSection";
import HeroSection from "./HeroSection";
import SchoolPresentation from "./SchoolPresentation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { getTranslations } from "next-intl/server";
import { API_URL } from "@/lib/constants";
import Button from "@/components/Button";
import Event from "@/components/Event";
import HeadlineNews from "./HeadlineNews";
import News from "./News";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

export const Speciality = ({ abrevihation, name, image }) => {
  return (
    <div className="flex gap-3 bg-[#081F3A] shadow-md md:hover:scale-105">
      <div className="h-full w-[30%] relative">
        <Image
          src={image}
          alt="/"
          fill={true}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 py-8 flex-1">
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

const getLandingData = async () => {
  try {
    const res = await fetch(API_URL + "/home");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default async function Home() {
  const t = await getTranslations("Landing");
  const data = await getLandingData();
  return (
    <div>
      <Nav />
      <HeroSection sliderContent={data?.sliders || []} />
      <NumbersSection />
      <SchoolPresentation />
      <section className="container py-10 ">
        <div className="flex items-center justify-between mb-10 lg:mb-0">
          <h1
            className={`text-2xl sm:text-3xl font-bold ${sourceSerif.className}`}
          >
            {t("events.title")}
          </h1>
          <Button className="hidden md:inline-block">
            {t("events.allEvents")}
          </Button>
        </div>
        <hr className="hidden lg:flex mt-6 mb-10 text-black font-bold text-xl" />
        <div className="flex justify-between gap-3 flex-wrap  lg:mt-0">
          {data?.events
            .concat([
              {
                id: 4,
                event_name: "jkdlmsqkfkjqkmlfkjq jkldskjfsssssssssssss",
                start_date: "2024-04-03T06:00:00Z",
                end_date: "2024-04-11T17:49:05Z",
              },
            ])
            .map((ev) => (
              <Event
                key={ev.id}
                startDate={ev.start_date}
                title={ev.event_name}
              />
            ))}
        </div>
        <div className="pt-4">
          <Button className="md:hidden mt-10">{t("events.allEvents")}</Button>
        </div>
      </section>
      <HeadlineNews news={data?.headline_news || []} />
      <News news={data?.news || []} />
      <section className="bg-darkblue relative overflow-hidden">
        <div className="container py-10 text-white">
          <div className="w-full flex items-center justify-between pb-10">
            <h1
              className={`text-2xl sm:text-3xl font-bold ${sourceSerif.className}`}
            >
              {t("Specialities.title")}
            </h1>
            <button className="hidden lg:flex px-10 py-4 bg-honolulu text-white relative z-10">
              {t("Specialities.details")}
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <Speciality
              abrevihation={t("Specialities.speciality.SID.abrevihation")}
              name={t("Specialities.speciality.SID.name")}
              image="/SID.jpg"
            />
            <Speciality
              abrevihation={t("Specialities.speciality.SIQ.abrevihation")}
              name={t("Specialities.speciality.SIQ.name")}
              image="/SIQ.jpg"
            />
            <Speciality
              abrevihation={t("Specialities.speciality.SIT.abrevihation")}
              name={t("Specialities.speciality.SIT.name")}
              image="/SIT.jpg"
            />
            <Speciality
              abrevihation={t("Specialities.speciality.SIL.abrevihation")}
              name={t("Specialities.speciality.SIL.name")}
              image="/SIL.jpg"
            />
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
          className="absolute left-0 bottom-0"
          width={301}
          height={326}
          alt=""
        />
      </section>
      <section className="py-10 bg-grayishBg">
        <div className="w-full container flex items-center justify-between pb-10">
          <h1
            className={`text-2xl sm:text-3xl font-bold ${sourceSerif.className}`}
          >
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
