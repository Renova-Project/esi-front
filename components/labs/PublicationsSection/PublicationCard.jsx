import Image from "next/image"

export default function PublicationCard({ publication }) {
    const { image, date, title } = publication

    return <div className="space-y-2">
        <Image height={480} width={480} className="w-full h-64 object-cover" src={image} />
        <h6>{date}</h6>
        <h5 className="font-semibold underline">{title}</h5>
    </div>
}