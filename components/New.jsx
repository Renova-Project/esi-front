import React from 'react'
import Image from 'next/image'
const New = ({image,description}) => {
  return (
    /*The content will be completed from the back-end*/
    <div className='mb-8 md:mb-0 flex flex-row lg:flex-col justify-center items-center gap-2'>
        <div className='md:w-full h-full'>
            <img src={'/LMCS-11.svg'} alt='/' className='object-cover'/>
        </div>
        <div>
            <p className='text-md md:text-lg'>{description}</p>
        </div>
    </div>
  )
}

export default New