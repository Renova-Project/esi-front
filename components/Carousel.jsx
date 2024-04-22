"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ children, settings, sliderRef }) {
  return (
    <div className="relative">
      <Slider
        ref={(ref) => {
          sliderRef = ref;
        }}
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
}
