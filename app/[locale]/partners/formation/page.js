import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { getTranslations } from "next-intl/server";
import { Donegal_One,Source_Serif_4,Work_Sans } from "next/font/google";
import Button from '@/components/Button';
import { ChevronRightIcon} from '@heroicons/react/20/solid';
import Formations from './Formations';





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
  const t1 = await getTranslations("Partners");
  const t2 = await getTranslations("Partners.formation");
  
  return (
    <div>
         
         {/* Mobile Nav */}

        <div className='flex items-center lg:hidden'>
           <div className='w-1/3 flex justify-center py-4 text-white bg-honolulu text-sm md:text-base font-semibold'>
            <Link href={''}>{t1("nav.recruitment.recruitmentSm")}</Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 text-honolulu bg-white text-sm md:text-base font-semibold'>
            <Link href={''}>{t1("nav.formation.formationSm")}</Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold'>
            <Link href={''}>{t1("nav.partnership.partnershipSm")}</Link>
           </div>
        </div>

        {/* Desktop Nav */}

        <div className='hidden lg:flex items-center'>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white'>
                <Link className='flex items-center gap-3 text-sm md:text-base font-semibold' href={''}>
                  <p>{t1("nav.recruitment.recruitmentLg")}</p>
                  <span className='rounded-full p-1 text-white border-[1px] bg-[#5F9EFF]/30'>
                  <ChevronRightIcon className='w-5 h-5'/>
                </span>
                </Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 text-[#0061B1] text-sm md:text-base font-semibold border-white border-r-[1px]'>
                <Link className='flex items-center gap-3 text-sm md:text-base' href={''}>
                  <p>{t1("nav.formation.formationLg")}</p>
                  <span className='rounded-full p-1 text-[#0061B1] border-[1px] border-[#0061B1]'>
                  <ChevronRightIcon className='w-5 h-5'/>
                </span>
                </Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold'>
                <Link className='flex items-center gap-3 text-sm md:text-base' href={''}>
                  <p>{t1("nav.partnership.partnershipLg")}</p>
                <span className='rounded-full p-1 text-white border-[1px] bg-[#5F9EFF]/30'>
                  <ChevronRightIcon className='w-5 h-5'/>
                </span>
                </Link>
           </div>
        </div>
        {/* Hero Section */}
        <div className="relative bg-[url('/bg2.jpg')] h-heroPartnersMobile lg:h-heroPartners bg-cover bg-center flex items-center">
            <div className='relative container h-full flex flex-col justify-around'>
                <div className='flex justify-center'>
                  <p className={`text-white text-3xl sm:text-4xl md:text-5xl font-semibold lg:font-normal ${donegalOne.className}`}>
                      {t2("heroSection.title")}
                  </p>
                </div>
                <div className='flex justify-center lg:justify-end'>
                  <div className='bg-[#273E5A]/60 text-white border-[#477788] border-[1px] pl-3 pr-5 lg:pr-10 pt-8 pb-6 max-w-[35rem]'>
                      <p className='font-semibold mb-2 md:text-lg lg:text-2xl'>{t2("heroSection.prompt.title")}</p>
                      <p className='text-[12px] mb-4'>{t2("heroSection.prompt.text").slice(200)}</p>
                      <div className='flex justify-center lg:justify-end'>
                          <Button className="bg-gradient-to-r from-btnGradientStart via-btnGradientStart via-30% to-[#2e6dc6] font-normal px-3 py-4 text-sm">
                              <span>{t2("heroSection.prompt.button")}</span>
                          </Button>
                      </div>
                  </div>
                </div>
            </div>
            <Image src={'/points.svg'} alt='/' width={200} height={180} className='absolute left-0 bottom-[-100px] z-10 hidden lg:block'/>
        </div>

        {/* Former vos collaborateurs Section */}
        <div className='bg-[#f8f8f8] relative'>
            <div className='container py-16'>
                <div className='lg:text-center lg:px-24'>
                    <h1 className={`text-xl lg:text-4xl font-extrabold ${inter.className}`}>{t2("become.title")}</h1>
                    <p className='text-[#5D5D5D] py-6 lg:text-lg'>{t2("become.text")}</p>
                </div>
                <div className='flex justify-center'>
                  {/* we must add icons in the places of h1 tags */}
                    <div className='max-w-[35rem] flex flex-col gap-6'>
                        <div className='w-full flex items-center gap-6 p-5 bg-[#2C6DC5] text-white text-sm lg:text-base font-bold'>
                            <Image src={'/Group.svg'} alt='/' width={30} height={30}/>
                            <p>{t2("become.certification.first")}</p>
                        </div>
                        <div className='w-full flex items-center gap-6 p-5 bg-[#2C6DC5] text-white text-sm lg:text-base font-bold'>
                            <Image src={'/mdi_email-certified-outline.svg'} alt='/' width={30} height={30}/>
                            <p>{t2("become.certification.second")}</p>
                        </div>
                        <div className='w-full flex items-center gap-6 p-5 bg-white text-[#0061B1] text-sm lg:text-base border-[1px] border-[#2C6DC5] font-bold'>
                            <Image src={'/Vector.svg'} alt='/' width={30} height={30}/>
                            <p>{t2("become.certification.third")}</p>
                        </div>
                    </div>
                </div>
                <div className='text-center pt-10'>
                    <Button className='bg-gradient-to-r from-btnGradientStart via-btnGradientStart via-70% to-[#2e6dc6] font-normal px-8 py-3 text-sm'>
                        <span>{t2("become.linkToSigrex")}</span>
                    </Button>
                </div>
            </div>
              <div className='h-32 lg:h-48 w-7 lg:w-12 absolute top-[-3rem] lg:top-[-1.5rem] right-0 bg-[#2C6DC5] z-10'/>
          </div>

          {/* Formations disponibles */}

          <div className='relative'>
            <div className='bg-darkblue'>
              <div className='container pt-10 pb-24'>
                <div className='text-white lg:text-center lg:px-24 pb-16'>
                    <h1 className={`text-xl lg:text-4xl font-extrabold ${inter.className}`}>{t2("formations.title")}</h1>
                </div>
                {/* The responsive of the slider number of items by each screen */}
                <Formations/>
                <div className='text-center py-8'>
                    <Button className='bg-gradient-to-r from-btnGradientStart via-btnGradientStart via-30% to-[#2e6dc6] font-normal px-8 py-4'>
                        <span>{t2("formations.seeMore")}</span>
                    </Button>
                </div>
              </div>
              <Image
                src="/gradient-blue.svg"
                className="absolute left-0 bottom-0 lg:hidden"
                width={200}
                height={170}
                alt="" />

              <Image
                src="/Gradient_bleu.svg"
                className="absolute left-0 top-0 hidden lg:block rotate-180"
                width={120}
                height={170}
                alt="" />
          </div>
          <div className='relative z-0 h-4 bg-white'/>
          <div className='relative z-0 h-3 lg:h-6 bg-darkblue'/>
          <div className='absolute w-[20%] h-12 lg:h-24 bottom-0 right-0 bg-[#2C6DC5] z-10'/>
          <Image src={'/points_wh.svg'} alt='/' width={150} height={150} className='absolute right-0 top-0 z-10 hidden lg:block'/>
        </div>
    </div>
  )
}

