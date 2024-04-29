import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { getTranslations } from "next-intl/server";
import { Donegal_One,Source_Serif_4,Work_Sans } from "next/font/google";
import Button from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/20/solid';



const donegalOne = Donegal_One({
  subsets: ["latin"],
  weight: "400",
});

const inter = Source_Serif_4({
  subsets: ["latin"]
})

const workSans = Work_Sans({
  subsets: ["latin"]
})

export const Rec = () =>{
  return(
    <div className="md:max-w[26rem] lg:max-w-[30rem] xl:max-w-[38rem] bg-white">
      <div className="w-full h-auto flex items-center flex-1 rounded-lg border-2">
        <div className="relative w-[40%] h-full border-2">
          <Image src={'/LMCS-11.svg'} alt='/' fill={true} className='h-full w-full' objectFit='cover'/>
        </div>
        <div className='h-full py-6 px-4 w-[60%]'>
          <p className='text-[#0061B1] mb-4 text-lg lg:text-xl font-bold'>Rencontres directes avec les futurs diplômés</p>
          {/* we must slice the text in the small screens */}
          <p className={`text-[#212124] ${workSans.className}`}>Organisez des journées de recrutement, des présentations d’entreprise, et des ateliers spécifiques sur le campus pour rencontrer les étudiants et leur présenter les opportunités de carrière...</p>
        </div>
      </div>
    </div>
  )
}

export default async function Home() {
  const t = await getTranslations("Partners.recruitment");
  return (
    <div>
         
         {/* Mobile Nav */}

        <div className='flex items-center lg:hidden'>
           <div className='w-1/3 flex justify-center py-4 text-[#0061B1] text-sm md:text-base font-semibold'>
            <Link href={''}>{t("nav.recruitment.recruitmentSm")}</Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold border-white border-r-2'>
            <Link href={''}>{t("nav.formation.formationSm")}</Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold'>
            <Link href={''}>{t("nav.partnership.partnershipSm")}</Link>
           </div>
        </div>

        {/* Desktop Nav */}

        <div className='hidden lg:flex items-center'>
           <div className='w-1/3 flex justify-center gap-3 py-4 text-[#0061B1] text-sm md:text-base font-semibold'>
                <Link href={''}>{t("nav.recruitment.recruitmentLg")}</Link>
                <span className='w-5 h-5 rounded-full p-3 text-blue-300 border-[1px] border-[#0061B1]'>
                  <ChevronRightIcon/>
                </span>
           </div>
           <div className='w-1/3 flex justify-center gap-3 py-4 bg-honolulu text-white text-sm md:text-base font-semibold border-white border-r-[1px]'>
                <Link href={''}>{t("nav.formation.formationLg")}</Link>
                <span className='w-4 h-4 rounded-full p-3 text-white border-[1px] bg-[#5F9EFF]/30'>
                  <ChevronRightIcon/>
                </span>
           </div>
           <div className='w-1/3 flex justify-center gap-3 py-4 bg-honolulu text-white text-sm md:text-base font-semibold'>
                <Link href={''}>{t("nav.partnership.partnershipLg")}</Link>
                <span className='w-4 h-4 rounded-full p-3 text-white border-[1px] bg-[#5F9EFF]/30'>
                  <ChevronRightIcon/>
                </span>
           </div>
        </div>
        {/* Hero Section */}
        <div className="relative bg-[url('/bg1.jpg')] h-heroPartnersMobile lg:h-heroPartners bg-cover bg-center flex items-center">
            <div className='relative container h-full flex flex-col justify-around'>
                <div className='flex justify-center'>
                  <p className={`text-white text-3xl sm:text-4xl md:text-5xl font-semibold lg:font-normal ${donegalOne.className}`}>
                      {t("heroSection.title")}
                  </p>
                </div>
                <div className='flex justify-center lg:justify-end'>
                  <div className='bg-[#273E5A]/60 text-white border-[#477788] border-[1px] pl-3 pr-5 lg:pr-10 pt-8 pb-6 max-w-[35rem]'>
                      <p className='font-semibold mb-2 md:text-lg lg:text-2xl'>{t("heroSection.prompt.title")}</p>
                      <p className='text-[12px] mb-4'>{t("heroSection.prompt.text").slice(200)}</p>
                      <div className='flex justify-center lg:justify-end'>
                          <Button className="bg-gradient-to-r from-btnGradientStart via-btnGradientStart via-30% to-[#2e6dc6] font-normal px-3 py-4 text-sm">
                              <span>{t("heroSection.prompt.button")}</span>
                          </Button>
                      </div>
                  </div>
                </div>
            </div>
        </div>

        {/* Devenir partenaire Section */}
        <div className='bg-[#f8f8f8] relative'>
             <div className='container py-16'>
                <div className='lg:text-center lg:px-24'>
                    <h1 className={`text-xl lg:text-4xl font-extrabold ${inter.className}`}>{t("become.title")}</h1>
                    <p className='text-[#5D5D5D] py-6 lg:text-lg'>{t("become.text")}</p>
                </div>
                <div className='flex justify-between gap-x-1 gap-y-10 flex-wrap'>
                     <Rec/>
                     <Rec/>
                     <Rec/>
                     <Rec/>
                </div>
              </div>
              <div className='h-32 lg:h-48 w-7 lg:w-12 absolute top-[-3rem] lg:top-[-1.5rem] right-0 bg-[#2C6DC5] z-10'/>
          </div>

          {/* Vérification des Diplômes */}

          <div className='relative bg-darkblue'>
              <div className='pt-10 pb-24'>
                <div className='container text-white lg:text-center lg:px-24 pb-24'>
                    <h1 className={`text-xl lg:text-4xl font-extrabold ${inter.className}`}>{t("checkDiplome.title")}</h1>
                    <p className='py-6 lg:text-lg'>{t("checkDiplome.text")}</p>
                </div>
                <div className='flex lg:justify-around lg:container'>
                    <div className='relative bg-white pt-24 lg:pt-10 pb-5 pl-10 lg:pl-20 pr-5 lg:max-w-[75%]'>
                      <h1 className='font-bold text-xl text-[#201436]'>{t("checkDiplome.orderOnLine.title")}</h1>
                      <div className='lg:mb-5 lg:mt-1 my-2 w-24 lg:w-4 h-[1px] border-2 border-[#2C6DC5]'/>
                      <p className='mb-5 text-sm lg:text-base text-[#292929]'>{t("checkDiplome.orderOnLine.text")}</p>
                      <div className='text-center lg:text-start'>
                        <Button className="bg-gradient-to-r from-btnGradientStart via-btnGradientStart via-70% to-[#2e6dc6] font-normal px-8 py-3 text-sm">
                            <span>{t("checkDiplome.orderOnLine.check")}</span>
                        </Button>
                      </div>
                      <Image src={'/image_p.png'} alt='/' width={150} height={130} className='absolute left-1/2 right-1/2 -translate-x-1/2 lg:-translate-x-0 top-0 lg:top-1/2 lg:bottom-1/2 -translate-y-1/2 lg:left-[-6rem]'/>
                    </div>
                </div>
              </div>
              <div className='absolute w-[20%] h-8 lg:h-16 bottom-[-1rem] lg:bottom-[-2rem] right-0 bg-[#2C6DC5] z-10'/>
              <Image
                src="/gradient-blue.svg"
                className="absolute left-0 bottom-0 lg:hidden"
                width={100}
                height={130}
                alt="" />

              <Image
                src="/Gradient_bleu.svg"
                className="absolute left-0 top-0 hidden lg:block rotate-180"
                width={120}
                height={170}
                alt="" />
          </div>

          {/* Nos Partenaire */}
          <div className='relative bg-[#f8f8f8] z-0'>
              <div className='pt-10 pb-14'>
                <div className='container lg:text-center lg:px-24'>
                    <h1 className={`text-xl lg:text-4xl font-extrabold ${inter.className}`}>{t("partners.title")}</h1>
                    <p className='py-6 lg:text-lg'>{t("partners.text")}</p>
                </div>
                <div className='border-y-4 border-x-0 border-[#2C6DC5] bg-white py-5'>
                   
                </div>
                <div className='text-center pt-10'>
                  <Button className="bg-gradient-to-r from-btnGradientStart via-btnGradientStart via-30% to-[#2e6dc6] font-normal px-8 py-3 text-sm">
                    <span>{t("partners.seeMore")}</span>
                  </Button>
                </div>
              </div>
          </div>
    </div>
  )
}

