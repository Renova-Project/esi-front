import React from 'react'
import Link from 'next/link'
import { getTranslations } from "next-intl/server";
import { Donegal_One,Source_Serif_4,Work_Sans } from "next/font/google";
import { ArrowUpTrayIcon, ChevronRightIcon } from '@heroicons/react/20/solid';


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
    const t1 = await getTranslations("Partners");
    const t2 = await getTranslations("Partners.diplomasVerification"); 
    return (
    <div>
             {/* Mobile Nav */}

        <div className='flex items-center lg:hidden'>
           <div className='w-1/3 flex justify-center py-4 text-[#0061B1] text-sm md:text-base font-semibold'>
            <Link href={''}>{t1("nav.recruitment.recruitmentSm")}</Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold border-white border-r-2'>
            <Link href={''}>{t1("nav.formation.formationSm")}</Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold'>
            <Link href={''}>{t1("nav.partnership.partnershipSm")}</Link>
           </div>
        </div>

        {/* Desktop Nav */}

        <div className='hidden lg:flex items-center'>
           <div className='w-1/3 flex justify-center py-4'>
                <Link className='flex items-center gap-3 text-sm md:text-base text-[#0061B1] font-semibold' href={''}>
                  <p>{t1("nav.recruitment.recruitmentLg")}</p>
                <span className='rounded-full p-1 text-[#0061B1] border-[1px] border-[#0061B1]'>
                  <ChevronRightIcon className='w-5 h-5'/>
                </span>
                </Link>
           </div>
           <div className='w-1/3 flex justify-center py-4 bg-honolulu text-white text-sm md:text-base font-semibold border-white border-r-[1px]'>
                <Link className='flex items-center gap-3 text-sm md:text-base' href={''}>
                  <p>{t1("nav.formation.formationLg")}</p>
                  <span className='rounded-full p-1 text-white border-[1px] bg-[#5F9EFF]/30'>
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
        <div className='container py-10 max-w-[40rem]'>
                <div className='text-center'>
                    <h1 className={`text-[#0061B1] text-lg md:text-2xl pb-4 font-bold ${inter.className}`}>{t2("title")}</h1>
                    <p className='text-darkgrey font-semibold text-lg pb-6'>{t2("text")}</p>
               </div>
               <div className='bg-[#EFEFEF] py-12 text-center'>
                    <p className='text-darkgrey font-semibold'>Drop File Anywhere to Upload </p>
                    <p className='text-darkgrey font-semibold pb-4'>or</p>
                    <div className='flex items-center justify-center'>
                        <input type="file" id="upload-btn" hidden/>
                        <label for="upload-btn" className='cursor-pointer flex items-center gap-3 py-2 px-4 bg-gradient-to-r from-btnGradientStart via-btnGradientStart via-30% to-[#2e6dc6] text-sm text-white font-semibold'>
                          <span>Select file</span>
                          <ArrowUpTrayIcon className='w-6 h-6'/>
                        </label>
                    </div>
                    <p className='text-darkgrey text-xs font-semibold py-4'>Maximum upload file size: 200MB</p>
                    <Link className='text-honolulu text-sm font-bold underline' href={''}>{t2("link")}</Link>
               </div>
               <p className='text-center text-darkgrey font-semibold py-4'>{t2("or")}</p>
               <div className='flex justify-center pb-6'>
                 <Link className='py-4 px-5 text-center font-bold text-[#0061B1] border-[#0061B1] border-[1px]' href={''}>{t2("toInput")}</Link>
               </div>
               <div className='flex justify-center'>
                 <Link className='py-4 px-8 text-white text-sm bg-gradient-to-r from-btnGradientStart via-btnGradientStart via-30% to-[#2e6dc6]' href={''}>{t2("verify")}</Link>
               </div>
        </div>
</div>
      
    )}