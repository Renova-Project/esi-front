import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

function Page() {
  const t = useTranslations(["School.Contact"]);

  return (
    <div>
      <section className="bg-darkblue text-white py-20 relative">
        <Image
          src="/gradient-blue.svg"
          className="absolute right-0 top-0 rotate-180"
          width={301}
          height={326}
          alt=""
        />
        <Image
          src="/gray-dots.svg"
          className="absolute  left-10 -top-10 rotate-90 "
          width={100}
          height={100}
          alt=""
        />
        <Image
          src="/gray-dots.svg"
          className="absolute bottom-0 right-0"
          width={100}
          height={100}
          alt=""
        />
        <div className="container flex gap-10 lg:justify-between flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2">
            <h1
              className={cn(
                sourceSerif.className,
                "font-bold text-2xl lg:block lg:text-3xl max-w-2xl mb-2 lg:mb-5"
              )}
            >
              {t("title")}
            </h1>
            <div className="">{t("description")}</div>
            <h3 className="mt-8 text-xl font-bold mb-4">{t("headMaster")}</h3>
            <div className="flex items-center gap-4">
              <UserIcon className="w-6 h-6 text-white" />
              <span>M. Koudil Mouloud</span>
            </div>
            <h3 className="mt-8 text-xl font-bold mb-4">{t("contacts")}</h3>
            <div className="flex items-center gap-4">
              <PhoneIcon className="w-6 h-6 text-white" />
              <span>+213 23 93 91 33 Poste 3008</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <EnvelopeIcon className="w-6 h-6 text-white" />
              <span>m_koudil@esi.dz</span>
            </div>
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/school/contact/letter.svg"
              className="absolute -left-24 bottom-0"
              width={100}
              height={100}
              alt=""
            />
            <form>
              <div className="flex flex-col gap-2">
                <label className="font-medium">{t("form.name")}</label>
                <input
                  className="text-black p-4 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 mt-6">
                <label className="font-medium">{t("form.email")}</label>
                <input
                  className="text-black p-4 focus:outline-none"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2 mt-6">
                <label className="font-medium">{t("form.phone")}</label>
                <input
                  className="text-black p-4 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 mt-6">
                <label className="font-medium">{t("form.message")}</label>
                <textarea
                  className="text-black min-h-44 p-4 focus:outline-none"
                  type="text"
                />
              </div>
              <Button className="w-full mt-8">{t("form.submitBtn")}</Button>
            </form>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <h2
            className={cn(
              "font-bold text-3xl mb-10 lg:text-3xl lg:mb-10",
              sourceSerif.className
            )}
          >
            {t("otherContacts.title")}
          </h2>
          <div className="bg-darkblue flex justify-between flex-col lg:flex-row p-14 text-white">
            <p className="font-medium text-2xl mb-4 lg:mb-0">
              Secrétaire Générale
            </p>
            <div>
              <div className="uppercase text-lg mb-4 lg:mb-8">
                M. Réda LOTMANI
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-honolulu" />
                  <span>+213 23 93 91 33 Poste 3008</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <EnvelopeIcon className="w-5 h-5 text-honolulu" />
                  <span>m_koudil@esi.dz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row p-14 text-black">
            <p className="font-medium text-2xl mb-4 lg:mb-0">
              Directeur adjoint de la post graduation et recherche
            </p>
            <div>
              <div className="uppercase text-lg mb-4 lg:mb-8">
                M. Réda LOTMANI
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-honolulu" />
                  <span>+213 23 93 91 38 Poste 3092</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <EnvelopeIcon className="w-5 h-5 text-honolulu" />
                  <span>r_lotmani@esi.dz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-darkblue flex justify-between flex-col lg:flex-row p-14 text-white">
            <p className="font-medium text-2xl mb-4 lg:mb-0">
              Direction des moyennes informatiques
            </p>
            <div>
              <div className="uppercase text-lg mb-4 lg:mb-8">
                M. Daoud BOUMAZOUZA
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-honolulu" />
                  <span>+213 23 93 91 33 Poste 3008</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <EnvelopeIcon className="w-5 h-5 text-honolulu" />
                  <span>d_boumazouza@esi.dz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row p-14 text-black">
            <p className="font-medium text-2xl mb-4 lg:mb-0">
              Laboratoire de recherche LCSI
            </p>
            <div>
              <div className="uppercase text-lg mb-4 lg:mb-8">
                M. Djameleddine ZEGOUR
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-honolulu" />
                  <span>+213 23 93 91 38 Poste 3092</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <EnvelopeIcon className="w-5 h-5 text-honolulu" />
                  <span>r_lotmani@esi.dz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-darkblue flex justify-between flex-col lg:flex-row p-14 text-white">
            <p className="font-medium text-2xl mb-4 lg:mb-0">
              Laboratoire de recherche LMCS
            </p>
            <div>
              <div className="uppercase text-lg mb-4 lg:mb-8">
                Mme Karima BENATCHBA
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-honolulu" />
                  <span>+213 23 93 91 33 Poste 3008</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <EnvelopeIcon className="w-5 h-5 text-honolulu" />
                  <span>k_benatchba@esi.dz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row p-14 text-black">
            <p className="font-medium text-2xl mb-4 lg:mb-0">
              Sous direction du personnel
            </p>
            <div>
              <div className="uppercase text-lg mb-4 lg:mb-8">
                M. Rachid MADANI
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-honolulu" />
                  <span>+213 23 93 91 38 Poste 3092</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <EnvelopeIcon className="w-5 h-5 text-honolulu" />
                  <span>r_madani@esi.dz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-darkblue flex justify-between flex-col lg:flex-row p-14 text-white">
            <p className="font-medium text-2xl mb-4 lg:mb-0">
              Sous direction du budget et de comptabilité
            </p>
            <div>
              <div className="uppercase text-lg mb-4 lg:mb-8">
                Mme Sihem OULD BEZIOU
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-honolulu" />
                  <span>+213 23 93 91 33 Poste 3008</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <EnvelopeIcon className="w-5 h-5 text-honolulu" />
                  <span>s_ouldbeziou@esi.dz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row p-14 text-black">
            <p className="font-medium text-2xl mb-4 lg:mb-0">Agent comptable</p>
            <div>
              <div className="uppercase text-lg mb-4 lg:mb-8">
                M. Faiçal AMRANE
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-honolulu" />
                  <span>+213 23 93 91 38 Poste 3092</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <EnvelopeIcon className="w-5 h-5 text-honolulu" />
                  <span>f_amrance@esi.dz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-darkblue flex justify-between flex-col lg:flex-row p-14 text-white">
            <p className="font-medium text-2xl mb-4 lg:mb-0">
              Responsable des moyens généraux
            </p>
            <div>
              <div className="uppercase text-lg mb-4 lg:mb-8">
                M. Tayeb OUASSA
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-honolulu" />
                  <span>+213 23 93 91 33 Poste 3008</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <EnvelopeIcon className="w-5 h-5 text-honolulu" />
                  <span>t_ouassa@esi.dz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row p-14 text-black">
            <p className="font-medium text-2xl mb-4 lg:mb-0">
              Service des marchés et equipements
            </p>
            <div>
              <div className="uppercase text-lg mb-4 lg:mb-8">
                Mme Fatima DJILLALI
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-honolulu" />
                  <span>+213 23 93 91 38 Poste 3092</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <EnvelopeIcon className="w-5 h-5 text-honolulu" />
                  <span>f_djilali@esi.dz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
