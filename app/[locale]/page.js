import Nav from "@/components/Nav";
import Carousel from "@/components/Carousel";
import { useTranslations } from "next-intl";
import Event from "@/components/Event";
import New from "@/components/New";
import './globals.css'
import Image from "next/image";
import Partners from "@/components/Partners";
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

export const PartnerLg = ({image}) => {
   return(
      <div className="relative w-[14rem] max-w-[16rem] h-[90%]">
        <Image src={image} alt="/" fill={true} className="w-full h-full" objectFit="cover"/>
      </div>
   )
}

export const PartnerSm = ({image}) =>{
  return(
    <div className="relative w-[6rem] sm:w-[8rem] md:w-[10rem] max-w-[10rem] h-[8rem]">
        <Image src={image} alt="/" fill={true} className="w-full h-full" objectFit="contain"/>
      </div>
  )
}






export default function Home() {
  const t = useTranslations(["Landing"]);
  //const data = await getData()
  return (
    <div>
      <Nav />
      <main>
        <Carousel>
          <div className="relative bg-[url('/hero.jpg')] h-screen bg-cover bg-center">
            <div className="bg-darkblue/60 absolute top-0 left-0 w-full h-full " />
            <h1 className="text-white ">
              Ecole nationale supérieure d'informatique
            </h1>
          </div>
          <div className="bg-[url('/hero.jpg')] h-screen bg-cover bg-center">
            <div className="bg-darkblue/60 h-full" />
          </div>
        </Carousel>

        <section className='container flex flex-col py-10'>
              <div className='w-full flex items-center justify-between'>
                 <h1 className={`text-2xl sm:text-3xl font-bold pb-10 md:pb-0 ${inter.className}`}>{t("events.title")}</h1>
                 <button className='hidden md:flex px-16 py-4 bg-honolulu text-white'>{t("events.allEvents")}</button>
              </div>
              <hr className="hidden md:flex mb-10 mt-7 text-black font-bold text-xl"/>
              <div className='w-full flex flex-col items-start md:flex-row md:items-center justify-between'>
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
                    <h1 className='text-2xl sm:text-3xl font-bold'>{t("Specialities.title")}</h1>
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
            <div className="absolute"/>
            <div/>
        </section>
        <section className="w-full flex flex-col py-10">
                <div className='w-full container flex items-center justify-between pb-10'>
                    <h1 className='text-2xl sm:text-3xl font-bold'>{t("partners.title")}</h1>
                </div>
                <Partners>
                  <PartnerSm image='/LogoHome.png'/>
                  <PartnerSm image='/LogoHome.png'/>
                  <PartnerSm image='/LogoHome.png'/>
                  <PartnerSm image='/LogoHome.png'/>
                </Partners>
                <div className="relative h-[10rem] container py-4 hidden lg:flex items-center justify-between">
                    <PartnerLg image='/LMCS-11.svg'/>
                    <PartnerLg image='/LMCS-11.svg'/>
                    <PartnerLg image='/LMCS-11.svg'/>
                    <PartnerLg image='/LMCS-11.svg'/>
                </div>
        </section>
      </main>
    </div>
  );
}
