import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const col2Links = ["/1", "/2", "/3", "/4", "/5"];

function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-darkblue relative z-0">
      <div className="relative container grid grid-cols-1 gap-6 md:grid-cols-3 py-10 md:gap-x-52 text-[#DEDDDE]">
        <div>
          <Image src="/esi-logo-white.svg" alt="logo" width={60} height={15} />
          <p className="my-4">{t("title")}</p>
          <ul className="flex items-center gap-3">
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <Image
                  className="w-6 h-6 text-crayola"
                  src="/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <Image
                  className="w-6 h-6 text-crayola"
                  src="/twitter.svg"
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <Image
                  className="w-6 h-6 text-crayola"
                  src="/youtube.svg"
                  alt="youtube"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <Image
                  className="w-6 h-6 text-crayola"
                  src="/twitter.svg"
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-[#003561] md:hidden"></div>
        <div>
          <h4 className="text-white font-bold text-lg mb-4">
            {t("col2.title")}
          </h4>
          <ul>
            {col2Links.map((link, i) => (
              <li key={link} className="mb-3">
                <Link href={link}>{t(`col2.links.${i}`)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[1px] bg-[#003561] md:hidden"></div>
        <div>
          <h4 className="text-white font-bold text-lg mb-4">
            {t("col3.title")}
          </h4>
          <ul>
            <li className="flex items-center gap-4 mb-3">
              <MapPinIcon className="w-5 h-5 text-crayola" />
              <span>{t("col3.adresse")}</span>
            </li>
            <li className="flex items-center gap-4 mb-3">
              <EnvelopeIcon className="w-5 h-5 text-crayola" />
              <span>{t("col3.email")}</span>
            </li>
            <li className="flex items-center gap-4 mb-3">
              <PhoneIcon className="w-5 h-5 text-crayola" />
              <span>{t("col3.phone")}</span>
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-[#003561] md:hidden"></div>
        <div className="text-center text-sm md:text-base md:col-span-3 text-crayola">
          {t("allrights")}
        </div>
      </div>
      <Image
        src="/gradient-blue.svg"
        className="absolute left-0 bottom-0 hidden md:block"
        width={301}
        height={326}
        alt=""
      />
    </footer>
  );
}

export default Footer;
