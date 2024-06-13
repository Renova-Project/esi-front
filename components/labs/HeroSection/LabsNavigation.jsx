import { Link } from "@/navigation";

export default function LabsNavigation({ labs, lab }) {
    return <section className="bg-white">
        <div className="grid grid-cols-3 space-x-1">
            {Object.keys(labs).map(key => (<Link key={key} href={`/labs/${key}/presentation`}>
                <div key={key} className={`flex ${lab === key ? "bg-gray-100 text-honolulu" : "bg-darkblue hover:bg-honolulu duration-300 text-white"} px-12 py-4 items-center justify-between`}>
                    <span className="font-semibold text-xl">{labs[key].title1}</span>
                    <span className={`text-4xl ${lab === key ? "border-honolulu" : "bg-[#5F9EFF44] border-white"} rounded-full w-10 h-10 flex items-center justify-center border `}>{">"}</span>
                </div>
            </Link>))}
        </div>
    </section>
}