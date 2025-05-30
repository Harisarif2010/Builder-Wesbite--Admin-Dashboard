import React from "react";
import { Pen } from "lucide-react";
import { poppins, roboto } from "@/app/fonts";

const OrdersRequest = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-2 pb-1 pt-2">
        Orders Request
      </h3>
      <div className="bg-white rounded-[11px] p-3">
        {" "}
        <div
          className={
            "grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  my-5 px-3"
          }
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              Request ID
            </label>

            <input
              type="text"
              className="w-full border border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              Product Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" size={16} />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              Customer Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" size={16} />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px] mb-1 ml-1">
              Required Quantity
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" size={16} />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col">
            <label className="text-black font-bold  md:text-[13px]mb-1 ml-1">
              Status
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10  md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base text-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" size={16} />
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="flex flex-row justify-center md:justify-end mt-14">
          <button
            className={`${roboto.variable}  bg-[var(--primary-blue)] text-white  text-xs md:text-[18px] font-bold px-8 py-3 rounded-[22px] h-12 `}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default OrdersRequest;
