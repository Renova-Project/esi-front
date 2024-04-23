"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ children,settings,refAssignment }) {
  return (
    <div className="relative">
      <Slider 
      ref={refAssignment} 
      {...settings}>
      {children}
    </Slider>
    </div>
  );
}
