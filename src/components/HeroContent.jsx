import React from "react";
import SearchForm from "./SearchForm";

const HeroContent = () => {
  return (
    <div className="text-white custom-layout flex justify-center items-center">
      <div className="w-full">
        <h1 className="text-3xl md:text-[68px] text-center font-bold mt-5">
          Browse Our Properties
        </h1>
        <p className="text-center text-2xl font-normal mt-3.5 lg:w-[784px] lg:h-[84px] mx-auto">
          Find your perfect home among our curated properties. Start <br />
          browsing now!
        </p>
        <SearchForm />
      </div>
    </div>
  );
};

export default HeroContent;
