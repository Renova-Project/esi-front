import Table, { TableHead, TableRow } from "@/components/Table";
import { cn } from "@/lib/utils";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
});


const columns = ["Image", "Nom / Prénom", "Sigle de l'équipe", "Email"]

const researchers = [
    {
        image: "/SID.jpg",
        name: "Chalal Rachid",
        team: "SIT",
        email: "r_chalal@esi.dz"
    },
    {
        image: "/SID.jpg",
        name: "Chalal Rachid",
        team: "SIT",
        email: "r_chalal@esi.dz"
    },
    {
        image: "/SID.jpg",
        name: "Chalal Rachid",
        team: "SIT",
        email: "r_chalal@esi.dz"
    },
    {
        image: "/SID.jpg",
        name: "Chalal Rachid",
        team: "SIT",
        email: "r_chalal@esi.dz"
    },
    {
        image: "/SID.jpg",
        name: "Chalal Rachid",
        team: "SIT",
        email: "r_chalal@esi.dz"
    },
    {
        image: "/SID.jpg",
        name: "Chalal Rachid",
        team: "SIT",
        email: "r_chalal@esi.dz"
    },
    {
        image: "/SID.jpg",
        name: "Chalal Rachid",
        team: "SIT",
        email: "r_chalal@esi.dz"
    },
    {
        image: "/SID.jpg",
        name: "Chalal Rachid",
        team: "SIT",
        email: "r_chalal@esi.dz"
    }
]

export default function ResearchersDirectorySection() {
    return <section className="bg-grayishBg">
        <div className="container py-10 lg:py-20">
            <h2
                className={cn(
                    "font-bold text-2xl lg:text-3xl mb-10",
                    sourceSerif.className
                )}
            >
                Annuaire des chercheurs
            </h2>
            <div className="flex justify-end my-8">
                <div className="flex items-center px-8 py-3 rounded-full bg-white shadow-md">
                    <input className="outline-none" type="text" />
                    <IoSearch className="text-2xl"/>
                </div>
            </div>
            <Table>
                <TableHead className="grid-cols-4 bg-white border-b-gray-300 border-t-transparent border-l-transparent border-r-transparent text-black font-semibold">
                    {columns.map((column, index) => <span key={index}>{column}</span>)}
                </TableHead>
                {researchers.map((researcher, index) => (
                    <TableRow className="grid-cols-4 text-black/70 bg-white border-b-gray-200" key={index}>
                        <span>
                            <Image
                                width={128}
                                height={128}
                                className="w-10 h-10 rounded-full"
                                src={researcher.image}
                            />
                        </span>
                        <span className="my-auto">{researcher.name}</span>
                        <span className="my-auto">{researcher.team}</span>
                        <span className="my-auto">{researcher.email}</span>
                    </TableRow>
                ))}
            </Table>
        </div>
    </section>
}