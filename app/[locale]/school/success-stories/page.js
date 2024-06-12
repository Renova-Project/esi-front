import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});
const events = [
  {
    title:
      "Deux  membres du club GDG remporte la deuxième place dans le plus grand  hackathon de l'intelligence artificielle dans la région MENA",
    date: "Mars 24,2024",
    imageUrl: "/school/success/1.png",
  },
  {
    title:
      "Deux  membres du club GDG remporte la deuxième place dans le plus grand  hackathon de l'intelligence artificielle dans la région MENA",
    date: "Mars 24,2024",
    imageUrl: "/school/success/1.png",
  },
  {
    title:
      "Deux  membres du club GDG remporte la deuxième place dans le plus grand  hackathon de l'intelligence artificielle dans la région MENA",
    date: "Mars 24,2024",
    imageUrl: "/school/success/1.png",
  },
];
function Page() {
  const t = useTranslations(["School.Stories"]);
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
              "font-bold hidden lg:block lg:text-5xl max-w-2xl mb-2 lg:mb-5"
            )}
          >
            {t("title")}
          </h1>
        </div>
      </section>
      <section className="bg-grayishBg py-16 lg:py-20">
        <div className="container grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((ev) => (
            <div key={ev.imageUrl}>
              <Image
                src={ev.imageUrl}
                className="w-full h-56 object-cover"
                width={400}
                height={100}
                alt=""
              />
              <div className="font-medium mt-2">{ev.title}</div>
              <div className="flex justify-between items-center">
                <Link href="/school/success-stories/1">
                  <Button className="mt-2 py-2">{t("readMore")}</Button>
                </Link>
                <span className="text-sm text-darkgrey">{ev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
