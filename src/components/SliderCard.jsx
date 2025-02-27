import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
const SliderCard = ({
  _id,
  image,
  title,
  location,
  bedrooms,
  bathrooms,
  squareMeter,
  price,
}) => {
  return (
    <div className="relative h-[412px] w-[300px] mx-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-full rounded-lg object-cover"
      />
      <div className="absolute bottom-0 w-full p-2.5 bg-[#4A4A4C33]   h-[142px] text-white ">
        <h2 className="text-[18px] font-semibold "> {title} </h2>
        <p className="text-[20px] font-semibold flex gap-2 items-center">
          {" "}
          <TbCurrencyNaira />
          {price}{" "}
        </p>
        <div className="flex items-center gap-3 text-[14px] my-2.5">
          <div className="border-r-2 border-r-gray-400 pr-3">
            {bedrooms}
            <span className="ps-2">Bed</span>
          </div>

          <div className="border-r-2 border-r-gray-400 pr-3">
            {bathrooms}
            <span className="ps-2">Baths</span>
          </div>

          <div>
            {squareMeter}
            <span className="ps-2">Sq Ft</span>
          </div>
        </div>
        <p className="flex gap-2 items-center font-normal text-[15px]">
          <FaMapMarkerAlt /> {location}{" "}
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
