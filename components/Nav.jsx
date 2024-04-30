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
import { XMarkIcon } from "@heroicons/react/24/outline";

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
    imgUrl: "/sublinks0.jpg",
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
    imgUrl: "/sublinks1.jpg",
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
    imgUrl: "/sublinks2.jpg",
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
    imgUrl: "/hero.jpg",
  },
  {
    href: "/partnetship",
    key: "partnetship",
    sublinks: [
      "/partnetship/recruitment",
      "/partnetship/formation",
      "/partnetship/become-partner",
    ],
    imgUrl: "/sublinks3.png",
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

const IAmDropdownMenu = () => {
  const t = useTranslations("Nav");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <div
      className="relative lg:h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex font-medium items-center w-full p-4 mt-6 justify-between bg-honolulu lg:w-fit lg:p-0 lg:mt-0 lg:gap-2 lg:bg-transparent">
        <span>{t("iAm.title")}</span>
        {dropdownVisible ? (
          <ChevronDownIcon className="w-6 h-6 lg:rotate-180" />
        ) : (
          <ChevronUpIcon className="w-6 h-6 lg:rotate-180" />
        )}
      </div>
      {dropdownVisible ? (
        <ul className="bg-white rounded-md text-black h-fit w-full  absolute bottom-[calc(100%+24px)] left-0 px-4 pt-4 lg:w-52 lg:bottom-0 lg:top-full lg:pt-6 lg:bg-darkblue lg:text-white lg:z-50">
          {iAmLinks.map((link, childIndex) => (
            <li key={link} className="mb-4">
              <Link href={link} className="hover:underline">
                {t(`iAm.links.${childIndex}`)}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

const SublinksMenu = ({ activeIndex }) => {
  const t = useTranslations("Nav");
  if (activeIndex === -1) {
    return null;
  }
  const activeLink = downLinks[activeIndex];

  return (
    <div className="absolute z-40 w-full top-full left-0 bg-darkblue text-white flex">
      <div className="w-1/3 relative">
        <Image className="object-cover " src={activeLink?.imgUrl} fill alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-darkblue bg-opacity-60" />
        <div className="relative flex justify-center items-center h-full text-3xl font-bold">
          {t(`downLinks.${activeLink.key}`)}
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-4 p-10 flex-1">
        {activeLink.sublinks.map((sublink, childIndex) => (
          <li key={sublink}>
            <Link href={sublink} className="hover:underline">
              {t(`sublinks.${activeLink.key}.${childIndex}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Nav({ content }) {
  const [activeMobileSublinks, setActiveMobileSublinks] = useState(-1);
  const t = useTranslations("Nav");
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [topBarActive, setTopBarActive] = useState(true);
  const [iAmMenuActive, setIamMenuActive] = useState(false);
  const [activeSublinks, setActiveSublinks] = useState(-1);

  const handleMouseEnter = (i) => {
    setActiveSublinks(i);
  };

  const handleMouseLeave = () => {
    setActiveSublinks(-1);
  };
  return (
    <nav className="relative" onMouseLeave={handleMouseLeave}>
      <div className={`bg-darkblue text-white ${topBarActive ? "" : "hidden"}`}>
        <div className="container py-3 hidden  lg:flex items-center justify-between">
          <IAmDropdownMenu />
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
            {downLinks.map((link, index) => (
              <li
                className="hover:underline"
                key={link.href}
                onMouseEnter={() => handleMouseEnter(index)}
              >
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
      <SublinksMenu activeIndex={activeSublinks} />
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
                    activeMobileSublinks != -1
                      ? activeMobileSublinks === i
                        ? "block"
                        : "hidden"
                      : "block"
                  }`}
                >
                  <div
                    className="flex justify-between items-center py-4 cursor-pointer"
                    onClick={() => {
                      setActiveMobileSublinks((old) => (old === i ? -1 : i));
                    }}
                  >
                    <span className="font-semibold">
                      {t("downLinks." + link.key)}
                    </span>
                    {activeMobileSublinks === i ? (
                      <ChevronUpIcon className="w-6 h-6" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6" />
                    )}
                  </div>
                  {activeMobileSublinks === i ? (
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
            : null}
        </ul>
        <div className="px-6">
          <IAmDropdownMenu />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
