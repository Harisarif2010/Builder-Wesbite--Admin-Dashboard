import React from "react";
import { Pencil } from "lucide-react";
import { poppins, roboto } from "@/app/fonts";

const QuoteRequest = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-2 pb-1 pt-2">
        Orders Request
      </h3>
      <div className="bg-white rounded-[11px] p-3">
        {" "}
        <div
          className={
            "grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  my-5 px-1"
          }
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              ID
            </label>

            <input
              type="text"
              className="w-full border border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pencil color="#535353" size={16} />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              Product
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pencil color="#535353" size={16} />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              Quantity
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pencil color="#535353" size={16} />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px]mb-1 ml-1">
              Submission Date
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pencil color="#535353" size={16} />
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="flex flex-row justify-center md:justify-end mt-14">
          <button
            className={`${roboto.variable}  bg-[var(--primary-blue)] text-white  text-lg md:text-2xl font-bold px-5 py-2 rounded-[26px] h-14 `}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default QuoteRequest;
