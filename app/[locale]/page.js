import Nav from "@/components/Nav";
import Carousel from "@/components/Carousel";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations(["Nav"]);
  return (
    <div>
      <Nav />
      <main>
        <Carousel>
          <div className="relative bg-[url('/hero.jpg')] h-screen bg-cover bg-center">
            <div className="bg-darkblue/60 absolute top-0 left-0 w-full h-full " />
            <h1 className="text-white ">
              Ecole nationale supérieure d'informatique
            </h1>
          </div>
          <div className="bg-[url('/hero.jpg')] h-screen bg-cover bg-center">
            <div className="bg-darkblue/60 h-full" />
          </div>
        </Carousel>
      </main>
    </div>
  );
}
