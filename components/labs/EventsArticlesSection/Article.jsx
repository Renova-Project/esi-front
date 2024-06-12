import Image from "next/image"
import Link from "next/link"

export default function Article({ article }) {
    const { image, title } = article

    return <Link href="#" className="block px-2">
        <div className="space-y-4">
            <Image src={image} width={480} height={480} className="h-72 object-cover" />
            <h6>{title}</h6>
        </div>
    </Link>
}