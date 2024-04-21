"use client";
import React,{useEffect,useState} from 'react'
import Slider from 'react-slick';

const Partners = ({children}) => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 400) {
          setSlidesToShow(2);
        } else if (window.innerWidth < 810) {
          setSlidesToShow(3);
        } else {
          setSlidesToShow(4);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial call to set slidesToShow based on window width
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
      };
  return (
    <div className='lg:hidden flex justify-center items-center border-y-4 border-y-honolulu mb-8'>
        <div className='container py-3'>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    </div>
  )
}

export default Partners