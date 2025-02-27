import React from "react";
import { useState } from "react";
const SearchForm = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="w-full border mt-7 bg-[#FFFFFF33] min-h-[135px] flex justify-center items-center p-3">
      <form className="bg-white rounded-[10px] text-black flex flex-col lg:flex-row gap-2.5 lg:gap-0 items-center justify-between  w-[95%] min-h-[86px] p-3 lg:p-0">
        <div className="border-r-2 border-r-gray-300 w-[300px] pl-0 lg:pl-3">
          <label
            htmlFor="location "
            className="block text-[#30343B] font-semibold text-center lg:text-start"
          >
            LOCATION
          </label>
          <input
            type="text"
            id="location"
            placeholder="e.g Gbagada"
            className="block outline-0 w-full"
          />
        </div>

        <div className="border-r-2 border-r-gray-300 w-[300px]">
          <label
            htmlFor="type"
            className="block text-center lg:text-start text-[#30343B] font-semibold"
          >
            PROPERTY TYPE
          </label>
          <input
            type="text"
            id="text"
            placeholder="e.g Duplex, Bedroom Flat"
            className="block outline-0 w-full"
          />
        </div>

        <div className="w-[300px] lg:w-[200px] flex items-center flex-col justify-center">
          <label className="block text-[#30343B] font-semibold">BEDROOM</label>
          <div className="flex items-center gap-5 mx-0 lg:mx-auto">
            <button className="w-[21px] h-[21px] rounded-full border flex items-center justify-center">
              -
            </button>
            <p>{num}</p>
            <button className="w-[21px] h-[21px] rounded-full border flex items-center justify-center">
              +
            </button>
          </div>
        </div>
        <button className="bg-[#3D9970] text-white rounded-r-[10px] block h-[86px] w-[297px]">
          Find Property
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
