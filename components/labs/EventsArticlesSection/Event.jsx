import { GrLocation } from "react-icons/gr"

export default function Event({ event }) {
    const { day, month, title, location, timing } = event

    return <div className="flex">
        <div className="flex flex-col justify-center">
            <h4 className="text-3xl font-semibold text-honolulu">{day}</h4>
            <h5 className="text-2xl">{month}</h5>
        </div>
        <div className="mx-4 h-20 w-1 bg-gray-300" />
        <div className="space-y-4">
            <h5 className="text-justify">{title}</h5>
            <div className="flex justify-between opacity-70 items-center">
                <div className="flex items-center gap-1">
                    <GrLocation />
                    <span>{location}</span>
                </div>
                <span>{timing}</span>
            </div>
        </div>
    </div>
}