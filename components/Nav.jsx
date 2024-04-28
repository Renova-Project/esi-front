"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  Bars3BottomRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

const upLinks = [
  {
    href: "/library",
    key: "library",
  },
  {
    href: "/elearning",
    key: "elearning",
  },
  {
    href: "/talents",
    key: "talents",
  },
  {
    href: "/labs",
    key: "labs",
  },
  {
    href: "/juridic-portal",
    key: "portal",
  },
];

const downLinks = [
  {
    href: "/school",
    key: "school",
    sublinks: [
      "/school/presentation",
      "/school/news",
      "/school/organisation",
      "/school/key-numbers",
      "/school/success",
      "/school/contact",
    ],
  },
  {
    href: "/studies",
    key: "studies",
    sublinks: [
      "/studies/engineering",
      "/studies/master",
      "/studies/fie",
      "/studies/internships",
      "/studies/diplomat",
    ],
  },
  {
    href: "/research",
    key: "research",
    sublinks: [
      "/research/center",
      "/research/labs",
      "/research/phd",
      "/research/rules",
    ],
  },
  {
    href: "/campus",
    key: "campus",
    sublinks: [
      "/campus/visit",
      "/campus/clubs",
      "/campus/events",
      "/campus/library",
    ],
  },
  {
    href: "/partnetship",
    key: "partnetship",
    sublinks: [
      "/partnetship/recruitment",
      "/partnetship/formation",
      "/partnetship/become-partner",
    ],
  },
  {
    href: "/alumni",
    key: "alumni",
    sublinks: [
      "/alumni/testimonials",
      "/alumni/achievments",
      "/alumni/statistics",
    ],
  },
];

const iAmLinks = [
  "/i-am/bachelor",
  "/i-am/student",
  "/i-am/teacher",
  "/i-am/alumni",
  "/i-am/company",
  "/i-am/executive",
];

function Nav({ content }) {
  const [activeSublinks, setActiveSublinks] = useState(-1);
  const t = useTranslations("Nav");
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [topBarActive, setTopBarActive] = useState(true);
  const [iAmMenuActive, setIamMenuActive] = useState(false);
  return (
    <nav className="relative">
      <div className={`bg-darkblue text-white ${topBarActive ? "" : "hidden"}`}>
        <div className="container py-3 hidden  lg:flex items-center justify-between">
          <button className="flex items-center gap-2">
            je suis <ChevronDownIcon className="text-white w-4 h-4" />
          </button>
          <ul className="flex gap-6 text-grey">
            {upLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{t("upLinks." + link.key)}</Link>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container py-4 flex items-center justify-between">
          <Image src="/esi-logo.svg" alt="logo" width={60} height={15} />
          <ul className="hidden lg:flex items-center gap-6">
            {downLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{t("downLinks." + link.key)}</Link>
              </li>
            ))}
          </ul>
          <button className="hidden lg:inline-block">
            <Image
              src="/langSwitch.svg"
              alt="lang-switch"
              width={25}
              height={25}
            />
          </button>
          <button className="ml-auto mr-4 lg:hidden">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
          <button
            className="lg:hidden"
            onClick={() => {
              setMobileMenuActive(true);
            }}
          >
            <Bars3BottomRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <button
        className={`absolute top-0 right-28 p-1 rounded-b-full hidden lg:inline-block bg-[#273D56]
        }`}
        onClick={() => {
          setTopBarActive((old) => !old);
        }}
      >
        {topBarActive ? (
          <ChevronUpIcon className="h-4 w-4 text-white" />
        ) : (
          <ChevronDownIcon className="h-4 w-4 text-white" />
        )}
      </button>
      <div
        className={`fixed top-0 left-0 h-screen w-full  bg-darkblue text-white z-50 py-8 transition-all  ${
          mobileMenuActive ? "left-0" : "left-full"
        }`}
      >
        <div className="flex justify-between px-6 mb-4">
          <Image src="logo-nav-mobile.svg" height={56} width={140} alt="esi" />
          <button
            onClick={() => {
              setMobileMenuActive(false);
            }}
          >
            <XMarkIcon className="w-10 h-10 text-white" />
          </button>
        </div>
        <div className="h-[1px] w-full bg-[#0061B1]" />
        {/* searchComponent */}
        <ul className="mt-4 px-6">
          {!iAmMenuActive
            ? downLinks.map((link, i) => (
                <li
                  key={link.href}
                  className={`border-b border-[#1A3559] ${
                    activeSublinks != -1
                      ? activeSublinks === i
                        ? "block"
                        : "hidden"
                      : "block"
                  }`}
                >
                  <div
                    className="flex justify-between items-center py-4 cursor-pointer"
                    onClick={() => {
                      setActiveSublinks((old) => (old === i ? -1 : i));
                    }}
                  >
                    <span className="font-semibold">
                      {t("downLinks." + link.key)}
                    </span>
                    {activeSublinks === i ? (
                      <ChevronUpIcon className="w-6 h-6" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6" />
                    )}
                  </div>
                  {activeSublinks === i ? (
                    <ul className="ml-4">
                      {link.sublinks.map((sublink, childIndex) => (
                        <li key={sublink} className="mb-4 ">
                          <Link href={sublink} className="hover:underline">
                            {t(`sublinks.${link.key}.${childIndex}`)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))
            : iAmLinks.map((link, i) => (
                <li
                  key={link.href}
                  className="border-b border-[#1A3559] flex justify-between items-center py-4 cursor-pointer"
                >
                  <span className="font-semibold">{t("iAm.links." + i)}</span>
                  <ChevronRightIcon className="text-white w-6 h-6" />
                </li>
              ))}
        </ul>
        <div className="px-6">
          <button
            className="flex font-medium items-center w-full p-4 mt-6 justify-between bg-honolulu "
            onClick={() => {
              setIamMenuActive((old) => !old);
            }}
          >
            <span>{t("iAm.title")}</span>
            {iAmMenuActive ? (
              <ChevronDownIcon className="w-6 h-6" />
            ) : (
              <ChevronUpIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
