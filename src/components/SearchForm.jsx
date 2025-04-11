import React from "react";
import { useState, useRef } from "react";
const SearchForm = ({ setLocation, setPage, setBedroom }) => {
  const [num, setNum] = useState(0);
  const [loc, setLoc] = useState("");
  // const checkNum = (n) => {
  //   if (n <= 0) {
  //     return 0;
  //   }
  //   return n;
  // };
  const handleForm = (e) => {
    e.preventDefault();
    setPage(1);
    setLocation(loc);
    setBedroom(num);

    //reset the input
    setLoc("");
    setNum(0);
  };

  return (
    <div className="w-full border mt-7 bg-[#FFFFFF33] min-h-[135px] flex justify-center items-center p-3">
      <form
        onSubmit={handleForm}
        className="bg-white rounded-[10px] text-black flex flex-col lg:flex-row gap-2.5 lg:gap-0 items-center justify-between  w-[95%] min-h-[86px] p-3 lg:p-0"
      >
        <div className="border-r-2 border-r-gray-300 w-[300px] pl-0 lg:pl-3">
          <label
            htmlFor="location"
            className="block text-[#30343B] font-semibold text-center lg:text-start"
          >
            LOCATION
          </label>
          <input
            type="text"
            id="location"
            placeholder="e.g Gbagada"
            className="block outline-0 w-full"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
          />
        </div>

        <div className="border-r-2 border-r-gray-300 w-[300px]">
          <label
            htmlFor="type"
            className="block text-center lg:text-start text-[#30343B] font-semibold"
          >
            PROPERTY TITLE
          </label>
          <input
            type="text"
            id="text"
            placeholder="e.g Villa, Mansion"
            className="block outline-0 w-full"
          />
        </div>

        <div className="w-[300px] lg:w-[200px] flex items-center flex-col justify-center">
          <label className="block text-[#30343B] font-semibold">BEDROOM</label>
          <div className="flex items-center gap-5 mx-0 lg:mx-auto">
            <button
              onClick={() => setNum(num - 1)}
              disabled={num === 0}
              className="w-[21px] h-[21px] rounded-full border flex items-center justify-center"
              type="button"
            >
              -
            </button>
            <p>{num}</p>
            <button
              onClick={() => setNum(num + 1)}
              className="w-[21px] h-[21px] rounded-full border flex items-center justify-center"
              type="button"
            >
              +
            </button>
          </div>
        </div>
        <button className="bg-[#3D9970] text-white rounded-r-[10px] block h-[86px] w-[297px] cursor-pointer">
          Find Property
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
