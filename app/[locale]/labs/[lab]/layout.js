import HeroSection from "@/components/labs/HeroSection"

export default function LabPage({ params, children }) {
    const { lab } = params

    return <>
        <HeroSection lab={lab} />
        {children}
    </>
}