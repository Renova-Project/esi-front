import TeamCard from "./TeamCard"

export default function TeamsSection() {
    const teams = [
        {
            id: 1,
            name: "Codesign",
            slogan: "Le slogan de l'équipe",
            image: "/studies/engineering/sit-careers3.png"
        },
        {
            id: 2,
            name: "Codesign",
            slogan: "Le slogan de l'équipe",
            image: "/studies/engineering/sit-careers3.png"
        },
        {
            id: 3,
            name: "Codesign",
            slogan: "Le slogan de l'équipe",
            image: "/studies/engineering/sit-careers3.png"
        },
        {
            id: 4,
            name: "Codesign",
            slogan: "Le slogan de l'équipe",
            image: "/studies/engineering/sit-careers3.png"
        },
    ]

    return <section className="bg-grayishBg">
        <div className="container py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            {teams.map(team => <TeamCard team={team} />)}
        </div>
    </section>
}