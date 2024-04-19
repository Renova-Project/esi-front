import Nav from "@/components/Nav";
import Carousel from "@/components/Carousel";
import { useTranslations } from "next-intl";
import Event from "@/components/Event";
import { Source_Serif_Pro } from "next/font/google";
import New from "@/components/New";







export default function Home() {
  const t = useTranslations(["Landing"]);
  return (
    <div>
      <Nav />
      <main>
        <Carousel>
          <div className="relative bg-[url('/hero.jpg')] h-screen bg-cover bg-center">
            <div className="bg-darkblue/60 absolute top-0 left-0 w-full h-full " />
            <h1 className="text-white ">
              Ecole nationale supérieure d'informatique
            </h1>
          </div>
          <div className="bg-[url('/hero.jpg')] h-screen bg-cover bg-center">
            <div className="bg-darkblue/60 h-full" />
          </div>
        </Carousel>

        <section className='container flex flex-col py-10'>
              <div className='w-full flex items-center justify-between'>
                 <h1 className='text-3xl font-bold pb-10 md:pb-0'>{t("events.title")}</h1>
                 <button className='hidden md:flex px-6 py-4 bg-honolulu text-white'>{t("events.allEvents")}</button>
              </div>
              <hr className="hidden md:flex mb-10 mt-7 text-black font-bold text-xl"/>
              <div className='w-full flex flex-col items-start md:flex-row md:items-center justify-between'>
                  <Event mounth="MAR" day="22" title="Algerian Doctorat" label="Conference on Computer"/>
                  <Event mounth="MAR" day="22" title="Algerian Doctorat" label="Conference on Computer"/>
                  <Event mounth="MAR" day="22" title="Algerian Doctorat" label="Conference on Computer"/>
              </div>
              <div className="pt-4">
                  <button className='md:hidden flex px-6 py-4 bg-honolulu text-white'>{t("events.allEvents")}</button>
              </div>
        </section>
        <section className='bg-darkblue'>
            <div className="container flex flex-col py-10 text-white"> 
                <div className='w-full flex items-center justify-between pb-10'>
                    <h1 className='text-3xl font-bold'>{t("a_la_une.title")}</h1>
                </div>
                <div className='w-full flex flex-col items-start lg:flex-row lg:items-center justify-between gap-4 lg:gap-0'>
                  <New image="" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                  <New image="" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                  <New image="" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                </div>
                <div className="py-4 md:py-10">
                  <button className='flex px-6 py-4 border-white border-[0.1rem]'>{t("a_la_une.allActualities")}</button>
              </div>
            </div>
        </section>
        <section className="container flex flex-col py-10"> 
                <div className='w-full flex items-center justify-between pb-10'>
                    <h1 className='text-3xl font-bold'>{t("Actualities.title")}</h1>
                </div>
                <div className='w-full flex flex-col items-start lg:flex-row lg:items-center justify-between'>
                  <New image="" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                  <New image="" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                  <New image="" description='Séminaire LMCS (Pr. Jalil BOUKHOBZA, Lab-STICC/ENSTA-Bretagne, Brest, France) - Lundi 30 octobre 2023, 13h, Salle Visio'/>
                </div>
                <div className="py-4 md:py-10">
                  <button className='flex px-6 py-4 bg-honolulu text-white'>{t("Actualities.allActualities")}</button>
              </div>
        </section>
      </main>
    </div>
  );
}
