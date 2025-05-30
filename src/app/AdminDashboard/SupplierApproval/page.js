"use client";
import React, { useState } from "react";

import { poppins, roboto } from "@/app/fonts";
import Image from "next/image";

const SupplierApproval = () => {
  return (
    <div className={roboto.className}>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
        Supplier Approvals
      </h3>
      <div className="bg-white rounded-[22px] p-3">
        <div
          className={
            "grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "
          }
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-base md:text-base ml-1">
              ID
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898] "
            />
          </div>
          {/* Position */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base ml-1">
              Name
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
            />
          </div>
          {/* Company Name (Optional) */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base ml-1">
              Mobile No.
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
            />
          </div>
          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base ml-1">
              Registration Date
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
            />
          </div>
          {/* Mobile */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base ml-1">
              Address
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
            />
          </div>
          {/* City (Input instead of Select) */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base ml-1">
              Authorized Person
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              placeholder="Enter your city"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base ml-1">
              Status
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              placeholder="Enter your city"
            />
          </div>
          {/* Additional Comments */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base ml-1">
              Role
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              placeholder="Enter your city"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base ml-1">
              CR
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              placeholder="Enter your city"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base ml-1">
              Tax Registration
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              placeholder="Enter your city"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-base md:text-base ml-1">
              CR File
            </label>
            <div className="w-full border border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11 px-4 sm:px-5 text-sm sm:text-base text-[#989898] flex items-center space-x-2">
              <Image src="/icons/Vector.png" width={20} height={16} alt="pdf" />
              <span className="text-[#EF5350] font-bold">CR file_Pdf</span>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-base md:text-base ml-1">
              CR File
            </label>
            <div className="w-full border border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11 px-4 sm:px-5 text-sm sm:text-base text-[#989898] flex items-center space-x-2">
              <Image src="/icons/Vector.png" width={20} height={16} alt="pdf" />
              <span className="text-[#EF5350] font-bold">CR file_Pdf</span>
            </div>
          </div>
          <div>
            <label
              htmlFor="detail"
              className="text-[13px] text-black font-bold mb-2 ml-1"
            >
              Add Comments
            </label>
            <textarea
              id="detail"
              name="detail"
              placeholder="Type Here....."
              className="w-full px-4 h-31 border border-[var(--primary-border)] rounded-[11px] text-[#989898]"
              required
            />
          </div>
        </div>
        <div className=" w-full flex  md:justify-end my-3 md:mt-17 justify-center ">
          {" "}
          <div className="flex  gap-x-3">
            <button className="bg-[var(--primary-border)] text-[white] text-[20px]  flex justify-center items-center  px-8 py-5   font-medium rounded-[22px] h-16">
              Cancel
            </button>
            <button className="bg-[var(--green)] text-[white] text-[20px]  flex justify-center items-center  px-4 py-5   font-medium rounded-[22px] h-16">
              Approve Account
            </button>

            {/* Submit Button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierApproval;
