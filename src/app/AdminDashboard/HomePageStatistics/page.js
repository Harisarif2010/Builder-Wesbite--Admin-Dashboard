import { poppins, roboto } from "@/app/fonts";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

const HomePageStatistics = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-2 pb-1 pt-2">
        Homepage Statistics
      </h3>
      <div className={`${roboto.variable} bg-white rounded-[11px] p-3`}>
        <div
          className={
            "grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  my-5 px-1"
          }
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              User Count
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pencil color="#535353" size={16} />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              Supplier Count
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              Total Quote
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              Sales
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-[#000000] font-bold text-[13px] mb-2 ml-1">
              User Icon
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
          <div className="flex flex-col ">
            <label className="text-[#000000] font-bold text-[13px] mb-2 ml-1">
              Supplier Icon
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
          <div className="flex flex-col ">
            <label className="text-[#000000] font-bold text-[13px] mb-2 ml-1">
              Quote Icon
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
          <div></div>
          <div className="flex flex-row justify-between items-center border  border-[var(--primary-border)] rounded-[11px] h-10 md:h-11  ">
            <span className="px-2 text-[20px] font-medium py-2">
              Show Numbers
            </span>
            <label className="switch px-3">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex flex-row justify-between items-center border  border-[var(--primary-border)] rounded-[11px] h-10 md:h-11  ">
            <span className="px-2 text-[20px] font-medium py-2">
              Hide Numbers
            </span>
            <label className="switch px-3">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-center md:justify-end ">
          <button
            className={`${roboto.variable}  bg-[var(--primary-blue)] text-white  text-lg  md:text-2xl font-medium px-8 py-2 rounded-[26px] h-14 `}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePageStatistics;
