"use client";
import { orders } from "@/app/data";
import { poppins } from "@/app/fonts";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SubscriptionManagment = () => {
  const router = useRouter();
  return (
    <div>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
        Subscription Management System
      </h3>
      <div className="bg-white rounded-[22px] p-5 mb-3">
        <h3 className="my-3 text-black text-base md:text-[22px] font-bold">
          Subscription Overview Table
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-sm md:text-lg font-medium">
              <tr>
                <th className="py-2 px-4 whitespace-nowrap">Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Subscription</th>
                <th className="py-2 px-4 whitespace-nowrap">Join Date</th>
                <th className="py-2 px-4 whitespace-nowrap">Renewal Date</th>
                <th className="py-2 px-4 whitespace-nowrap">Payment Status</th>
                <th className="py-2 px-4 whitespace-nowrap">Status</th>
                <th className="py-2 px-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>

            <tbody className="text-sm md:text-lg text-black font-medium">
              {orders.slice(0, 3).map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.customer}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">Basic</td>
                  <td className="py-4 px-4 whitespace-nowrap">{order.date}</td>
                  <td className="py-4 px-4 whitespace-nowrap">{order.date}</td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.status}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.paymentStatus}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <Image
                        alt="greenfiles"
                        src="/icons/greenfile.png"
                        width={16}
                        height={16}
                      />
                      <Trash2 className="text-[#9A2B2B]" size={18} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white rounded-[22px] p-5">
        <h3 className="my-3 text-black text-base md:text-[22px] font-bold">
          Subscription Table
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-sm md:text-lg font-medium">
              <tr>
                <th className="py-2 px-4 whitespace-nowrap"> Package Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Price</th>
                <th className="py-2 px-4 whitespace-nowrap">Duration</th>
                <th className="py-2 px-4 whitespace-nowrap">Features</th>
                <th className="py-2 px-4 whitespace-nowrap">Subscribers</th>
                <th className="py-2 px-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>

            <tbody className="text-sm md:text-lg text-black font-medium">
              {orders.slice(0, 3).map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.customer}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">Basic</td>
                  <td className="py-4 px-4 whitespace-nowrap">{order.date}</td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.status}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.paymentStatus}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <Image
                        alt="greenfiles"
                        src="/icons/greenfile.png"
                        width={16}
                        height={16}
                      />
                      <Trash2 className="text-[#9A2B2B]" size={18} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" w-full flex justify-center md:justify-end my-3  ">
        <button
          className={`bg-[var(--primary-blue)] text-white text-xs md:text-base font-medium px-4 py-3 rounded-[26px] h-16 ${poppins.variable}`}
          onClick={() => {
            router.push("/AdminDashboard/AddSubscription");
          }}
        >
          Add New Package
        </button>
      </div>
    </div>
  );
};

export default SubscriptionManagment;
