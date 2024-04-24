import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
const Event = ({ startDate, title }) => {
  const date = new Date(startDate);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  return (
    <div className="md:max-w-80 2xl:max-w-96">
      <div className="w-full flex items-center justify-center gap-2 flex-1">
        <div className="flex flex-col justify-center items-center text-honolulu font-semibold shadow-md border-b-2 border-b-honolulu py-3 px-8">
          <p className={inter.className}>{month}</p>
          <p className={inter.className}>{day}</p>
        </div>
        <p className="text-sm md:text-base">
          {title.length > 60 ? title.slice(0, 60) + "..." : title}
        </p>
      </div>
    </div>
  );
};

export default Event;
