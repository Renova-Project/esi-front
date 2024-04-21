"use client";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        bottom: "-10",
        right: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const SchoolPresentation = () => {
  const t = useTranslations(["Landing"]);
  return (
    <section className="bg-[#050E1C] text-white py-20">
      <div className="container flex items-center flex-col md:flex-row md:gap-20">
        <div className="flex-1 ">
          <h3 className="text-crayola font-bold text-xl">
            {t("presentation.beforeTitle")}
          </h3>
          <h2 className={cn("text-2xl font-bold my-4", sourceSerif.className)}>
            {t("presentation.title")}
          </h2>
          <p>{t("presentation.description")}</p>
          <div className="flex gap-x-8 gap-y-4 mt-8 flex-wrap">
            <Button className="flex-1 min-w-48">
              <span>{t("presentation.visit")}</span>
            </Button>
            <Button className="flex-1 min-w-48 bg-none border border-white">
              <span>{t("presentation.virtualVisit")}</span>
            </Button>
          </div>
        </div>
        <div className="flex-1 max-w-full md:max-w-[50%] mt-10">
          <Carousel
            settings={{
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
            }}
          >
            <div>
              <div className="h-52 md:h-64 bg-[url('/presentation.jpg')] bg-cover bg-center bg-white relative">
                {/* <Image fill src="/presentation.jpg" className="object-cover " /> */}
              </div>
            </div>
            <div>
              {/* <Image
                src="/presentation.jpg"
                width={600}
                height={400}
                alt="School"
                className="rounded-lg"
              /> */}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SchoolPresentation;
