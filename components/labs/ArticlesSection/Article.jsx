import Image from "next/image"

export default function Article({ article }) {
    const { title, authorPic, authorName, date, content, picture } = article

    return <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-honolulu">{title}</h3>
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Image src={authorPic} height={360} width={360} className="w-16 h-16" />
                <div>
                    <h4 className="font-semibold text-lg">{authorName}</h4>
                    <h5>{date}</h5>
                </div>
            </div>
            <div className="space-y-4">
                <p>{content}</p>
                <Image width={560} height={560} src={picture} className="w-full h-96 object-cover" />
            </div>
        </div>

    </div>
}