"use client";
import { employeePermissions } from "@/app/data";
import { poppins, roboto } from "@/app/fonts";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Permissions = () => {
  const router = useRouter();
  return (
    <div className={`${roboto.variable}`}>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
        Permission Managment
      </h3>
      <div className="px-3">
        {" "}
        <div className="bg-white p-4 rounded-[22px] my-3">
          <h2 className="text-[17px] font-bold mb-4 px-3">Users List</h2>

          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
              <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-sm md:text-lg font-medium">
                <tr>
                  <th className="py-2 px-4 whitespace-nowrap">Name</th>
                  <th className="py-2 px-4 whitespace-nowrap">Email</th>
                  <th className="py-2 px-4 whitespace-nowrap">Role</th>
                  <th className="py-2 px-4 whitespace-nowrap">Status</th>
                  <th className="py-2 px-4 whitespace-nowrap">Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm md:text-lg text-[#181818] font-medium">
                {employeePermissions.slice(0, 2).map((emp, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-4 px-4 whitespace-nowrap">{emp.name}</td>
                    <td className="py-4 px-4 whitespace-nowrap">h@gmail.com</td>
                    <td className="py-4 px-4 whitespace-nowrap">Manager</td>
                    <td className="py-4 px-4 whitespace-nowrap">Active</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <Pencil
                          className="text-[var(--primary-blue)]"
                          size={18}
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
      </div>

      <div className="w-full flex justify-end ">
        <button
          onClick={() => router.push("/AdminDashboard/AddBrand")}
          className={`bg-[var(--primary-blue)] text-white text-lg  md:text-2xl font-medium  px-6 md:px-8  py-3 rounded-[26px] h-17 md:my-3 ${poppins.variable}`}
        >
          Add New Adminstartors
        </button>
      </div>
    </div>
  );
};

export default Permissions;
