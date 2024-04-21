"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ children, settings }) {
  return (
    <div className="relative">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
