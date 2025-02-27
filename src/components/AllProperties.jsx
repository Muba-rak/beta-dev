import React from "react";
import { properties } from "../data";

import iconfilter from "../assets/icon.png";
import PropertyCard from "./PropertyCard";

const AllProperties = () => {
  return (
    <div className="custom-layout mt-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-xl">
          <div className="flex gap-2">
            <img src={iconfilter} alt="" />{" "}
            <span className="text-sm md:text-lg"> More Filter</span>
          </div>
          <p className="text-sm md:text-lg">Showing 1 – 10 of 15 results</p>
        </div>
        <form className="flex sm:gap-2 gap-3 items-center ">
          {" "}
          <p
            style={{
              fontWeight: "400",
              color: "#717171",
              marginBottom: "0",
            }}
            className="text-sm md:text-lg"
          >
            Sort by:
          </p>
          <select
            name=""
            id="defaultProperty"
            style={{ border: "none", outline: "none", color: "#717171" }}
            className="custom-select"
          >
            <option value=""> Default</option>
            <option value=""> Default</option>
            <option value=""> Default</option>
          </select>
        </form>
      </div>

      {/* all properties */}
      <div className="flex items-center gap-5 xl:justify-between lg:justify-evenly flex-wrap mt-3.5">
        {properties.map((property) => {
          return <PropertyCard key={property._id} {...property} />;
        })}
      </div>
    </div>
  );
};

export default AllProperties;
