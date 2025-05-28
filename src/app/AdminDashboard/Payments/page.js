import { employeePermissions } from "@/app/data";
import Image from "next/image";
import React from "react";

const Payments = () => {
  return (
    <>
      {" "}
      <h3 className="text-[#3B4758] text-2xl font-bold px-1 pb-4">
        Earning & Payouts
      </h3>
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-4 px-4">
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
                  <th className="py-2 px-4 font-medium">Name</th>

                  <th className="py-2 px-4 font-medium">Requested Amount</th>
                  <th className="py-2 px-4 font-medium">Payment Method</th>
                  <th className="py-2 px-4 font-medium">Request Date</th>
                  <th className="py-2 px-4 font-medium">Status</th>
                  <th className="py-2 px-4 font-medium">Action</th>
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
      <div className=" w-full flex  md:justify-end my-3  justify-center ">
        {" "}
        <div className="flex  gap-x-3">
          <button className="bg-[var(--primary-border)] text-[white] text-[13px]  flex justify-center items-center  px-8 py-5   font-medium rounded-[22px] h-14">
            Cancel
          </button>
          <button className="bg-[var(--green)] text-[white] text-[13px]  flex justify-center items-center  px-8 py-5   font-medium rounded-[22px] h-14">
            Confirm
          </button>

          {/* Submit Button */}
        </div>
      </div>
    </>
  );
};

export default Payments;
