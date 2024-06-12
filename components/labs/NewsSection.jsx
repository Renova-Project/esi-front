import { cn } from "@/lib/utils";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
});

export default function NewsSection() {
    const event = {
        title: "Séminaire de Pr Farid Meziane",
        date: "8 février 2024",
        location: "Amphi A1"
    }

    return <section className="relative">
        <Image
            height={1080}
            width={1920}
            className="relative z-0 w-11/12"
            src="/labs/news.png"
        />
        <div className="bg-darkblue absolute top-0 right-0 h-full w-full z-10" style={{ clipPath: "polygon(80% 0, 100% 0, 100% 100%, 50% 100%)" }} />
        <div className="absolute top-0 right-0 h-full w-1/3 text-center flex flex-col justify-between text-white z-30 py-20">
            <div />
            <div className={"space-y-8 font-semibold"}>
                <h2 className={cn("text-5xl", sourceSerif.className)}>Evénement récent</h2>
                <h3 className="text-3xl">{event.title}</h3>
            </div>
            <div className="flex justify-around text-3xl opacity-70">
                <span>{event.date}</span>
                <span>{event.location}</span>
            </div>
        </div>
    </section>
}