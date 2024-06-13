import React from "react";
import { useTranslations } from "next-intl";
import { Source_Serif_4,Poppins } from "next/font/google"
import Button from "@/components/Button";
import Aquisations from "./Aquisations";
import BiblioInPic from "./BiblioInPic";
import { UserIcon } from "@heroicons/react/20/solid";
import { PhoneIcon,EnvelopeIcon } from "@heroicons/react/24/outline";





const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
  });



export default function Home () {
    const t = useTranslations(["biblio.main"]);

    return(
        <div>
           <div className="relative bg-[url('/biblio.jpg')] h-[70vh] lg:h-heroSection bg-cover bg-center flex justify-center items-center">
               <div className="container w-full flex justify-around flex-wrap gap-4">
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col justify-center">
                    <p className="font-semibold text-lg text-white text-center md:text-left">{t("heroSection.workTimes.title")}</p>
                    <div className="flex items-center gap-2 pl-2 my-3">
                      <span className="w-4 h-4 rounded-full bg-honolulu"/>
                      <p className="text-white">{t("heroSection.workTimes.saturday")}</p>
                    </div>
                    <div className="flex items-center gap-2 pl-2">
                       <span className="w-4 h-4 rounded-full bg-honolulu"/>
                       <p className="text-white">{t("heroSection.workTimes.sunday")}</p>
                    </div>
                  </div>
                  </div>
                <div className="bg-[#0061B1]/20 px-5 py-4 w-full max-w-[40rem]">
                    <p className="font-bold text-2xl text-white">{t("heroSection.desc.title")}</p>
                    <p className="text-white py-2">{t("heroSection.desc.desc")}</p>
                    <div className="flex items-center justify-end gap-5">
                        <Button>
                            <span>{t("heroSection.desc.catalogue")}</span>
                        </Button>
                        <Button>
                            <span>{t("heroSection.desc.memories")}</span>
                        </Button>
                    </div>
                </div>
                </div>
            </div> 
            <div className="bg-[#EEEEEE]">
                <div className="container py-10">
                    <h1 className={`mb-4 text-center font-bold text-3xl ${sourceSerif.className}`}>{t("biblioInNumbers.title")}</h1>
                    <div className="flex justify-center gap-10 md:gap-28 flex-wrap">
                        <div className="bg-[#EEEEEE] px-4 py-6 max-w-36 flex-1 md:max-w-52">
                            <p className="text-4xl font-black text-honolulu">+8269</p>
                            <div className="h-[0.39px] bg-black/40 my-1"/>
                            <p className="font-bold pb-4">{t("biblioInNumbers.fondDocumentaires.title")}</p>
                            <p className="text-[#595959] text-xs pb-2"><span>7172+</span>{t("biblioInNumbers.fondDocumentaires.tit")}</p>
                            <p className="text-[#595959] text-xs"><span>21345+</span>{t("biblioInNumbers.fondDocumentaires.exp")}</p>
                        </div>
                        <div className="px-4 py-6 max-w-36 flex-1 md:max-w-52">
                            <p className="text-4xl font-black text-black">1206</p>
                            <div className="h-[0.39px] bg-black/40 my-1"/>
                            <p className="font-bold pb-4">{t("biblioInNumbers.memories.title")}</p>
                            <p className="text-[#595959] text-xs pb-2"><span>7172+</span>{t("biblioInNumbers.memories.tit")}</p>
                            <p className="text-[#595959] text-xs"><span>45+</span>{t("biblioInNumbers.memories.exp")}</p>
                        </div>
                        <div className="px-4 py-6 max-w-36 flex-1 md:max-w-52">
                            <p className="text-4xl font-black text-black">120</p>
                            <div className="h-[0.39px] bg-black/40 my-1"/>
                            <p className="font-bold pb-4">{t("biblioInNumbers.theses.title")}</p>
                            <p className="text-[#595959] text-xs pb-2"><span>44+</span>{t("biblioInNumbers.theses.tit")}</p>
                            <p className="text-[#595959] text-xs"><span>79+</span>{t("biblioInNumbers.theses.exp")}</p>
                        </div>
                    </div>
                </div>
            </div>
           <Aquisations/>
           <BiblioInPic/>
           <div className="bg-white">
               <div className="container py-10 flex flex-col md:flex-row md:items-center justify-center">
                   <div className="w-full md:max-w-[50%] md:px-20">
                       <h1 className={`font-bold text-2xl lg:text-3xl ${sourceSerif.className}`}>{t("contact.title")}</h1>
                       <p className="text-sm pt-3 pb-5">{t("contact.desc")}</p>
                       <h3 className="font-bold">{t("contact.respo")}</h3>
                       <div className="flex items-center mt-2">
                          <UserIcon className="w-5 h-5 text-gray-400"/>
                          <span className="text-[#292929] ml-1 text-sm">M. Abderrahmane BELLAHRECHE</span>
                       </div>
                       <h3 className="font-bold mt-3">Contacts</h3>
                       <div className="flex items-center mt-3">
                          <PhoneIcon className="w-5 h-5 text-gray-400"/>
                          <span className="text-[#292929] ml-1 text-sm">+213 23 93 91 32 Poste 3059</span>
                       </div>
                       <div className="flex items-center mt-3">
                          <EnvelopeIcon className="w-5 h-5 text-gray-400"/>
                          <span className="text-[#292929] ml-1 text-sm">a_bellahreche@esi.dz</span>
                       </div>
                   </div>
                   <div className="w-full md:max-w-[50%] mt-6 md:mt-0">
                        <form className="w-full"> 
                            <div className="mb-4">
                                <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="name">
                                {t("contact.form.nameLabel")}
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder={t("contact.form.nameLabel")}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                              <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="email">
                              {t("contact.form.emailLabel")}
                              </label>
                              <input
                                id="email"
                                type="email"
                                placeholder={t("contact.form.emailLabel")}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="phone">
                              {t("contact.form.phoneNumberLabel")}
                              </label>
                              <input
                                id="phone"
                                type="tel"
                                placeholder={t("contact.form.phoneNumberLabel")}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-[#666666] text-sm font-bold mb-2" htmlFor="message">
                              {t("contact.form.messageLabel")}
                              </label>
                              <textarea
                                id="message"
                                placeholder="Message"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                maxLength="255"
                              ></textarea>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <Button
                                  type="submit"
                                  className="w-full"
                                >
                                  <span>{t("contact.form.submit")}</span>
                                </Button>
                            </div>
                        </form>
                   </div>
               </div>
           </div>
        </div>
    )}