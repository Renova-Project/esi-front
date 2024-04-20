import React from 'react'
import Image from 'next/image'
const New = ({image,description}) => {
  return (
    /*The content will be completed from the back-end*/
    <div className='h-28 sm:h-36 md:48 lg:h-[30rem] w-full lg:max-w-[25rem] flex flex-row lg:flex-col justify-center items-start gap-4 mb-8 md:mb-0'>
        <div className='w-[40%] lg:w-full h-full lg:h-[60%] relative'>
            <Image src={image} alt='/' fill={true} className='w-full h-full' objectFit='contain'/>
        </div>
        <div className='w-[60%] lg:w-full h-full lg:h-[40%]'>
            <p className='text-sm md:text-lg'>{description}</p>
        </div>
    </div>
  )
}

export default New