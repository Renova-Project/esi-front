"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousel({
  children,
  settings,
  refAssignment,
  responsive,
}) {
  return (
    <div className="relative">
      <Slider ref={refAssignment} {...settings} responsive={responsive}>
        {children}
      </Slider>
    </div>
  );
}
