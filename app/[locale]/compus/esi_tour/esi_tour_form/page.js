import React from 'react'
import { useTranslations } from "next-intl";
import { Source_Serif_4,Poppins } from "next/font/google"



const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const Home = () => {
  const t = useTranslations(["esi_tour_form.main"]);
  return (
    <div className='bg-white'>
        <div className='container py-10'>
          <h1 className={`text-center font-bold text-3xl ${sourceSerif.className}`}>{t("heroSection.title")}</h1>
             <div>
                <form className='flex justify-center md:justify-between gap-7 flex-wrap'>
                   <div className='w-full md:max-w-[40%]'>
                      
                   </div>
                   <div className='w-full md:max-w-[40%]'>

                   </div>
                </form>
             </div>
        </div>
    </div>
  )
}

export default Home