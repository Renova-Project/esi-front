import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import HeroSection from "@/components/labs/HeroSection"

export default function LabPage({ params, children }) {
    const { lab } = params

    return <>
        <Nav />
        <HeroSection lab={lab} />
        {children}
        <Footer />
    </>
}