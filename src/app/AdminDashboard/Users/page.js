import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import { orders } from "@/app/data";
import { poppins, roboto } from "@/app/fonts";
import Image from "next/image";

const Users = () => {
  return (
    <div className={`${roboto.variable}`}>
      {" "}
      <>
        <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
          User Managment
        </h3>
        <div className="bg-white p-6 rounded-[22px] shadow-lg my-3">
          <h2 className="text-[17px] font-bold mb-4">User List</h2>

          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
              <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-sm md:text-lg font-medium">
                <tr>
                  <th className="py-2 px-4 whitespace-nowrap">User ID</th>
                  <th className="py-2 px-4 whitespace-nowrap"> Name</th>
                  <th className="py-2 px-4 whitespace-nowrap">Role</th>

                  <th className="py-2 px-4 whitespace-nowrap">Status</th>
                  <th className="py-2 px-4 whitespace-nowrap">Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm md:text-lg text-black font-medium">
                {orders.map((order, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-4 px-4 whitespace-nowrap">{idx}</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      {order.name}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">Buyer</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      {order.status}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <Pencil
                          className=" text-[var(--primary-blue)] "
                          size={18}
                        />
                        <Image
                          alt="greenfuile"
                          src="/icons/greenfile.png"
                          width={16}
                          height={16}
                        />
                        <Trash2
                          size={18}
                          className="text-[#9A2B2B] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default Users;
