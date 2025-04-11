import React from "react";

const EmptySearch = ({ resetFilters }) => {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl md:text-4xl">
        No Properties found for your search
      </h1>
      <button
        onClick={resetFilters}
        className="text-white bg-[#3D9970] w-[140px] h-[40px] rounded-md font-medium text-lg cursor-pointer my-2.5"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default EmptySearch;
