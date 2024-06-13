"use client";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { Link } from "@/navigation";
import Button from "@/components/Button";
import { API_URL, IMG_URL } from "@/lib/constants";
import { useState } from "react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

function Page() {
  const t = useTranslations("Profile.Main.addEvent");
  const [formData, setFormData] = useState({
    event_name: "",
    event_type: "",
    event_description: "",
    event_details: "hello world",
    event_location: "",
    is_validated: false,
    event_file: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ev = await fetch(API_URL + "/club/event/create", {
      method: "POST",
      body: JSON.stringify({ ...formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="">
      <div className="container pb-20">
        <h2
          className={cn(
            "font-bold text-2xl mb-6 mt-12 text-crayola lg:text-3xl lg:text-center lg:mb-4",
            sourceSerif.className
          )}
        >
          {t("title")}
        </h2>
        <p className="text-center mb-11">{t("description")}</p>
        <form className="mx-auto max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">{t("inputs.0.label")}</label>
            <input
              className="text-black bg-gray-100 p-4 focus:outline-none"
              type="text"
              onChange={(e) =>
                setFormData((old) => ({ ...old, event_name: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <label className="font-semibold">{t("inputs.1.label")}</label>
            <input
              className="text-black bg-gray-100 p-4 focus:outline-none"
              type="text"
              onChange={(e) =>
                setFormData((old) => ({ ...old, event_type: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <label className="font-semibold">{t("inputs.2.label")}</label>
            <input
              className="text-black bg-gray-100 p-4 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <label className="font-semibold">{t("inputs.3.label")}</label>
            <input
              className="text-black bg-gray-100 p-4 focus:outline-none"
              type="text"
              onChange={(e) =>
                setFormData((old) => ({
                  ...old,
                  event_location: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <label className="font-semibold">{t("inputs.4.label")}</label>
            <input
              className="text-black bg-gray-100 p-4 focus:outline-none"
              type="text"
              onChange={(e) =>
                setFormData((old) => ({
                  ...old,
                  event_description: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <label className="font-semibold">{t("inputs.5.label")}</label>
            <input
              className="text-black bg-gray-100 p-4 focus:outline-none"
              type="file"
            />
          </div>

          <div className="mt-10 ">
            <Button className="w-full">Ajouter l&apos;évenement</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
