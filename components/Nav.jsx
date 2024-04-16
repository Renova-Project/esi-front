"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  Bars3BottomRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

const upLinks = [
  {
    href: "/library",
    label: "library",
  },
  {
    href: "/elearning",
    label: "elearning",
  },
  {
    href: "/talents",
    label: "talents",
  },
  {
    href: "/labs",
    label: "labs",
  },
  {
    href: "/juridic-portal",
    label: "portal",
  },
];

const downLinks = [
  { href: "/school", label: "school" },
  { href: "/studies", label: "studies" },
  { href: "/research", label: "research" },
  { href: "/campus", label: "campus" },
  { href: "/partnetship", label: "partnetship" },
  { href: "/alumni", label: "alumni" },
];

function Nav({ content }) {
  const t = useTranslations("Nav");
  const [topBarActive, setTopBarActive] = useState(true);
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
                <Link href={link.href}>{t("upLinks." + link.label)}</Link>
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
                <Link href={link.href}>{t("downLinks." + link.label)}</Link>
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
          <button className="lg:hidden">
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
    </nav>
  );
}

export default Nav;
