import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { AiOutlineCaretRight } from "react-icons/ai";

export default function ArticlesSidebar() {
    return <div className="col-span-1">
        <div className="flex gap-x-4">
            <div className="bg-[#E2EBFA] flex items-center gap-2 p-4 rounded-full w-full">
                <FaSearch />
                <input className="outline-none w-full px-4 bg-[#E2EBFA]" type="search" placeholder="Search..." />
            </div>
            <button className="text-3xl bg-gradient-to-b from-[#05316C] via-[#0D4DA4] to-[#105AC0] p-3 text-white">
                <IoFilterSharp />
            </button>
        </div>
        <div className="mt-4">
            <h4 className="bg-gradient-to-b from-[#05316C] via-[#0D4DA4] to-[#105AC0] py-3 px-8 text-white font-semibold">Articles récents</h4>
            <div className="p-6 bg-gray-200 space-y-2">
                <div className="space-x-2 flex items-start">
                    <AiOutlineCaretRight className="text-honolulu text-2xl" />
                    <p>LMCS Seminar: La convergence de l’internet des objets et le cloud et les problèmes de confiance</p>
                </div>
                <div className="space-x-2 flex items-start">
                    <AiOutlineCaretRight className="text-honolulu text-2xl" />
                    <p>LMCS Seminar: La convergence de l’internet des objets et le cloud et les problèmes de confiance</p>
                </div>
                <div className="space-x-2 flex items-start">
                    <AiOutlineCaretRight className="text-honolulu text-2xl" />
                    <p>LMCS Seminar: La convergence de l’internet des objets et le cloud et les problèmes de confiance</p>
                </div>
            </div>
        </div>
        <div>
            <h4 className="bg-gradient-to-b from-[#05316C] via-[#0D4DA4] to-[#105AC0] py-3 px-8 text-white font-semibold">Catégories</h4>
            <div className="p-6 bg-gray-200 space-y-2">
                <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <label>A la Une</label>
                </div>
                <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <label>Séminaires</label>
                </div>
                <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <label>Soutenances</label>
                </div>
                <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <label>Success stories</label>
                </div>
                <div className="space-x-2 flex items-center">
                    <input type="checkbox" name="" id="" />
                    <label>Non classé</label>
                </div>
            </div>
        </div>
        <div>
            <h4 className="bg-gradient-to-b from-[#05316C] via-[#0D4DA4] to-[#105AC0] py-3 px-6 text-white font-semibold">Date</h4>
            <div className="p-6 bg-gray-200 space-y-4">
                <div>
                    <label className="inline-block w-12">From</label>
                    <input className="p-2 outline-none w-48" type="date" />
                </div>
                <div>
                    <label className="inline-block w-12">To</label>
                    <input className="p-2 outline-none w-48" type="date" />
                </div>
            </div>
            <div className="flex justify-end bg-gray-200 p-6 font-semibold">
                <button className="border px-12 py-2 border-honolulu text-honolulu hover:bg-honolulu duration-300 hover:text-white">
                    Reset
                </button>
            </div>
        </div>

    </div>
}