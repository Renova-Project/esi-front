"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ children, settings, refAssignment,resposive }) {
  return (
    <div className="relative">
      <Slider ref={refAssignment} {...settings} responsive={resposive}>
        {children}
      </Slider>
    </div>
  );
}
