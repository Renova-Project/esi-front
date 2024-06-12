import Link from "next/link"

const links = {
    lmcs: [
        {
            label: "Présentation",
            link: "presentation"
        },
        {
            label: "Actualités",
            link: "actualite",
        },
        {
            label: "Equipes",
            link: "teams",
        },
        {
            label: "Articles",
            link: "articles",
        },
        {
            label: "Annuaire des cherchers",
            link: "directory"
        },
        {
            label: "Contact",
            link: "contact"
        }
    ],
    lcsi: [
        {
            label: "Présentation",
            link: "presentation"
        },
        {
            label: "Actualités",
            link: "news",
        },
        {
            label: "Equipes",
            link: "teams",
        },
        {
            label: "Articles",
            link: "articles",
        },
        {
            label: "Annuaire des cherchers",
            link: "directory"
        },
        {
            label: "Contact",
            link: "contact"
        }
    ],
    fablab: [
        {
            label: "Objectif",
            link: "objective"
        },
        {
            label: "inscription",
            link: "registration"
        },
        {
            label: "Contact",
            link: "contact"
        }
    ]
}

export default function LabsNavigation({ lab, section }) {
    return <section className="bg-grayishBg">
        <div className="container flex justify-between py-5 lg:py-10 uppercase font-semibold">
            {links[lab].map((link) => (
                <Link key={link.link} className="block" href="#">
                    <span className={`${section === link.link ? "text-honolulu font-bold" : ""}`}>
                        {link.label}
                    </span>
                </Link>
            ))}
        </div>
    </section>
}