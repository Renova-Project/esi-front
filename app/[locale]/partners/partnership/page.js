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


export default async function Home() {
  const t = await getTranslations("Partners.partnership");
  const n = await getTranslations("Partners"); 
  return (
    <div>
         
         {/* Mobile Nav */}

        <div className='flex items-center lg:hidden'>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold border-white border-r-2'>
            <Link href={''}>{n("nav.recruitment.recruitmentSm")}</Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold'>
            <Link href={''}>{n("nav.formation.formationSm")}</Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 text-[#0061B1] text-sm md:text-base font-semibold'>
            <Link href={''}>{n("nav.partnership.partnershipSm")}</Link>
           </div>
        </div>

        {/* Desktop Nav */}

        <div className='hidden lg:flex items-center'>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white border-white border-r-[1px]'>
                <Link className='flex items-center gap-3 text-sm md:text-base font-semibold' href={''}>
                  <p>{n("nav.recruitment.recruitmentLg")}</p>
                <span className='rounded-full p-1 text-white border-[1px] bg-[#5F9EFF]/30'>
                  <ChevronRightIcon className='w-5 h-5'/>
                </span>
                </Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold'>
                <Link className='flex items-center gap-3 text-sm md:text-base' href={''}>
                  <p>{n("nav.formation.formationLg")}</p>
                  <span className='rounded-full p-1 text-white border-[1px] bg-[#5F9EFF]/30'>
                  <ChevronRightIcon className='w-5 h-5'/>
                </span>
                </Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 font-semibold text-[#0061B1]'>
                <Link className='flex items-center gap-3 text-sm md:text-base' href={''}>
                  <p>{n("nav.partnership.partnershipLg")}</p>
                <span className='rounded-full p-1 text-[#0061B1] border-[1px] border-[#0061B1]'>
                  <ChevronRightIcon className='w-5 h-5'/>
                </span>
                </Link>
           </div>
        </div>

        {/* Form */}
        <div className='container pt-6 pb-10'>
             <div className='text-center'>
                <h1 className={`text-[#0061B1] text-xl lg:text-2xl font-bold ${inter.className}`}>{t("title")}</h1>
             </div>
             <div className='flex justify-between items-center gap-3 flex-wrap'>
                <div className='max-w-[25rem]'>
                    <div className='flex items-center gap-2 py-4 font-bold'>
                        <span className='flex items-center justify-center text-lg w-8 h-8 rounded-full font-bold p-4 text-[#0061B1] border-[2px] border-[#0061B1]'>1</span>
                        <h1>{t("organisationInfos.title")}</h1>
                    </div>
                    <p className='text-xs pb-6'>{t("organisationInfos.text")}</p>
                    <form className='flex flex-col gap-6'>
                        <input 
                          placeholder={t("organisationInfos.name")} 
                          type='text'
                          className='w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none'
                        />
                        <select  
                          type='text'
                          className='w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none'
                          >
                            <option value={t("organisationInfos.type")} disabled selected hidden>{t("organisationInfos.type")}</option>
                            <option value="proposition1">Proposition 1</option>
                            <option value="proposition2">Proposition 2</option>                          
                        </select>
                        <select  
                          type='text'
                          className='w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none'
                          >
                            <option value={t("organisationInfos.type")} disabled selected hidden>{t("organisationInfos.type")}</option>
                            <option value="proposition1">Proposition 1</option>
                            <option value="proposition2">Proposition 2</option>                          
                        </select>
                    </form>
                </div>
                <div className='max-w-[25rem]'>
                    <div className='flex items-center gap-2 py-4 font-bold'>
                        <span className='flex items-center justify-center text-lg w-8 h-8 rounded-full font-bold p-4 text-[#0061B1] border-[2px] border-[#0061B1]'>2</span>
                        <h1>{t("organisationInfos.title")}</h1>
                    </div>
                    <p className='text-xs pb-6'>{t("organisationInfos.text")}</p>
                    <form className='flex flex-col gap-6'>
                        <input 
                          placeholder={t("organisationInfos.name")} 
                          type='text'
                          className='w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none'
                        />
                        <select  
                          type='text'
                          className='w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none'
                          >
                            <option value={t("organisationInfos.type")} disabled selected hidden>{t("organisationInfos.type")}</option>
                            <option value="proposition1">Proposition 1</option>
                            <option value="proposition2">Proposition 2</option>                          
                        </select>
                        <select  
                          type='text'
                          className='w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none'
                          >
                            <option value={t("organisationInfos.type")} disabled selected hidden>{t("organisationInfos.type")}</option>
                            <option value="proposition1">Proposition 1</option>
                            <option value="proposition2">Proposition 2</option>                          
                        </select>
                    </form>
                </div>
                <div className='max-w-[25rem]'>
                    <div className='flex items-center gap-2 py-4 font-bold'>
                        <span className='flex items-center justify-center text-lg w-8 h-8 rounded-full font-bold p-4 text-[#0061B1] border-[2px] border-[#0061B1]'>3</span>
                        <h1>{t("organisationInfos.title")}</h1>
                    </div>
                    <p className='text-xs pb-6'>{t("organisationInfos.text")}</p>
                    <form className='flex flex-col gap-6'>
                        <input 
                          placeholder={t("organisationInfos.name")} 
                          type='text'
                          className='w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none'
                        />
                        <select  
                          type='text'
                          className='w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none'
                          >
                            <option value={t("organisationInfos.type")} disabled selected hidden>{t("organisationInfos.type")}</option>
                            <option value="proposition1">Proposition 1</option>
                            <option value="proposition2">Proposition 2</option>                          
                        </select>
                        <select  
                          type='text'
                          className='w-full text-[#555555] bg-[#EAEAEA] p-2 text-sm focus:outline-none'
                          >
                            <option value={t("organisationInfos.type")} disabled selected hidden>{t("organisationInfos.type")}</option>
                            <option value="proposition1">Proposition 1</option>
                            <option value="proposition2">Proposition 2</option>                          
                        </select>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

