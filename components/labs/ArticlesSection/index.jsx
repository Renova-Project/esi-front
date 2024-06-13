import Article from "./Article";
import ArticlesSidebar from "./ArticlesSidebar";

const artciles = [
    {
        title: "Seminaire sur la blockchain",
        authorPic: "/labs/ghomari.png",
        authorName: "GHOMARI Abdessamed",
        date: "12 septembre 2020",
        content: "Je mène actuellement une étude approfondie sur l'impact de la pollution lumineuse sur la biodiversité nocturne. Cette recherche vise à analyser comment l'augmentation de la lumière...",
        picture: "/labs/seminaire.png"
    },
    {
        title: "Seminaire sur la blockchain",
        authorPic: "/labs/ghomari.png",
        authorName: "GHOMARI Abdessamed",
        date: "12 septembre 2020",
        content: "Je mène actuellement une étude approfondie sur l'impact de la pollution lumineuse sur la biodiversité nocturne. Cette recherche vise à analyser comment l'augmentation de la lumière...",
        picture: "/labs/seminaire.png"
    },
    {
        title: "Seminaire sur la blockchain",
        authorPic: "/labs/ghomari.png",
        authorName: "GHOMARI Abdessamed",
        date: "12 septembre 2020",
        content: "Je mène actuellement une étude approfondie sur l'impact de la pollution lumineuse sur la biodiversité nocturne. Cette recherche vise à analyser comment l'augmentation de la lumière...",
        picture: "/labs/seminaire.png"
    },
]

export default function ArticlesSection() {
    return <section className="bg-grayishBg">
        <div className="container py-10 lg:py-20 grid grid-cols-3 gap-x-16">
            <ArticlesSidebar />
            <div className="col-span-2 space-y-8">
                {artciles.map((article, index) => <Article key={index} article={article} />)}
            </div>
        </div>
    </section>
}