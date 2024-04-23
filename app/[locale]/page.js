import Nav from "@/components/Nav";
import { useTranslations } from "next-intl";
import { Donegal_One, Source_Serif_4 } from "next/font/google";
import NumbersSection from "./NumbersSection";
import HeroSection from "./HeroSection";
import SchoolPresentation from "./SchoolPresentation";
import Footer from "@/components/Footer";
import Event from "@/components/Event";
import Image from "next/image";
import { Source_Serif_4 } from "next/font/google";
import HeadlineNews from "./HeadlineNews";
import News from "./News";


const inter =Source_Serif_4({
  subsets: ["latin"],
})

export const Speciality =({abrevihation,name,image})=>{
   return(
    <div className="h-[6.125rem] md:h-[8rem] w-full sm:w-11/12 lg:w-[46%] xl:w-[48%] flex gap-3 bg-[#081F3A] shadow-md md:hover:scale-105">
      <div className="h-full w-[30%] relative">
        <Image src={image} alt="/" fill={true} className="w-full h-full"/>
      </div>
      <div className="h-full w-[70%] flex flex-col justify-center items-start">
        <p className="font-semibold text-lg">{abrevihation}</p>
        <p>{name}</p>
      </div>
    </div>
   )
}

export const Partner = ({image}) => {
   return(
      <div className="relative w-[14rem] max-w-[16rem] h-[6rem]">
        <Image src={image} alt="/" fill={true} className="w-full h-full" objectFit="cover"/>
      </div>
   )
}



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
      <HeroSection />
      <NumbersSection />
      <SchoolPresentation />
      <section className='container flex flex-col py-10'>
              <div className='w-full flex items-center justify-between'>
                 <h1 className={`text-2xl sm:text-3xl font-bold pb-10 md:pb-0 ${inter.className}`}>{t("events.title")}</h1>
                 <button className='hidden md:flex px-16 py-4 bg-honolulu text-white'>{t("events.allEvents")}</button>
              </div>
              <hr className="hidden lg:flex mb-10 mt-7 text-black font-bold text-xl"/>
              <div className='w-full flex flex-col items-start lg:flex-row lg:items-center justify-between'>
                  <Event mounth="MAR" day="22" title="Algerian Doctorat" label="Conference on Computer"/>
                  <Event mounth="MAR" day="22" title="Algerian Doctorat" label="Conference on Computer"/>
                  <Event mounth="MAR" day="22" title="Algerian Doctorat" label="Conference on Computer"/>
              </div>
              <div className="pt-4">
                  <button className='md:hidden flex px-7 sm:px-16 py-4 bg-honolulu text-white'>{t("events.allEvents")}</button>
              </div>
        </section>
        <HeadlineNews/>
        <News/>
        <section className='bg-darkblue relative'>
            <div className="container flex flex-col py-10 text-white"> 
                <div className='w-full flex items-center justify-between pb-10'>
                    <h1 className={`text-2xl sm:text-3xl font-bold ${inter.className}`}>{t("Specialities.title")}</h1>
                    <button className='hidden lg:flex px-10 py-4 bg-honolulu text-white relative z-10'>{t("Specialities.details")}</button>
                </div>
                 <div className='w-full flex flex-col items-start justify-between gap-4 lg:hidden'>
                     <Speciality abrevihation={t("Specialities.speciality.SID.abrevihation")} name={t("Specialities.speciality.SID.name")} image='/SID.png'/>
                     <Speciality abrevihation={t("Specialities.speciality.SIQ.abrevihation")} name={t("Specialities.speciality.SIQ.name")} image='/SIQ.png'/>
                     <Speciality abrevihation={t("Specialities.speciality.SIT.abrevihation")} name={t("Specialities.speciality.SIT.name")} image='/SIT.png'/>
                     <Speciality abrevihation={t("Specialities.speciality.SIL.abrevihation")} name={t("Specialities.speciality.SIL.name")} image='/SIL.png'/>
                </div>
                <div className='w-full hidden lg:flex flex-col items-center justify-center gap-10'>
                  <div className="w-full flex items-center justify-between">
                      <Speciality abrevihation={t("Specialities.speciality.SID.abrevihation")} name={t("Specialities.speciality.SID.name")} image='/SID.png'/>
                      <Speciality abrevihation={t("Specialities.speciality.SIQ.abrevihation")} name={t("Specialities.speciality.SIQ.name")} image='/SIQ.png'/>
                  </div>
                  <div className="w-full flex items-center justify-between">
                      <Speciality abrevihation={t("Specialities.speciality.SIT.abrevihation")} name={t("Specialities.speciality.SIT.name")} image='/SIT.png'/>
                      <Speciality abrevihation={t("Specialities.speciality.SIL.abrevihation")} name={t("Specialities.speciality.SIL.name")} image='/SIL.png'/>
                  </div>
                </div>
                <div className="pt-10 lg:hidden">
                    <button className='flex items-center justify-center px-16 py-4 bg-honolulu text-white'>{t("Specialities.details")}</button>
              </div>
            </div>
              <Image src={'/Gradient_bleu.svg'} alt="/" width={250} height={200} className="hidden lg:flex absolute top-[-12rem] right-0" objectFit="cover"/>
              <Image src={'/Gradient_bleu_1.svg'} alt="/" width={150} height={170} className="hidden lg:flex absolute bottom-0 left-[-3rem]" objectFit="cover"/>
              
        </section>
        <section className="py-10 bg-[#f8f8f8]">
            <div className='w-full container flex items-center justify-between pb-10'>
              <h1 className={`text-2xl sm:text-3xl font-bold ${inter.className}`}>{t("partners.title")}</h1>
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
                  arrows:false
               }}>
                  <Partner image='/LMCS-11.svg' />
                  <Partner image='/LMCS-11.svg' />
                  <Partner image='/LMCS-11.svg' />
               </Carousel>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
}
