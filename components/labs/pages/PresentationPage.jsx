import EventsArticlesSection from "../EventsArticlesSection";
import MissionsSection from "../MissionsSection";
import OrganigrammeSection from "../OrganigrammeSection";
import SearchAxesSection from "../SearchAxesSection";

export default function PresentationPage({ lab }) {
    return <>
        <MissionsSection lab={lab} />
        <SearchAxesSection />
        <OrganigrammeSection />
        <EventsArticlesSection />
    </>
}