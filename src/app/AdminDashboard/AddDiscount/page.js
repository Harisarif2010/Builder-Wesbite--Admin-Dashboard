"use client";
import React, { useState } from "react";
import { roboto } from "@/app/fonts";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const AddDiscount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Marked");
  const options = ["Shipped", "Delivered", "Cancel"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className={roboto.variable}>
      {" "}
      <>
        <h3 className="text-[#3B4758] text-2xl font-bold px-3 flex flex-row items-center ">
          Offers Managment
        </h3>
        <div className="bg-white rounded-[22px] p-5">
          <h3 className="my-3 text-black text-base md:text-[22px] font-bold">
            Create Discount Code
          </h3>
          <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-black font-bold   md:text-[13px] mb-2 ml-1">
                Discount Name
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Add Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-bold  md:text-[13px] mb-2 ml-1">
                Category Selection
              </label>
              <div className="relative inline-block text-left">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex justify-between items-center w-full h-14 px-4 py-2 border border-[var(--primary-border)] rounded-[11px] text-sm font-medium focus:outline-none"
                >
                  {selected}
                  <ChevronDown size={20} className="ml-2 text-[#646464]" />
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
                        className="px-4 py-2 text-sm text-[#676767] hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-black font-bold   md:text-[13px] mb-2 ml-1">
                Discount Percentage
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter percentage"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-bold  md:text-[13px] mb-2 ml-1">
                Expiration Date
              </label>

              <input
                type="date"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="01/01/2025"
              />
            </div>
          </div>

          <div className=" w-full flex justify-center md:justify-end my-3 md:mt-16 ">
            <button className=" bg-[var(--primary-blue)] text-white text-lg md:text-2xl font-medium px-8 py-3 rounded-[26px] h-14">
              Save
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddDiscount;
