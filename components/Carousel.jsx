"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ children }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          width: "fit-content",
        }}
      >
        <ul className="lg:hidden" style={{ margin: "0px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "1px white solid",
        }}
      ></div>
    ),
  };
  return (
    <div className="relative">
      <Slider {...settings}>{children}</Slider>{" "}
    </div>
  );
}
