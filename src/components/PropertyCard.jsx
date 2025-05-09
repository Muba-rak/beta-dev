import React from "react";
import chain from "../assets/link.png";
import camera from "../assets/camera.png";
import picture from "../assets/photo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineBathtub } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";
import heart from "../assets/heart.png";
import share from "../assets/share.png";
import arrow from "../assets/arrow.png";
import { formatCurrency } from "../utils/formatCurrency";
import { Link } from "react-router-dom";
const PropertyCard = ({
  _id,
  image,
  availability,
  title,
  location,
  bedrooms,
  bathrooms,
  price,
}) => {
  return (
    <Link
      to={`/property/${_id}`}
      className=" mx-auto lg:mx-0 max-w-[360px] w-full"
    >
      <div className=" mb-4 rounded-[10px] border border-[#DDD8D8] h-[480px]">
        <div className="relative h-1/2">
          <img
            src={image}
            alt={title}
            className="w-full rounded-t-[10px] h-full object-cover"
          />
          <p className="bg-green-600 p-2 inline-block text-white rounded-sm absolute top-2.5 left-2.5">
            Featured
          </p>
          <p className="bg-gray-300 p-2 inline-block text-white rounded-sm absolute top-2.5 right-2.5">
            For {availability}
          </p>

          <div className="flex gap-2 justify-end absolute bottom-2.5 right-2.5">
            <img src={chain} alt="chain" />
            <img src={camera} className="" alt="camera" />
            <img src={picture} alt="picture" />
          </div>
        </div>
        <div className="p-3.5 mt-2.5">
          <h1 className="text-[20px] text-[#444444] font-semibold"> {title}</h1>
          <p className="flex items-center gap-2 mt-1.5 text-[#666666] text-sm">
            <FaMapMarkerAlt color="gray" /> {location}
          </p>
          <div className="flex items-center gap-[28px] text-[#666666] text-[16px] mt-[15px] mb-[30px]">
            <p className="flex items-center gap-2">
              {" "}
              <LiaBedSolid /> {bedrooms} Bedrooms
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineBathtub /> {bathrooms} Bathrooms
            </p>
          </div>
          <hr className="text-gray-400 my-5" />
          <div className="flex items-center justify-between">
            <h1 className="text-[22px] flex items-center gap-2 text-[#373737] ">
              {/* <TbCurrencyNaira /> */}
              {formatCurrency(price)}
            </h1>
            <div className="flex items-center gap-4.5 ">
              <img src={arrow} alt="arrow" />
              <img src={share} alt="share" />
              <img src={heart} alt="love" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
