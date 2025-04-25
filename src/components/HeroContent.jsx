import React from "react";
import SearchForm from "./SearchForm";

const contentOnHome = {
  heading: "Browse Our Properties",
  para: ` Find your perfect home among our curated properties. Start <br />
          browsing now!`,
};

const HeroContent = ({ setLocation, setPage, setBedroom, setTitle }) => {
  return (
    <div className="text-white custom-layout flex justify-center items-center">
      <div className="w-full">
        <h1 className="text-3xl md:text-[68px] text-center font-bold mt-5">
          {contentOnHome.heading}{" "}
        </h1>
        <p className="text-center text-2xl font-normal mt-3.5 lg:w-[784px] lg:h-[84px] mx-auto">
          {contentOnHome.para}
        </p>
        <SearchForm
          setLocation={setLocation}
          setPage={setPage}
          setBedroom={setBedroom}
          setTitle={setTitle}
        />
      </div>
    </div>
  );
};

export default HeroContent;
