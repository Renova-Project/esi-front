'use client'

import React,{useState} from 'react'
import { useTranslations } from "next-intl";



export const Diplome = ({number}) => {
    const t = useTranslations(["Partners.manyDiplomas.diploma"]);
   return(
    <div className='w-[22rem] mb-6'>
        <p className='text-honolulu font-semibold pb-3'>
            {t("diploma")}
            <span className='pl-2'>{number}</span>
        </p>
        <form className='flex flex-col gap-3'>
            <input type='text' placeholder={t("diplomaName")} className='w-full text-[#555555] bg-[#EAEAEA] px-2 py-3 text-sm focus:outline-none focus:appearance-none'/>
            <input type='text' placeholder={t("diplomaNumber")} className='w-full text-[#555555] bg-[#EAEAEA] px-2 py-3 text-sm focus:outline-none focus:appearance-none'/>
        </form>
    </div>
   )
}




const Diplomas  =  () => {
    const t = useTranslations(["Partners.manyDiplomas"]);
    const [numberOfDiplomas,setNumberOfDiplomas] = useState(1)
  return (
    <div className='flex justify-center mb-8 lg:mb-20'>
        <div className='max-w-[22rem]'>
            <div>
                {
                    <Diplome number={1} />
                }
            </div>            
            <div className='flex justify-end pt-4'>
                <button className='text-honolulu font-bold underline'>{t("addDiploma")}</button>    
            </div>
        </div>        
    </div>
  )
}

export default Diplomas