import { cn } from "@/lib/utils";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
});


export default function OrganigrammeSection() {
    return <section className="bg-grayishBg">
        <div className="container py-10 lg:py-20">
            <h2
                className={cn(
                    "font-bold text-2xl lg:text-3xl lg:text-center mb-10",
                    sourceSerif.className
                )}
            >
                Organigramme
            </h2>
            <div>
                <Image width={1920} height={1080} src="/labs/organigramme.png" />
            </div>
        </div>
    </section>
}