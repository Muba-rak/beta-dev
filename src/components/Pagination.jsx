import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
const Pagination = ({ page, setPage, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const buttonStyles = (isDisabled) => ({
    cursor: isDisabled ? "not-allowed" : "pointer",
    color: isDisabled ? "gray" : "black",
  });

  return (
    <div className="max-w-[500px] flex items-center gap-4 mx-auto justify-center my-7">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        style={buttonStyles(page === 1)}
      >
        <RiArrowLeftSLine size={25} />
      </button>

      {pageNumbers.map((p) => {
        return (
          <li key={p} className="flex items-center gap-2">
            <button
              onClick={() => setPage(p)}
              className={` text-black ${
                page === p
                  ? "bg-green-500 text-white py-1 px-2"
                  : "cursor-pointer"
              }`}
            >
              {p}{" "}
            </button>
          </li>
        );
      })}
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        style={buttonStyles(page === totalPages)}
      >
        <RiArrowRightSLine size={25} />
      </button>
    </div>
  );
};

export default Pagination;
