"use client";
import React, { useState } from "react";
import { roboto } from "@/app/fonts";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const AddProduct = () => {
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
          Prodcuts Managment
        </h3>
        <div className="bg-white rounded-[22px] p-5">
          <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-black font-bold   md:text-[13px] mb-2 ml-1">
                Product Name
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-bold  md:text-[13px] mb-2 ml-1">
                Density
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter density"
              />
            </div>
            {/* Company Name (Optional) */}
            <div className="flex flex-col">
              <label className="text-black font-bold  md:text-[13px] mb-2 ml-1">
                Size
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter Size"
              />
            </div>
            {/* Email Address */}
            <div className="flex flex-col">
              <label className="text-black font-bold  md:text-[13px] mb-2 ml-1">
                Brand
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
                Weight
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter Weight"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-bold  md:text-[13px] mb-2 ml-1">
                Stock
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter stock"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="detail"
                className="text-[13px] text-black font-bold mb-2 ml-1"
              >
                Detail
              </label>
              <textarea
                id="detail"
                name="detail"
                placeholder="Enter Here"
                className="w-full px-4 h-36 border border-[var(--primary-border)] rounded-[11px] placeholder-[#989898]"
                required
              />
            </div>

            <div className="flex flex-col mt-3">
              <label className="text-[#000000] font-bold text-[13px] mb-2 ml-1">
                Upload Product Image
              </label>
              <label className="w-full h-36 px-4 border border-[var(--primary-border)] rounded-[11px] cursor-pointer flex items-center justify-center bg-white hover:bg-gray-50 transition">
                <input type="file" className="hidden" />
                <Image
                  src="/icons/upload.png"
                  width={60}
                  height={60}
                  alt="Upload"
                  className="p-2"
                />
              </label>
            </div>
          </div>
          <div className=" w-full flex justify-center md:justify-end ">
            {" "}
            <div className="flex   mt-10 gap-x-3">
              {/* Back Button */}
              <button className="bg-[white]  text-[var(--primary-blue)] text-lg font-medium px-8 py-3 border border-[var(--primary-blue)] rounded-[22px] h-14">
                Add More
              </button>
              <button className=" bg-[var(--primary-blue)] text-white text-lg font-medium px-8 py-3 rounded-[22px] h-14">
                Submit
              </button>

              {/* Submit Button */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddProduct;
