import { cn } from "@/lib/utils";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });

const axes = [
    {
        name: "Méthodes",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, id sit facere nulla mollitia aliquid voluptatibus nemo recusandae illum iusto similique minima. Corporis nam distinctio esse ipsum, numquam provident consequatur?"
    },
    {
        name: "Conception",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut repellendus blanditiis cum facere labore quisquam veniam cumque repellat ipsam harum accusamus animi ratione quae sint reprehenderit, reiciendis facilis quis.",
    },
    {
        name: "Conception",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, id sit facere nulla mollitia aliquid voluptatibus nemo recusandae illum iusto similique minima. Corporis nam distinctio esse ipsum, numquam provident consequatur?"
    },
];

export default function SearchAxesSection() {
    return <section className="bg-darkblue">
        <div className="container py-10 lg:py-20">
            <h2
                className={cn(
                    "font-bold text-2xl lg:text-3xl lg:text-center mb-10 text-white",
                    sourceSerif.className
                )}
            >
                Axes de recherches
            </h2>
            {axes.map((axe) => (
                <div
                    key={axe.name}
                    className="flex flex-col lg:flex-row group mb-8"
                >
                    <div
                        className={cn(
                            "bg-honolulu relative overflow-hidden px-20 py-10 text-center text-white font-bold text-xl transition-all lg:text-2xl group-hover:bg-black lg:w-1/4",
                            sourceSerif.className
                        )}
                    >
                        {axe.name}
                        <Image
                            className="absolute transition-all top-0 -right-full group-hover:right-0"
                            src="/studies/engineering/skill-card-layer1.svg"
                            width={100}
                            height={100}
                            alt=""
                        />
                        <Image
                            className="absolute transition-all bottom-0 -left-full group-hover:left-0"
                            src="/studies/engineering/skill-card-layer2.svg"
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>
                    <div className="bg-white p-4 shadow text-gray-600 lg:w-3/4">
                        {axe.description}
                    </div>
                </div>
            ))}
        </div>
    </section>
}

