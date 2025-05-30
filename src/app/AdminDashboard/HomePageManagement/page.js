"use client";
import { sections } from "@/app/data";
import { poppins, roboto } from "@/app/fonts";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  const navigation = (screen) => {
    switch (screen) {
      case "Hero Section":
        router.push("/AdminDashboard/HeroSection");
        break;
      case "Search Bar":
        router.push("/AdminDashboard/SearchBar");
        break;
      case "Attach RFQ Button":
        router.push("/AdminDashboard/RFQ");
        break;
      case "Top Category":
        router.push("/AdminDashboard/TopCategory");
        break;
      case "Top Products":
        router.push("/AdminDashboard/TopProducts");
        break;
      case "Top Brands":
        router.push("/AdminDashboard/TopBrands");
        break;
      case "How it works":
        router.push("/AdminDashboard/HowItWorks");
        break;
      case "Grow your Business":
        router.push("/AdminDashboard/GrowYourBusiness");
        break;
      case "Clients Reviews":
        router.push("/AdminDashboard/ClientsReviews");
        break;
      default:
        console.warn("Unknown section:", screen);
    }
  };

  return (
    <div className={`${roboto.variable}`}>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">Brands</h3>
      <div className="px-3">
        {" "}
        <div className="bg-white p-4 rounded-[22px] shadow-lg my-3">
          <h2 className="text-[17px] font-bold mb-4 px-3">Brands List</h2>

          <div className="overflow-x-auto">
            <table className=" w-full text-left text-sm text-[#000000]">
              <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-sm md:text-lg font-medium py-2 mx-0">
                <tr>
                  <th className="py-2 px-4 whitespace-nowrap">Section Name</th>
                  <th className="py-2 px-4 whitespace-nowrap">
                    Editable Fields
                  </th>
                  <th className="py-2 px-4 whitespace-nowrap">Actions</th>
                  <th className="py-2 px-4 whitespace-nowrap">Visibility</th>
                </tr>
              </thead>

              <tbody className="text-sm md:text-lg text-[#181818] font-medium">
                {sections.map((section, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-4 px-4 whitespace-nowrap">
                      {section.sectionName}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap gap-x-2">
                      {section.editableFields}
                    </td>

                    <td className="py-3 px-4">
                      <Pencil
                        onClick={() => {
                          navigation(section.sectionName);
                        }}
                        className="text-[var(--primary-blue)]"
                        size={18}
                      />
                    </td>
                    <td className="py-3 px-4">
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
