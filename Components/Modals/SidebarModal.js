"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const AdminMobileSidebarModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (paths) =>
    Array.isArray(paths) ? paths.includes(pathname) : pathname === paths;

  const menuItems = [
    {
      name: "Overview",
      paths: [
        "/AdminDashboard/",
        "/AdminDashboard/HomePageManagement",
        "/AdminDashboard/HomePageStatistics",
        "/AdminDashboard/HeroSection",
        "/AdminDashboard/SearchBar",
        "/AdminDashboard/RFQ",
        "/AdminDashboard/TopCategory",
        "/AdminDashboard/TopProducts",
        "/AdminDashboard/TopBrands",
        "/AdminDashboard/Works",
        "/AdminDashboard/Buisness",
        "/AdminDashboard/Reviews",
      ],
      icon: "/icons/dashboard.png",
      activeIcon: "/icons/dashboardblue.svg",
    },
    {
      name: "Suppliers Management",
      paths: "/AdminDashboard/Suppliers",
      icon: "/icons/managment.png",
      activeIcon: "/icons/profileblue.svg",
    },
    {
      name: "User Management",
      paths: "/AdminDashboard/Users",
      icon: "/icons/managment.png",
      activeIcon: "/icons/profileblue.svg",
    },
    {
      name: "Report & Analytics",
      paths: "/AdminDashboard/Report",
      icon: "/icons/orders.svg",
      activeIcon: "/icons/orderblue.svg",
    },
    {
      name: "Orders",
      paths: "/AdminDashboard/Orders",
      icon: "/icons/quotation.svg",
      activeIcon: "/icons/orderblue.svg",
    },
    {
      name: "Products Management",
      paths: "/AdminDashboard/ProductManagment",
      icon: "/icons/managment.png",
      activeIcon: "/icons/productwhite.png",
    },
    {
      name: "Earning & Financial",
      paths: ["/AdminDashboard/Payments", "/AdminDashboard/Financials"],
      icon: "/icons/payment.svg",
      activeIcon: "/icons/paymentblue.svg",
    },
    {
      name: "Quotation",
      paths: "/AdminDashboard/Quotation",
      icon: "/icons/inquiry.png",
      activeIcon: "/icons/inquiryblue.png",
    },
    {
      name: "Ad Management",
      paths: ["/AdminDashboard/AdManagment", "/AdminDashboard/CreateAd"],
      icon: "/icons/Ad.png",
      activeIcon: "/icons/adblue.png",
    },
    {
      name: "Offers Management",
      paths: ["/AdminDashboard/DiscountCode", "/AdminDashboard/AddDiscount"],
      icon: "/icons/offer.png",
      activeIcon: "/icons/offerwhite.png",
    },
    {
      name: "Brand Management",
      paths: ["/AdminDashboard/Brands", "/AdminDashboard/AddBrand"],
      icon: "/icons/brand.png",
      activeIcon: "/icons/brandblue.png",
    },
    {
      name: "Permission Management",
      paths: [
        "/AdminDashboard/Adminstartors",
        "/AdminDashboard/AddAdminstartor",
      ],
      icon: "/icons/permission.png",
      activeIcon: "/icons/permissionblue.png",
    },
    {
      name: "Performance Monitoring",
      paths: "/AdminDashboard/Performance",
      icon: "/icons/performance.png",
      activeIcon: "/icons/performanceblue.png",
    },
  ];

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2">
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50  bg-opacity-50 z-50 flex">
          <div className="w-3/4 bg-[var(--secondary-blue)] p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <Image src="/images/logo.svg" alt="Logo" width={80} height={60} />
              <button onClick={() => setIsOpen(false)}>
                <X size={24} className="text-white" />
              </button>
            </div>

            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    href={
                      Array.isArray(item.paths) ? item.paths[0] : item.paths
                    }
                  >
                    <div
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg font-semibold ${
                        isActive(item.paths)
                          ? "bg-white text-[var(--secondary-blue)]"
                          : "text-white"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Image
                        src={isActive(item.paths) ? item.activeIcon : item.icon}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </div>
  );
};

export default AdminMobileSidebarModal;
