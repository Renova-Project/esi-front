"use client";
import React from 'react'
import Carousel from '@/components/Carousel';
import { useRef } from "react";
import Image from 'next/image';
import { ChevronRightIcon,ChevronLeftIcon } from '@heroicons/react/20/solid';



export const Formation = ({image}) => {
    return(
      <div className='relative bg-white max-w-[22rem] py-6 px-4 z-0'>
          <div className='relative w-full h-60'>
            <Image src={image} alt='/' fill={true} className='w-full h-full' objectFit='cover'/>
          </div>
          <div className=''>
              <div className='flex items-center justify-between py-2'>
                <h1 className='text-sm md:text-lg font-bold'>ABDERREZAGUE</h1>
                <h1>Ismail</h1>
              </div>
              <div className=''>
                <p className='text-xs md:text-base font-semibold pb-4'>Decouvrer les principes de No SQL et comment ces bases des donnees non relationneles....</p>
                <div className='flex items-center justify-between gap-1 flex-wrap'>
                   <span className='py-2 px-3 rounded-lg bg-honolulu text-white'>15 jours</span>
                   <span className='py-2 px-3 rounded-lg bg-honolulu text-white'>Debutant</span>
                   <span className='py-2 px-3 rounded-lg border-[1px] border-black font-semibold'>140,00 DA</span>
                </div>
              </div>
          </div>
      </div>
    )
  }
  

const Formations = () => {
    let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <div className=''>
        {/* The break points must be added  */}
    <Carousel 
     refAssignment={(ref) => {
      sliderRef = ref;
    }}
     settings={{
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
    }}>
        <Formation image={'/formation.jpg'}/>
        <Formation image={'/formation.jpg'}/>
        <Formation image={'/formation.jpg'}/>
    </Carousel>
    <div className="flex justify-center gap-5 mt-4">
        <button
           onClick={previous}
           className="bg-[#203960] border border-[#f8f8f8] p-1 rounded-full text-white relative focus:outline-none"
        >
            <ChevronLeftIcon className="w-7 h-7" />
        </button>
        <button
        onClick={next}
        className="bg-[#203960] border border-[#f8f8f8] p-1 rounded-full text-white relative focus:outline-none"
        >
             <ChevronRightIcon className="w-7 h-7 " />
        </button>
    </div>
</div>
  )
}

export default Formations