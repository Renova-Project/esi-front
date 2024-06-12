import Image from "next/image";
import { cn } from "@/lib/utils";
import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });

export default function MissionsSection({ lab }) {
    return <section className="grid grid-cols-2 gap-x-16 container py-10 lg:py-20">
        <div className="space-y-8">
            <h2 className={cn(sourceSerif.className, "text-2xl lg:text-3xl mb-10 font-bold")}>Missions de <span className="text-crayola">{String(lab).toUpperCase()}</span></h2>
            <p className="text-lg opacity-70 leading-10 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis dignissimos quaerat nulla eum corrupti in vitae doloribus, dolore veniam a, consectetur inventore ut asperiores unde hic exercitationem minima earum harum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, fugiat at. Expedita et dolorem nemo fugit aperiam vitae delectus rerum numquam consectetur placeat similique officia non hic suscipit, perferendis repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos alias consequatur nobis, laborum ipsum necessitatibus voluptas nisi odio repellat possimus saepe dolor blanditiis, laboriosam, in itaque? Sed, repellendus debitis.
            </p>
        </div>
        <Image className="w-full" src="/labs/missions.png" width={800} height={800} />
    </section>
}