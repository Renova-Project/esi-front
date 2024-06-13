import { cn } from "@/lib/utils";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { Link } from "@/navigation";
import Button from "@/components/Button";
import { API_URL, IMG_URL } from "@/lib/constants";
import { getTranslations } from "next-intl/server";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const getEvents = async () => {
  try {
    const res = await fetch(API_URL + "/events");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

async function Page() {
  const t = await getTranslations("Profile.Main");
  const events = await getEvents();
  console.log(events);
  return (
    <div>
      <section className="relative h-heroSectionMobile lg:h-heroSection   bg-cover bg-center flex items-center text-center">
        <Image
          src="/profile/main/hero.png"
          className="top-0 left-0 object-cover"
          fill
          alt=""
        />
        <div className="bg-gradient-to-b from-heroGradientStart/75 to-heroGradientEnd/60 absolute top-0 left-0 w-full h-full" />
        <div className="relative text-white container">
          <h1
            className={cn(
              sourceSerif.className,
              "font-bold text-2xl lg:text-6xl mb-2 lg:mb-5"
            )}
          >
            Bienvenue ETIC
          </h1>
        </div>
      </section>
      <section>
        <div className="container  py-20">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-center ${sourceSerif.className}`}
          >
            {t("events.title")}
          </h2>
          <div className="flex justify-end pt-8">
            <Link href="/profile/clubs/main/add-event">
              <Button>{t("events.shareBtn")}</Button>
            </Link>
          </div>
          <div className="grid mt-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id}>
                <Image
                  src={IMG_URL + event.image}
                  className="w-full h-56 object-cover"
                  width={400}
                  height={100}
                  alt=""
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm">{event.event_type}</span>
                  <span className="text-sm text-darkgrey">
                    {event.start_date.slice(0, 10)}
                  </span>
                </div>
                <div className="font-semibold mt-1">{event.event_name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
