import NewsPage from "@/components/labs/pages/NewsPage"
import PresentationPage from "@/components/labs/pages/PresentationPage"
import TeamsPage from "@/components/labs/pages/TeamsPage"

export default function LabSectionPage({ params }) {
    const { section } = params

    switch (section) {
        case "presentation":
            return <PresentationPage />
        case "news":
            return <NewsPage />
        case "teams":
            return <TeamsPage />
        default:
            return <h1>Page doesn't exist</h1>
    }
}