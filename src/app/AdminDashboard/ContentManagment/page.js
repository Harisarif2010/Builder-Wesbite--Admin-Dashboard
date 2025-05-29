"use client";
import { contentData } from "@/app/data";
import { roboto } from "@/app/fonts";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Codes = () => {
  const router = useRouter();
  return (
    <div className={`${roboto.variable}`}>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
        Ad Managment
      </h3>
      <div className="px-3">
        {" "}
        <div className="bg-white p-4 rounded-[22px] shadow-lg my-3">
          <h2 className="text-[17px] font-bold mb-4 px-3">
            Ad Management Table
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
              <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-sm md:text-lg font-medium">
                <tr>
                  <th className="py-2 px-4 whitespace-nowrap">Article Title</th>
                  <th className="py-2 px-4 whitespace-nowrap">Author Name</th>
                  <th className="py-2 px-4 whitespace-nowrap">Status</th>
                  <th className="py-2 px-4 whitespace-nowrap">
                    Published Date
                  </th>

                  <th className="py-2 px-4 whitespace-nowrap">Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm md:text-lg text-[#181818] font-medium">
                {contentData.map((content, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-4 px-4 whitespace-nowrap">
                      {content.articleTitle}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      {content.authorName}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      {content.publishStatus}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      {content.statusDate}
                    </td>

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

      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push("/AdminDashboard/AddDiscount")}
          className="bg-[var(--primary-blue)] text-white text-lg  md:text-2xl font-medium  px-6 md:px-8  py-3 rounded-[22px] h-17"
        >
          Create Discount Code
        </button>
      </div>
    </div>
  );
};

export default Codes;
