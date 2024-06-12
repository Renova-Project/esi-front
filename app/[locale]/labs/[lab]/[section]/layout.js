import LabsNavigation from "@/components/labs/LabsNavigation";

export default function LabSectionLayout({ params, children }) {
    const { lab, section } = params

    return <>
        <LabsNavigation lab={lab} section={section} />
        {children}
    </>
}