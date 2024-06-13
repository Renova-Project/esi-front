import Image from "next/image";
import Link from "next/link";

export default function TeamCard({ team }) {
    const { image, name, slogan, id } = team

    return <div className="grid grid-cols-5 rounded-lg bg-white shadow-lg overflow-hidden">
        <Image className="col-span-2" height={480} width={360} src={image} />
        <div className="col-span-3 px-4 py-8 flex flex-col justify-between">
            <div className="space-y-4">
                <h4 className="text-lg font-semibold text-honolulu">{name}</h4>
                <h5 className="font-medium">{slogan}</h5>
            </div>
            <div className="flex justify-end">
                <Link className="block px-8 bg-honolulu py-2 text-white border border-honolulu hover:bg-white hover:text-honolulu duration-300" href="#" >
                    Voir plus
                </Link>
            </div>
        </div>
    </div>
}