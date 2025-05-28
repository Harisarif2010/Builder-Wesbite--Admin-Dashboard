import { roboto } from "@/app/fonts";
import React from "react";

const ApproveOrder = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-2 pb-1 pt-2">
        Approve Orders Request
      </h3>
      <div className={`${roboto.variable} bg-white rounded-[11px] p-3`}>
        <div
          className={
            "grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  my-5 px-3"
          }
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              ID
            </label>

            <input
              type="text"
              className="w-full border border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Product Name
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Quantity
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Position
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Company
            </label>

            <input
              type="text"
              className="w-full border border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              City
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Project Name
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Mobile No
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Email Address
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Preferred Contact Method
            </label>

            <input
              type="text"
              className="w-full border border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Unit
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Project Status
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium text-base mb-1 ">
              Diameter
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Project Location
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Estimsted Project Size
            </label>

            <input
              type="text"
              className="w-full border border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Project Location
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Estimsted Project Size
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Payment
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Factory
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Expected Delivery Date
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              CR Number
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              National Number
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium md:text-base mb-1 ">
              Tax Registration Number
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center md:justify-end ">
          <button
            className={`${roboto.variable}  bg-[var(--green)] text-white  text-sm md:text-[20px] font-medium px-8 py-2 rounded-[22px] h-12 `}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ApproveOrder;
