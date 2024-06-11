import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import ProgramSection from "./ProgramSection";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const HeroSection = () => {
  const t = useTranslations("Studies.Master.hero");

  return (
    <section
      className={cn(
        sourceSerif.className,
        "relative bg-darkblue pb-10 bg-cover bg-center flex lg:pb-20"
      )}
    >
      <Image
        src="/gradient-blue.svg"
        className="absolute right-0 top-0 rotate-180"
        width={301}
        height={326}
        alt=""
      />
      <div className="container h-full flex flex-col">
        <div className="flex items-start gap-4 mt-16 mb-6">
          <button className="hidden md:inline-block">
            <ChevronLeftIcon className="text-white w-14 h-14" />
          </button>
          <h1 className="font-bold text-white text-2xl lg:text-5xl max-w-2xl">
            {t("title.0")}
            <span className="text-crayola"> {t("title.1")}</span>
          </h1>
        </div>
        <div className="relative flex-1 lg:p-10">
          <Image
            className="!h-[calc(100%+8rem)] hidden left-0   object-cover lg:block"
            fill
            src="/studies/master/hero.png"
            alt=""
          />
          <div className="relative text-white  lg:max-w-3xl lg:bg-[rgba(39,62,90,0.6)] lg:py-14 lg:px-7 lg:border lg:border-[rgb(195,193,251,0.5)] lg:backdrop-blur-[10px] lg:ml-auto">
            <h3 className="text-xl mb-2 font-semibold">{t("info.title")}</h3>
            <p className="mb-4">{t("info.description")}</p>
            <Button>{t("info.actionBtn")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

function page() {
  return (
    <div>
      <HeroSection />
      <ProgramSection />
    </div>
  );
}

export default page;
