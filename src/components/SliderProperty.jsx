import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import { properties } from "../data";
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#F4F4F4",
        height: "54px",
        width: "54px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "27px",
        position: "absolute",
        top: "50%", // Center vertically
        right: "-18px", // Adjust spacing from right
        transform: "translateY(-50%)", // Center vertically
        zIndex: "1",
        cursor: "pointer",
      }}
    >
      <FaChevronRight style={{ fontSize: "20px", color: "#000" }} />
    </div>
  );
};

// Custom Previous Arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#F4F4F4",
        height: "54px",
        width: "54px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "27px",
        position: "absolute",
        top: "50%", // Center vertically
        left: "-25px", // Adjust spacing from left
        transform: "translateY(-50%)", // Center vertically
        zIndex: "1",
        cursor: "pointer",
      }}
    >
      <FaChevronLeft style={{ fontSize: "20px", color: "#000" }} />
    </div>
  );
};
const SliderProperty = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false, // Disable autoplay
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="custom-layout">
      <h1 className="text-center font-semibold text-2xl lg:text-5xl text-[#0f1a1e] my-[55px]">Discover Our Popular Properties</h1>
      <Slider {...settings} className="slider-container">
        {properties.map((property) => {
          return <SliderCard key={property._id} {...property} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderProperty;
