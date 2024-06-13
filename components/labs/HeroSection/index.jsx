
import { Link } from "@/navigation"
import LabsNavigation from "./LabsNavigation"

export default function HeroSection({ lab }) {
    const labsData = {
        lmcs: {
            title1: "LMCS",
            title2: "Laboratoire des Méthodes de Conception des systèmes",
            description: "Le Laboratoire de Méthodes de Conception de Systèmes (LMCS) créé en 1999 est rattaché à L’Ecole nationale Supérieure d’Informatique, Alger."
        },
        lcsi: {
            title1: "LCSI",
            title2: "Laboratoire des Méthodes de Conception des systèmes",
            description: "Le Laboratoire de Méthodes de Conception de Systèmes (LMCS) créé en 1999 est rattaché à L’Ecole nationale Supérieure d’Informatique, Alger."
        },
        fablab: {
            title1: "FABLAB",
            title2: "Laboratoire des Méthodes de Conception des systèmes",
            description: "Le Laboratoire de Méthodes de Conception de Systèmes (LMCS) créé en 1999 est rattaché à L’Ecole nationale Supérieure d’Informatique, Alger."
        },
    }

    return <section>
        <div className="text-white" style={{ background: "url('/labs/hero-bg.png') no-repeat", backgroundSize: "cover" }}>
            <LabsNavigation labs={labsData} lab={lab}/>
            <div className="container py-10 lg:py-20 grid grid-cols-2 gap-4">
                <div>
                    <h1 className="text-6xl font-bold">{labsData[lab].title1}</h1>
                    <div className="h-px bg-white w-full mt-4 mb-6" />
                    <h3 className="text-3xl">{labsData[lab].title2}</h3>
                </div>
                <div className="mt-56 space-y-4 bg-[#273E5A44] backdrop-blur-md p-4 border boder-white">
                    <h4 className="text-xl font-semibold">Presentation</h4>
                    <p className="text-lg font-medium">{labsData[lab].description}</p>
                    <div className="flex justify-end">
                        <Link className="block px-4 py-2 bg-[#0061B1] font-semibold hover:bg-white duration-300 hover:text-honolulu" href="#">
                            Entrepot des mémoires
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
}