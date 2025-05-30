import { poppins } from "@/app/fonts";
import React from "react";

const DeleteSupplier = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 flex flex-row items-center pb-2 ">
        Supplier Account Deletion
      </h3>
      <div className="px-3">
        {" "}
        <div className="bg-white rounded-[22px] p-8">
          <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-black font-bold text-[13px]  mb-2 ml-1">
                ID
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px]  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
                placeholder="Enter Customer Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-bold text-[13px]  mb-2 ml-1">
                Name
              </label>

              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px]  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
                placeholder="Enter your company"
              />
            </div>
            {/* Company Name (Optional) */}
            <div className="flex flex-col">
              <label className="text-black font-bold text-[13px]  mb-2 ml-1">
                User Role
              </label>

              <input
                type="email"
                className="w-full border  border-[var(--primary-border)] rounded-[11px]  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
                placeholder="Enter your Email"
              />
            </div>
            {/* Email Address */}
            <div className="flex flex-col">
              <label className="text-black font-bold text-[13px]  mb-2 ml-1">
                Status
              </label>
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px]  md:h-11 px-4 sm:px-5 pr-10 text-[13px]  text-[#989898]"
                placeholder="Enter Phone Number"
              />
            </div>
            <div>
              {" "}
              <h4 className="ml-1 text-base font-medium text-[#000000]">
                Impact Notice:
              </h4>
              <ol className="ml-5 text-[13px] font-normal text-black list-disc  my-2">
                <li>Deleted users will lose access permanently </li>
                <li>Deleted users will have their products removed </li>
              </ol>
            </div>
          </div>
          <div
            className={` w-full flex  md:justify-end my-3  justify-center  ${poppins.variable}`}
          >
            {" "}
            <div className="flex  gap-x-3">
              <button className="bg-[var(--primary-border)] text-[white] text-lg  flex justify-center items-center  px-10 py-5   font-medium rounded-[22px] h-14">
                Cancel
              </button>
              <button className="bg-[#C82112] text-[white] text-lg  flex justify-center items-center  px-10 py-5   font-medium rounded-[22px] h-14">
                Delete
              </button>

              {/* Submit Button */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteSupplier;
