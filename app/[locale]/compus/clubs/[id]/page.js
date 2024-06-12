import React from 'react'
import Image from 'next/image'

const Details = () => {
  return (
    <div>
      <div className='bg-darkblue'>
          <div className='container flex'> 
              <div className='md:max-w-[40%]'>
                  <Image src={'/GDG.png'} alt="/" width={200} height={200}/>
                  <div className='flex gap-4'>

                  </div>
              </div>
              <div className='md:max-w-[50%]'>
                 
              </div>
          </div>
      </div>
      <div>
              <div className="bg-[#EEEEEE] px-4 py-6 max-w-36 flex-1 md:max-w-52">
                  <p className="text-4xl font-black text-honolulu">+8269</p>
                  <div className="h-[0.39px] bg-black/40 my-1"/>
                  <p className="font-bold pb-4"></p>
              </div>
      </div>
    </div>
  )
}

export default Details