import Nav from "@/components/Nav";
import { useTranslations } from "next-intl";
import { Donegal_One, Source_Serif_4 } from "next/font/google";
import NumbersSection from "./NumbersSection";
import HeroSection from "./HeroSection";
import SchoolPresentation from "./SchoolPresentation";
import Footer from "@/components/Footer";

const donegalOne = Donegal_One({
  subsets: ["latin"],
  weight: "400",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

export default function Home() {
  const t = useTranslations(["Landing"]);

  return (
    <div>
      <Nav />
      <HeroSection />
      <NumbersSection />
      <SchoolPresentation />
      <Footer />
    </div>
  );
}
