"use client";
import { poppins } from "@/app/fonts";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const AssignOrder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Marked");
  const options = ["Shipped", "Delivered", "Cancel"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 flex flex-row items-center pb-2 ">
        Assign Order to Supplier
      </h3>
      <div className="px-3">
        {" "}
        <div className="bg-white rounded-[22px] p-8">
          <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-black font-bold text-lg   ml-1">ID</label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px]  md:h-11 px-4 sm:px-5 pr-10 text-lg  text-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-bold text-lg   ml-1">
                Product
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px]  md:h-11 px-4 sm:px-5 pr-10 text-lg  text-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-bold  md:text-[13px] mb-2 ml-1">
                Subscription Packages
              </label>
              <div className="relative inline-block text-left">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className=" mx-2 flex justify-between items-center w-full h-14 px-4 py-2 border border-[var(--primary-border)] rounded-[11px] text-sm font-medium focus:outline-none"
                >
                  {selected}
                  <ChevronDown size={25} className="ml-2 text-[#1E1E1E]" />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div
                    style={{ boxShadow: " 0px 4px 4px 0px #00000040" }}
                    className="absolute z-10 mt-1 w-full bg-white rounded-[22px] ring-1 ring-[#E1E1E1] ring-opacity-5"
                  >
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleSelect(option)}
                        className="px-8 mx-9 py-2  text-sm text-[#676767] hover:bg-gray-100 cursor-pointer border-b border-[#EAEAEA] last:border-0"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-black font-bold  md:text-[13px] mb-2 ml-1">
                Subscription Name
              </label>
              <div className="relative inline-block text-left">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex justify-between items-center w-full h-14 px-4 py-2 border border-[var(--primary-border)] rounded-[11px] text-sm font-medium focus:outline-none"
                >
                  {selected}
                  <ChevronDown size={25} className="ml-2 text-[#1E1E1E]" />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div
                    style={{ boxShadow: " 0px 4px 4px 0px #00000040" }}
                    className="absolute z-10 mt-1 w-full bg-white rounded-[22px] ring-1 ring-[#E1E1E1] ring-opacity-5 "
                  >
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleSelect(option)}
                        className="px-4 py-2  mx-2 text-sm text-[#676767] hover:bg-gray-100 cursor-pointer border-b border-[#EAEAEA] last:border-0"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-black font-bold text-lg   ml-1">
                Quantity
              </label>
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px]  md:h-11 px-4 sm:px-5 pr-10 text-lg  text-black"
                placeholder="Enter Quantity"
              />
            </div>
          </div>
          <div
            className={` w-full flex  md:justify-end my-3  justify-center  ${poppins.variable}`}
          >
            {" "}
            <button className="bg-[var(--primary-blue)] text-[white] text-[20px]  flex justify-center items-center  px-10 py-5   font-medium rounded-[22px] h-14">
              Assign
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignOrder;
