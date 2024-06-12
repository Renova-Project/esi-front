import React from 'react'
import { useTranslations } from "next-intl";
import { Source_Serif_4,Poppins } from "next/font/google"
import Button from '@/components/Button';



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
                   <div className='w-full md:max-w-[45%]'>
                      <div className='mt-4'>
                        <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="name">
                          {t("heroSection.form.name.label")}
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder={t("heroSection.form.name.placeHolder")}
                          className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className='mt-4'>
                        <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="organization">
                        {t("heroSection.form.organisation.label")}
                        </label>
                        <input
                            id="organization"
                            type="text"
                            placeholder={t("heroSection.form.organisation.placeHolder")}
                            className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className='mt-4'>
                          <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="email">
                          {t("heroSection.form.email.label")}
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder={t("heroSection.form.email.placeHolder")}
                            className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                      </div>
                      <div className='mt-4'>
                          <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="phone">
                                   {t("heroSection.form.number.label")}
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            placeholder={t("heroSection.form.email.placeHolder")}
                            className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                      </div>
                   </div>
                   <div className='w-full md:max-w-[45%]'>
                      <div className='mt-4'>
                        <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="date">
                                 {t("heroSection.form.date.label")}
                        </label>
                        <input
                          id="date"
                          type="date"
                          placeholder={t("heroSection.form.date.placeHolder")}
                          className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className='mt-4'>
                        <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="objective">
                        {t("heroSection.form.desc.label")}
                        </label>
                        <input
                          id="objective"
                          type="text"
                          placeholder={t("heroSection.form.desc.placeHolder")}
                          className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className='mt-4'>
                        <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="groupSize">
                            {t("heroSection.form.group.label")}
                        </label>
                        <input
                          id="groupSize"
                          type="text"
                          placeholder={t("heroSection.form.group.placeHolder")}
                          className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className='mt-4'>
                        <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="comments">
                        {t("heroSection.form.open.label")}
                        </label>
                        <input
                          id="comments"
                          type="text"
                          placeholder={t("heroSection.form.open.placeHolder")}
                          className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                   </div>
                   <div className='w-full flex justify-center items-center px-14'>
                      <Button className={'bg-gradient-to-b from-btnGradientStart via-btnGradientStart via-30% to-btnGradientEnd'}>
                        <span>{t("heroSection.form.submit")}</span>
                      </Button>
                   </div>
                </form>
             </div>
        </div>
    </div>
  )
}

export default Home