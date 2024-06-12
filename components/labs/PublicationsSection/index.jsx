import { Source_Serif_4 } from "next/font/google";
import PublicationCard from "./PublicationCard"
import { cn } from "@/lib/utils";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
});


const publications = [
    {
        id: 1,
        image: "/SID.jpg",
        date: "1 Mars 2024",
        title: "Training and Generalization Errors for Underparameterized Neural Networks"
    },
    {
        id: 2,
        image: "/SID.jpg",
        date: "1 Mars 2024",
        title: "Training and Generalization Errors for Underparameterized Neural Networks"
    },
    {
        id: 3,
        image: "/SID.jpg",
        date: "1 Mars 2024",
        title: "Training and Generalization Errors for Underparameterized Neural Networks"
    },
    {
        id: 4,
        image: "/SID.jpg",
        date: "1 Mars 2024",
        title: "Training and Generalization Errors for Underparameterized Neural Networks"
    },
    {
        id: 5,
        image: "/SID.jpg",
        date: "1 Mars 2024",
        title: "Training and Generalization Errors for Underparameterized Neural Networks"
    },
]

export default function PublicationsSection() {
    return <section className="bg-grayishBg">
        <div className="container py-10 lg:py-20">
            <h2
                className={cn(
                    "font-bold text-2xl lg:text-3xl mb-10",
                    sourceSerif.className
                )}
            >
                Publications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publications.map(publication => <PublicationCard key={publication.id} publication={publication} />)}
            </div>
        </div>
    </section>
}