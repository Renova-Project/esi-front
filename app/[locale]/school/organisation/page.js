import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

function Page() {
  const t = useTranslations("School.Organisation");
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
        <div className="container">
          <h1
            className={cn(
              sourceSerif.className,
              "font-bold text-2xl  lg:text-5xl max-w-3xl mb-2 lg:mb-5"
            )}
          >
            {t("title")}
          </h1>
        </div>
      </section>
      <section className="bg-grayishBg py-16 lg:py-20">
        <div className="container">
          <div>
            <div className="bg-darkblue p-6 text-white text-lg font-bold">
              {t("direction.title")}
            </div>
            <div className="p-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {t("direction.subtitles.0")}
                </h4>
                <Image
                  src="/school/organisation/direction.svg"
                  className="w-full mb-4"
                  width={400}
                  height={400}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {t("direction.subtitles.1")}
                </h4>
                <p className="whitespace-pre-line">
                  {t("direction.description")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-darkblue p-6 text-white text-lg font-bold">
              {t("post.title")}
            </div>
            <div className="p-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {t("post.subtitles.0")}
                </h4>
                <p className="whitespace-pre-line pl-4">
                  {t("post.description")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-darkblue p-6 text-white text-lg font-bold">
              {t("relex.title")}
            </div>
            <div className="p-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {t("relex.subtitles.0")}
                </h4>
                <Image
                  src="/school/organisation/relex.svg"
                  className="w-full mb-4"
                  width={400}
                  height={400}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {t("relex.subtitles.1")}
                </h4>
                <p className="whitespace-pre-line">{t("relex.description")}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-darkblue p-6 text-white text-lg font-bold">
              {t("moyens.title")}
            </div>
            <div className="p-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {t("moyens.subtitles.0")}
                </h4>
                <Image
                  src="/school/organisation/moyens.svg"
                  className="w-full mb-4"
                  width={400}
                  height={400}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {t("moyens.subtitles.1")}
                </h4>
                <p className="whitespace-pre-line">{t("moyens.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
