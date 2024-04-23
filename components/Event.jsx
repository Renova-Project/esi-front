import React from 'react'
import { Inter } from 'next/font/google'


const inter =Inter({
    subsets: ["latin"],
})
const Event = ({mounth,day,title,label}) => {
  return (

    /*The content will be completed from the back-end*/
      <section className='mb-8 md:mb-0'>
        <div className='w-full flex items-center justify-center gap-2 flex-1'>
          <div className='flex flex-col justify-center items-center text-honolulu font-semibold shadow-md border-b-2 border-b-honolulu py-4 px-6'>
                <p className={inter.className}>{mounth}</p>
                <p className={inter.className}>{day}</p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <p>{title}</p>
                <p>{label}</p>
            </div>
        </div>
        
      </section>
  )
}

export default Event