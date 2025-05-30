"use client";
import { employeePermissions } from "@/app/data";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { poppins } from "@/app/fonts";

const Payments = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Download Reports");
  const options = ["Shipped", "Delivered", "Cancel"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <>
      {" "}
      <h3 className="text-[#3B4758] text-2xl font-bold px-1 pb-4">
        Payemnts & Financial
      </h3>
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-4 px-2">
        <div
          className="bg-white rounded-[13px] px-3 w-full"
          style={{ boxShadow: "0px 4px 20px 0px #AAA9B81A" }}
        >
          <div className="flex justify-between pb-3 pt-6 px-2">
            <h3 className="text-[#586A84] text-[14px] font-semibold">
              Total Revenue
            </h3>
            <div className="bg-[#36DA78] flex justify-center items-center rounded-md h-9 w-9">
              <Image
                src="/icons/dollar.png"
                alt="Dollar Icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold px-2">$ 3,503.26</h2>
          <p className="text-[#0A7D5A] font-normal text-[12px] py-3 px-2">
            +6.50%{" "}
            <span className="text-[#586A84] font-normal text-[12px]">
              since last month
            </span>
          </p>
        </div>
        <div className="bg-white rounded-[13px] px-3">
          <div className="flex justify-between pb-3 pt-6">
            <h3 className="text-[#586A84] text-[14px] font-semibold">
              Pending Payments
            </h3>
            <div className="bg-[#DD9013] flex justify-center items-center rounded-md h-9 w-9">
              {" "}
              <Image
                src="/icons/bell.svg"
                alt="Pet Profile icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold">$ 3,503.26</h2>
          <p className="text-[#0A7D5A] font-normal text-[12px] py-3">
            +6.50%{" "}
            <span className="text-[#586A84] font-normal text-[12px]">
              since last month
            </span>
          </p>
        </div>
      </div>
      <div className={`{roboto.variable} px-3`}>
        <div className="bg-white p-6 rounded-[22px]  ">
          <h2 className="text-[22px] font-bold mb-4  text-black px-3">
            Transaction History
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-[#000000]">
              <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] md:text-lg text-base font-medium">
                <tr>
                  <th className="py-2 px-4 font-medium">Date</th>

                  <th className="py-2 px-4 font-medium">Supplier Name</th>
                  <th className="py-2 px-4 font-medium">Amount</th>

                  <th className="py-2 px-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-base md:text-lg  ">
                {employeePermissions.map((row, idx) => (
                  <tr key={idx} className="text-[#000000] text-base md:text-lg">
                    <td className="py-6 px-4 font-medium">{row.name}</td>
                    <td className="py-3 px-4 font-medium">{row.role}</td>
                    <td className="py-3 px-4 font-medium">{row.permissions}</td>
                    <td className="py-3 px-4 font-medium">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className={` w-full flex  md:justify-end my-3  justify-center  ${poppins.variable}`}
      >
        {" "}
        <div className="flex  gap-x-3">
          <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-between items-center w-full h-14 px-3 py-2 border bg-white border-[var(--primary-blue)] rounded-[22px] text-sm font-medium focus:outline-none"
            >
              {selected}
              <ChevronDown size={26} className="ml-2 text-[#000000]" />
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
                    className="px-4 py-2 text-sm text-[#676767] hover:bg-gray-100 cursor-pointer border-b border-[#D1D1D1] last:border-b-0 mx-2"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="bg-[var(--green)] text-[white] text-[13px]  flex justify-center items-center  px-5 py-5   font-medium rounded-[22px] h-14">
            Approve Payouts
          </button>

          {/* Submit Button */}
        </div>
      </div>
    </>
  );
};

export default Payments;
