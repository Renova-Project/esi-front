import LabsSectionNavigation from "@/components/labs/shared/LabsSectionNavigation"


export default function LabSectionLayout({ params, children }) {
    const { lab, section } = params

    return <>
        <LabsSectionNavigation lab={lab} section={section} />
        {children}
    </>
}