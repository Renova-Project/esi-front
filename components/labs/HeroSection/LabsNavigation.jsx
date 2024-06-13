import { Link } from "@/navigation";
import { FaChevronRight } from "react-icons/fa";

export default function LabsNavigation({ labs, lab }) {
    return <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-1">
            {Object.keys(labs).map(key => (<Link key={key} href={`/labs/${key}/presentation`}>
                <div key={key} className={`flex ${lab === key ? "bg-gray-100 text-honolulu" : "bg-darkblue hover:bg-honolulu duration-300 text-white"} px-12 py-4 items-center justify-between`}>
                    <span className="font-semibold text-xl">{labs[key].title1}</span>
                    <span className={`text-2xl lg:text-3xl p-1 ${lab === key ? "border-honolulu" : "bg-[#5F9EFF44] border-white"} rounded-full border `}>
                        <FaChevronRight />
                    </span>
                </div>
            </Link>))}
        </div>
    </section>
}