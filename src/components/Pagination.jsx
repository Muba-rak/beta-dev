import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
const Pagination = () => {
  return (
    <div className="max-w-[500px] flex items-center gap-4 mx-auto justify-center my-7">
      <RiArrowLeftSLine size={22} color="gray" role="button" />
      <button className="py-0.5 px-1 bg-green-700 text-white">1</button>
      <button className="h-5 w-5  text-black">2</button>
      <button className="h-5 w-5  text-black">3</button>
      <button className="h-5 w-5  text-black">4</button>
      <RiArrowRightSLine size={22} color="black" role="button" />
    </div>
  );
};

export default Pagination;
