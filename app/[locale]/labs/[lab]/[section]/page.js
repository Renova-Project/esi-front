import ArticlesPage from "@/components/labs/pages/ArticlesPage"
import ContactPage from "@/components/labs/pages/ContactPage"
import DirectoryPage from "@/components/labs/pages/DirectoryPage"
import NewsPage from "@/components/labs/pages/NewsPage"
import PresentationPage from "@/components/labs/pages/PresentationPage"
import TeamsPage from "@/components/labs/pages/TeamsPage"

export default function LabSectionPage({ params }) {
    const { section, lab } = params

    switch (section) {
        case "presentation":
            return <PresentationPage lab={lab} />
        case "news":
            return <NewsPage />
        case "teams":
            return <TeamsPage />
        case "articles":
            return <ArticlesPage />
        case "directory":
            return <DirectoryPage />
        case "contact":
            return <ContactPage />
        default:
            return <h1>Page doesn't exist</h1>
    }
}