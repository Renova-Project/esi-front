import React from 'react'
import Image from 'next/image'
import { useTranslations } from "next-intl";
import { Source_Serif_4,Poppins } from "next/font/google"
import Button from '@/components/Button';
import { ChevronLeftIcon, PhoneIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';


const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});



const Event = ({type,date,title,finished,online}) => {
  return (
    <div className='bg-[#EEEEEE] py-10 px-6 w-[90%] md:max-w-[20rem]'>
        <div className="w-full h-[10rem] relative bg-[url('/event.jpg')] bg-cover bg-center"/>
        <div className='flex items-center justify-between mt-3'>
          <p className='text-sm text-[#5D5D5D]'>{type}</p>
          <p className='text-sm text-[#5D5D5D]'>{date}</p>
        </div>
        <h3 className='font-bold text-xl pt-3 pb-6'>{title}</h3>
        <div className='flex items-center justify-start gap-3'>
           <span>
            {finished ? <p className='bg-darkblue px-4 py-1 text-white'>finished</p>
           :
           <p className='bg-honolulu px-4 py-1 text-white'>5 day</p>
           }
           </span>
           <span>
            {online ? 
                  <div className='flex items-center'>
                    <span className='w-2 h-2 bg-[#1DBE54] rounded-full mr-1'/>
                    <p className='text-[#1DBE54]'>online</p>
                  </div>
           :
                <div className='flex items-center'>
                    <span className='w-2 h-2 bg-[#17575f] rounded-full mr-1'/>
                    <p className='text-[#1e232a]'>presentiel</p>
                </div>
            }
           </span>
        </div>
    </div>
  )
}

const Details = () => {
  const t = useTranslations(["clubs.main"]);

  return (
    <div>
      <div className='bg-darkblue'>
        <div className='container pt-5'>
            <Link href={''}>
              <ChevronLeftIcon className='w-8 h-8 text-white '/>
            </Link>
        </div>
      </div>
      <div className='bg-darkblue'>
          <div className='container flex flex-col md:flex-row gap-14 items-center justify-center pb-10'> 
              <div className='flex flex-col items-center'>
                  <Image src={'/gdg-Photoroom.png'} alt="/" width={200} height={200} objectFit='cover'/>
                  <ul className='flex items-center justify-between gap-4'>
                      <li>
                          <a href="https://www.facebook.com" target="_blank">
                              <Image
                                  className="w-10 h-10 text-white"
                                  src="/phoneIcon.svg"
                                  alt="phone"
                                  width={40}
                                  height={40}
                              />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.facebook.com" target="_blank">
                              <Image
                                  className="w-10 h-10 text-white"
                                  src="/instaIcon.svg"
                                  alt="instagram"
                                  width={40}
                                  height={40}
                              />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.facebook.com" target="_blank">
                              <Image
                                  className="w-10 h-10 text-white"
                                  src="/fbIcon.svg"
                                  alt="facebook"
                                  width={40}
                                  height={40}
                              />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.facebook.com" target="_blank">
                              <Image
                                  className="w-10 h-10 text-white"
                                  src="/linkedinIcon.svg"
                                  alt="linkedin"
                                  width={40}
                                  height={40}
                              />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.facebook.com" target="_blank">
                              <Image
                                  className="w-10 h-10 text-white"
                                  src="/youtubeIcon.svg"
                                  alt="youtube"
                                  width={40}
                                  height={40}
                              />
                          </a>
                      </li>
                  </ul>
              </div>
              <div className='w-full md:max-w-[60%] text-white px-4'>
                   <h1 className='font-bold text-2xl md:text-4xl py-6'>GDG (Google Developer Group )</h1>
                   <div className='flex'>
                    <span className="font-semibold">{t("details.creationDate")}</span>
                    <span className='px-1'>:</span>
                    <p>Septembre 2011</p>
                   </div>
                   <div className='flex'>
                    <span className="font-semibold">{t("details.president")}</span>
                    <span className='px-1'>:</span>
                    <p>Louggani Abderaouf</p>
                   </div>
                   <div className='flex'>
                    <span className="font-semibold">{t("details.domaine")}</span>
                    <span className='px-1'>:</span>
                    <p> Développement des produits technologiques</p>
                   </div>
                   <div className='flex'>
                    <span className="font-semibold">{t("details.majeurEvent")}</span>
                    <span className='px-1'>:</span>
                    <p>DevFest</p>
                   </div>
              </div>
          </div>
      </div>
      <div className="flex justify-center gap-10 md:gap-28 flex-wrap py-10">
              <div className="px-4 py-6 max-w-36 flex-1 md:max-w-52">
                  <p className="text-4xl font-black text-honolulu">+8269</p>
                  <div className="h-[0.39px] bg-black/40 my-1"/>
                  <p className="font-bold">{t("details.numbers.participants")}</p>
              </div>
              <div className="px-4 py-6 max-w-36 flex-1 md:max-w-52">
                  <p className="text-4xl font-black">+8269</p>
                  <div className="h-[0.39px] bg-black/40 my-1"/>
                  <p className="font-bold">{t("details.numbers.members")}</p>
              </div>
              <div className="px-4 py-6 max-w-36 flex-1 md:max-w-52">
                  <p className="text-4xl font-black">+8269</p>
                  <div className="h-[0.39px] bg-black/40 my-1"/>
                  <p className="font-bold">{t("details.numbers.events")}</p>
              </div>
      </div>
      <div className='bg-white'>
         <div className='container'>
            <h1 className={`font-bold text-2xl pb-6 ${sourceSerif.className}`}>{t("details.recents")}</h1>
            <div className='flex justify-center md:justify-between gap-4 flex-wrap mb-6'>
              <Event type={"devloppement"} date={'Mars 24,2024'} title={'Annual Internal Event'} finished={true} online={true}/>
              <Event type={"devloppement"} date={'Mars 24,2024'} title={'Annual Internal Event'} finished={false} online={false}/>
              <Event type={"devloppement"} date={'Mars 24,2024'} title={'Annual Internal Event'} finished={true} online={true}/>
            </div>
            <div className='flex justify-center md:justify-start mb-8'>
              <Button className={"bg-gradient-to-b from-btnGradientStart via-btnGradientStart via-30% to-btnGradientEnd"}>
                <span>{t("details.others")}</span>
              </Button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Details