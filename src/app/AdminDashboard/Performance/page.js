import React from "react";
import { orders } from "@/app/data";
import { roboto } from "@/app/fonts";

const Performance = () => {
  return (
    <div className={`${roboto.variable}`}>
      {" "}
      <>
        <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
          Performance Monitoring
        </h3>
        <div className="bg-white p-6 rounded-[22px] shadow-lg my-3">
          <h2 className="text-[17px] font-bold mb-4">Activity Table</h2>
          <div className="w-full overflow-x-auto">
            <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
              <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-sm md:text-lg font-medium">
                <tr>
                  <th className="py-2 px-4 whitespace-nowrap">Name</th>
                  <th className="py-2 px-4 whitespace-nowrap">
                    Operation Type
                  </th>
                  <th className="py-2 px-4 whitespace-nowrap">Affected Item</th>
                  <th className="py-2 px-4 whitespace-nowrap">Date & Time</th>

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
                    <td className="py-4 px-4 whitespace-nowrap">150 items</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      {order.customer}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      {order.status}
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

export default Performance;
