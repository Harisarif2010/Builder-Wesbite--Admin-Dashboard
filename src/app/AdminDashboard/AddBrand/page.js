import React from "react";
import { roboto } from "@/app/fonts";

import Image from "next/image";

const AddProduct = () => {
  return (
    <div className={roboto.variable}>
      {" "}
      <>
        <h3 className="text-[#3B4758] text-2xl font-bold px-3 flex flex-row items-center ">
          Brand Managment
        </h3>
        <div className="bg-white rounded-[22px] p-5">
          <h3 className="my-3 text-black text-base md:text-[22px] font-bold">
            Add New Brand
          </h3>
          <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-black font-bold   md:text-[13px] mb-2 ml-1">
                Brand Name
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Add Name"
              />
            </div>

            <div className="flex flex-col ">
              <label className="text-[#000000] font-bold text-[13px] mb-2 ml-1">
                Upload Image
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
          <div className=" w-full flex justify-center md:justify-end mt-8 ">
            <button className=" bg-[var(--primary-blue)] text-white text-lg md:text-2xl font-medium px-8 py-3 rounded-[26px] h-14">
              Save
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddProduct;
