import EventsArticlesSection from "@/components/labs/EventsArticlesSection"
import MissionsSection from "@/components/labs/MissionsSection"
import OrganigrammeSection from "@/components/labs/OrganigrammeSection"
import SearchAxesSection from "@/components/labs/SearchAxesSection"

export default function PresentationPage({ params }) {
    const { lab } = params

    return <>
        <MissionsSection lab={lab} />
        <SearchAxesSection />
        <OrganigrammeSection />
        <EventsArticlesSection />
    </>
}