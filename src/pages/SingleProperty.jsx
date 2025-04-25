import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
//useParms
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineBathtub } from "react-icons/md";

import { LiaBedSolid } from "react-icons/lia";
import { formatCurrency } from "../utils/formatCurrency";
import { PiMapPinArea } from "react-icons/pi";
import SliderProperty from "../components/SliderProperty";
import { axiosInstance } from "../utils/axiosConfig";

const SingleProperty = () => {
  const { propertyId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [property, setProperty] = useState({});

  useEffect(() => {
    const getProperty = async () => {
      const { data } = await axiosInstance(`/property/${propertyId}`);
      console.log(data);
      setIsLoading(false);
      setProperty(data.property);
    };
    getProperty();
  }, [propertyId]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div>
      <Nav bg={"bg-green-800"} />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="custom-layout py-5 flex flex-col lg:flex-row justify-between gap-5 items-center lg:items-start">
          <div className="w-full lg:w-1/2">
            <img
              src={property.image}
              alt={property.title}
              className="w-full object-cover rounded-lg h-[400px]"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#444444] font-semibold">
              {" "}
              {property.title}
            </h1>
            <p className="flex items-center gap-2 mt-1.5 text-[#666666] text-sm">
              <FaMapMarkerAlt color="gray" /> {property.location}
            </p>
            <div className="flex items-center gap-[10px] md:gap-[28px] text-[#666666] text-[16px] mt-[15px] mb-[30px]">
              <p className="flex items-center gap-2">
                {" "}
                <LiaBedSolid /> {property.bedrooms} Bedrooms
              </p>
              <p className="flex items-center gap-2">
                <MdOutlineBathtub /> {property.bathrooms} Bathrooms
              </p>
              <p className="flex items-center gap-2">
                <PiMapPinArea /> {property.squareMeter} sqFt
              </p>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              sint sunt illum optio ea voluptatum fugiat eaque iure nemo
              consequatur corporis amet nihil minus tempora cum nesciunt, autem
              repellat soluta.
            </p>
            <hr className="text-gray-400 my-5" />
            <div className="flex items-center justify-between">
              <h1 className="text-[22px] flex items-center gap-2 text-[#373737] ">
                Price:
                {formatCurrency(property.price)}
              </h1>
            </div>
            <div className="mt-4">
              <h1>Contact Owner</h1>
              <div className="flex gap-2 text-gray-400">
                <p>+234 805 6789 34</p>
                <p>betahome@google.com</p>
              </div>
            </div>
          </div>
        </section>
      )}
      <SliderProperty />
      <Footer />
    </div>
  );
};

export default SingleProperty;
