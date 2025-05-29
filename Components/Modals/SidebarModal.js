"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const AdminMobileSidebarModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const menuItems = [
    {
      name: "Overview",
      path: "/AdminDashboard",
      icon: "dashboard.png",
      activeIcon: "dashboardblue.svg",
    },
    {
      name: "User & Supplier Management",
      path: "/AdminDashboard/Profile",
      icon: "managment.png",
      activeIcon: "profileblue.svg",
    },
    {
      name: "Report & Analytics",
      path: "/AdminDashboard/Orders",
      icon: "orders.svg",
      activeIcon: "orderblue.svg",
    },
    {
      name: "Orders",
      path: "/AdminDashboard/Orders",
      icon: "quotation.svg",
      activeIcon: "orderblue.svg",
    },
    {
      name: "Products Management",
      path: "/AdminDashboard/ProductManagment",
      icon: "managment.png",
      activeIcon: "productwhite.png",
    },
    {
      name: "Earning & Financial",
      path: "/AdminDashboard/Payment",
      icon: "payment.svg",
      activeIcon: "paymentblue.svg",
    },
    {
      name: "Quotation",
      path: "/AdminDashboard/Quotation",
      icon: "inquiry.png",
      activeIcon: "inquiryblue.png",
    },
    {
      name: "Ad Management",
      path: "/AdminDashboard/AdManagment",
      icon: "Ad.png",
      activeIcon: "adblue.png",
    },
    {
      name: "Offers Management",
      path: "/AdminDashboard/DiscountCode",
      icon: "offer.png",
      activeIcon: "offerwhite.png",
    },
    {
      name: "Brand Management",
      path: "/AdminDashboard/Brands",
      icon: "brand.png",
      activeIcon: "brandblue.png",
    },
    {
      name: "Permission Management",
      path: "/AdminDashboard/Adminstartors",
      icon: "permission.png",
      activeIcon: "permissionblue.png",
    },
    {
      name: "Performance Monitoring",
      path: "/AdminDashboard/Performance",
      icon: "performance.png",
      activeIcon: "performanceblue.png",
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white p-2 md:hidden"
      >
        <Menu className="w-6 h-6" color="black" />
      </button>

      {isOpen && (
        <div className="fixed z-50 inset-0 bg-black/50 flex">
          <div className="w-2/3 h-full bg-[var(--secondary-blue)] p-4 rounded-r-xl overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <Image src="/images/logo.svg" alt="Logo" width={80} height={60} />
              <button onClick={() => setIsOpen(false)}>
                <X className="text-white w-6 h-6" />
              </button>
            </div>

            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link href={item.path} onClick={() => setIsOpen(false)}>
                    <div
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors font-medium ${
                        isActive(item.path)
                          ? "bg-white text-[var(--secondary-blue)]"
                          : "text-white"
                      }`}
                    >
                      <div className="mr-3 w-5 h-5 relative">
                        <Image
                          src={`/icons/${
                            isActive(item.path) ? item.activeIcon : item.icon
                          }`}
                          alt={`${item.name} icon`}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default AdminMobileSidebarModal;
