"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import Event from "./Event";
import Carousel from "@/components/Carousel";
import { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Article from "./Article";
import { sourceSerif } from "@/lib/styles";

const events = [
    {
        day: 16,
        month: "May",
        title: "Algerian Doctoral Conference on Computer Science ADCCS’2024",
        location: "ESI, Alger",
        timing: "8AM - 10:30AM"
    },
    {
        day: 16,
        month: "May",
        title: "Algerian Doctoral Conference on Computer Science ADCCS’2024",
        location: "ESI, Alger",
        timing: "8AM - 10:30AM"
    },
    {
        day: 16,
        month: "May",
        title: "Algerian Doctoral Conference on Computer Science ADCCS’2024",
        location: "ESI, Alger",
        timing: "8AM - 10:30AM"
    }
]

const articles = [
    {
        id: 1,
        image: "/sublinks1.jpg",
        title: "Article 1",
    },
    {
        id: 2,
        image: "/sublinks1.jpg",
        title: "Article 2",
    },
    {
        id: 3,
        image: "/sublinks1.jpg",
        title: "Article 3",
    }
]

export default function EventsArticlesSection() {
    const sliderRef = useRef(null)

    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current.slickPrev();
    };


    return <section className="bg-grayishBg">
        <div className="container py-10 lg:py-20 grid grid-cols-3 gap-16">
            <div className="col-span-1 flex justify-between flex-col">
                <h2
                    className={cn(
                        "font-bold text-2xl lg:text-3xl mb-10",
                        sourceSerif.className
                    )}
                >
                    Evénements
                </h2>
                <div className="space-y-8">
                    {events.map((event, index) => <Event key={index} event={event} />)}
                </div>
                <Link className="block border border-honolulu text-honolulu w-56 font-semibold mx-auto py-4 text-center mt-12 hover:bg-honolulu hover:text-white duration-300" href="#">
                    Voir tous les événements
                </Link>
            </div>
            <div className="col-span-2 flex flex-col justify-between">
                <h2
                    className={cn(
                        "font-bold text-2xl lg:text-3xl mb-10",
                        sourceSerif.className
                    )}
                >
                    Articles récents
                </h2>
                <div>
                    <Carousel
                        refAssignment={sliderRef}
                        settings={
                            {
                                infinite: true,
                                speed: 500,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                autoplay: true,
                                autoplaySpeed: 3000
                            }
                        }
                    >
                        {articles.map((article) => <Article key={article.id} article={article} />)}
                    </Carousel>
                </div>
                <div className="flex items-center justify-between">
                    <Link href="#">
                        <span className="border block border-honolulu text-honolulu w-56 font-semibold mx-auto py-4 text-center hover:bg-honolulu hover:text-white duration-300">Voir tous les actualités</span>
                    </Link>
                    <div className="space-x-8 text-honolulu text-4xl">
                        <button onClick={previous}>
                            <FaChevronLeft />
                        </button>
                        <button onClick={next}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}