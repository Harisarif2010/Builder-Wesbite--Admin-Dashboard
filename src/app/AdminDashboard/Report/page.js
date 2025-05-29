"use client";
import { contentData } from "@/app/data";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Report = () => {
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
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
        Reports & Analytics
      </h3>
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-4 px-2">
        {/* Revenue Card */}
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

        {/* Customers Card */}
        <div
          className="bg-white rounded-[13px] px-3 w-full"
          style={{ boxShadow: "0px 4px 20px 0px #AAA9B81A" }}
        >
          <div className="flex justify-between pb-3 pt-6 px-2">
            <h3 className="text-[#586A84] text-[14px] font-semibold">
              Total Products
            </h3>
            <div className="bg-[var(--primary-blue)] flex justify-center items-center rounded-md h-9 w-9">
              <Image
                src="/icons/users.png"
                alt="Users Icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold px-2">
            34 Products
          </h2>
          <p className="text-[#0A7D5A] font-normal text-[12px] py-3 px-2">
            -2.56%{" "}
            <span className="text-[#586A84] font-normal text-[12px]">
              since last month
            </span>
          </p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-[22px] shadow-lg my-3">
        <h2 className="text-[17px] font-bold mb-4 px-3">Ad Management Table</h2>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-sm md:text-lg font-medium">
              <tr>
                <th className="py-2 px-4 whitespace-nowrap">Supplier Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Total Products</th>
                <th className="py-2 px-4 whitespace-nowrap">Active Products</th>
                <th className="py-2 px-4 whitespace-nowrap">
                  Inactive Products
                </th>
              </tr>
            </thead>

            <tbody className="text-sm md:text-lg text-[#181818] font-medium">
              {contentData.map((content, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-4 px-4 whitespace-nowrap">
                    {content.authorName}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">250</td>
                  <td className="py-4 px-4 whitespace-nowrap">250</td>
                  <td className="py-4 px-4 whitespace-nowrap">250</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-[22px] shadow-lg my-3">
        <h2 className="text-[17px] font-bold mb-4 px-3">
          Top Peforming Supplier
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-sm md:text-lg font-medium">
              <tr>
                <th className="py-2 px-4 whitespace-nowrap">Rank</th>
                <th className="py-2 px-4 whitespace-nowrap">Supplier Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Total Sales</th>
                <th className="py-2 px-4 whitespace-nowrap">
                  Customer RATINGS
                </th>
              </tr>
            </thead>

            <tbody className="text-sm md:text-lg text-[#181818] font-medium">
              {contentData.map((content, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-4 px-4 whitespace-nowrap">3rd</td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {content.authorName}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">$250,000</td>
                  <td className="py-4 px-4 whitespace-nowrap">5</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" w-full flex  md:justify-end my-3  justify-center ">
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
      </div>
    </>
  );
};

export default Report;
