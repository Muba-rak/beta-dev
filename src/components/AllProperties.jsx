import React from "react";
// import { properties } from "../data";

import iconfilter from "../assets/icon.png";
import PropertyCard from "./PropertyCard";

const AllProperties = ({ properties, totalProperties, resetFilters }) => {
  return (
    <div className="custom-layout mt-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-xl">
          <div className="flex gap-2">
            <img src={iconfilter} alt="" />{" "}
            <button
              className="text-sm md:text-lg text-green-600 cursor-pointer"
              onClick={resetFilters}
            >
              {" "}
              Reset Filters
            </button>
          </div>
          <p className="text-sm md:text-lg">
            Showing 1 – {properties.length} of {totalProperties} results
          </p>
        </div>
        <form className="flex sm:gap-2 gap-3 items-center ">
          {" "}
          <p className="text-sm md:text-lg font-normal text-[#717171] mb-0">
            Sort by:
          </p>
          <select
            name=""
            id="defaultProperty"
            style={{ border: "none", outline: "none", color: "#717171" }}
            className="custom-select"
          >
            <option value=""> Default</option>
            <option value=""> Highest To Lowest</option>
            <option value=""> Lowest To Highest</option>
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
