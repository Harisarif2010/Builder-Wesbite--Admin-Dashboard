"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-wrap justify-between px-2 py-1">
        <h3 className="text-[#3B4758] text-2xl font-bold py-1">Overview</h3>
        <div className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-y-0">
          <button
            onClick={() => {
              router.push("/AdminDashboard/HomepageManagement");
            }}
            className="flex items-center justify-center bg-white text-[var(--primary-blue)] text-base font-medium px-6 py-3 border border-[#354EF3] rounded-[22px] h-12 cursor-pointer"
          >
            Homepage Management
          </button>
          <button
            className="flex items-center justify-center bg-[var(--primary-blue)] text-white text-base font-medium px-6 py-3 rounded-[22px] h-12 cursor-pointer"
            onClick={() => {
              router.push("/AdminDashboard/HomepageStatistics");
            }}
          >
            Homepage Statistics
          </button>
        </div>
      </div>

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
              Customers
            </h3>
            <div className="bg-[#FF59EE] flex justify-center items-center rounded-md h-9 w-9">
              <Image
                src="/icons/users.png"
                alt="Users Icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold px-2">34</h2>
          <p className="text-[#0A7D5A] font-normal text-[12px] py-3 px-2">
            -2.56%{" "}
            <span className="text-[#586A84] font-normal text-[12px]">
              since last month
            </span>
          </p>
        </div>

        {/* Verified Suppliers Card */}
        <div
          className="bg-white rounded-[13px] px-3 w-full"
          style={{ boxShadow: "0px 4px 20px 0px #AAA9B81A" }}
        >
          <div className="flex justify-between pb-3 pt-6 px-2">
            <h3 className="text-[#586A84] text-[14px] font-semibold">
              Verified Suppliers
            </h3>
            <div className="bg-[var(--primary-blue)] flex justify-center items-center rounded-md h-9 w-9">
              <Image
                src="/icons/graph.png"
                alt="Graph Icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold px-2">
            325 Verified Suppliers
          </h2>
          <div className="flex flex-wrap justify-between py-3 px-2 gap-y-2">
            <p className="text-[#0A7D5A] font-normal text-[12px]">
              +6.50%{" "}
              <span className="text-[#586A84] font-normal text-[12px]">
                since last month
              </span>
            </p>
            <span
              className="text-[var(--primary-blue)] font-normal text-[13px] cursor-pointer"
              onClick={() => {
                router.push("/AdminDashboard/Suppliers");
              }}
            >
              View All Suppliers
            </span>
          </div>
        </div>

        {/* Pending Quotes */}
        <div className="bg-white rounded-[13px] px-3 w-full">
          <div className="flex justify-between pb-3 pt-6 px-2">
            <h3 className="text-[#586A84] text-[14px] font-semibold">
              Pending Quote Requests
            </h3>
            <div className="bg-[var(--primary-blue)] flex justify-center items-center rounded-md h-9 w-9">
              <Image
                src="/icons/quotation.svg"
                alt="Quote Icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-lg md:text-2xl text-[#3B4758] font-bold px-2">
            48 Pending Quotes
          </h2>
          <div className="flex justify-between px-2">
            <p className="text-[#0A7D5A] font-normal text-[12px] py-3">
              +6.50%{" "}
              <span className="text-[#586A84] font-normal text-[12px]">
                since last month
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-4 px-2">
        <div className="flex flex-row justify-between items-center rounded-[13px] md:h-20 bg-white w-full">
          <span className="px-2 text-[18px] sm:text-[20px] font-medium py-2 text-black">
            Show Client Reviews
          </span>
          <label className="switch px-3">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex flex-row justify-between items-center rounded-[13px] md:h-20 bg-white w-full">
          <span className="px-2 text-[18px] sm:text-[20px] font-medium py-2 text-[#000000]">
            Hide Client Reviews
          </span>
          <label className="switch px-3">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
