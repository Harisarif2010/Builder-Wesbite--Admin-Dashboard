"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();

  // const isActive = (path) => pathname === path;
  const isActive = (paths) =>
    Array.isArray(paths) ? paths.includes(pathname) : pathname === paths;

  return (
    //w-64 original
    <div className="hidden md:flex flex-col w-1/5  bg-[var(--secondary-blue)] h-auto border  rounded-tr-[13px] rounded-l-[4px] ">
      {/* Logo section */}
      <div>
        <Link href="/">
          <div className="cursor-pointer  justify-center my-2">
            <Image
              src="/images/logo.svg"
              alt="logos"
              width={90}
              height={70}
              className="mx-auto"
              priority
            />
          </div>
        </Link>
        <div className="flex-1 ">
          {/* MENU Section */}
          <div className="mb-6">
            <ul>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/">
                  <div
                    className={`flex items-center  px-4  py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold my-3  ${
                      isActive([
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
                      ])
                        ? "bg-white text-[var(--secondary-blue)] "
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive([
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
                          ])
                            ? "/icons/dashboardblue.svg"
                            : "/icons/dashboard.png"
                        }
                        alt="Dashboard icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[14px]">Overview</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Suppliers">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive("/AdminDashboard/Suppliers")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Suppliers")
                            ? "/icons/profileblue.svg"
                            : "/icons/managment.png"
                        }
                        alt="Pet Profile icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[14px]">Suppliers Managment</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Users">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive("/AdminDashboard/Users")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Users")
                            ? "/icons/profileblue.svg"
                            : "/icons/managment.png"
                        }
                        alt="Pet Profile icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[14px]">User Managment</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Report">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive("/AdminDashboard/Report")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Report")
                            ? "/icons/orderblue.svg"
                            : "/icons/orders.svg"
                        }
                        alt="Feeding Schedule icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[14px]">Report & Analytics</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Orders">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive("/AdminDashboard/Orders")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Orders")
                            ? "/icons/orderblue.svg"
                            : "/icons/quotation.svg"
                        }
                        alt="Feeding Schedule icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[14px]">Orders</span>
                  </div>
                </Link>
              </li>

              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/ProductManagment">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive("/AdminDashboard/Profile")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Profile")
                            ? "/icons/profileblue.svg"
                            : "/icons/managment.png"
                        }
                        alt="Pet Profile icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[14px]">Products Managment</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Payments">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive([
                        "/AdminDashboard/Payments",
                        "/AdminDashboard/Financials",
                      ])
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive([
                            "/AdminDashboard/Payments",
                            "/AdminDashboard/Financials",
                          ])
                            ? "/icons/paymentblue.svg"
                            : "/icons/payment.svg"
                        }
                        alt="Payment icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[14px]">Earning & Financial</span>
                  </div>
                </Link>
              </li>

              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/SubscriptionManagment">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive([
                        "/AdminDashboard/SubscriptionManagment",
                        "/AdminDashboard/AddSubscription",
                      ])
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive([
                            "/AdminDashboard/SubscriptionManagment",
                            "/AdminDashboard/AddSubscription",
                          ])
                            ? "/icons/inquiryblue.png"
                            : "/icons/subscribe.png"
                        }
                        alt="Pet Profile icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[14px]">Subscription Management</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Quotation">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive("/AdminDashboard/PainScore")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Quotation")
                            ? "/icons/inquiryblue.png"
                            : "/icons/inquiry.png"
                        }
                        alt="Pet Profile icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[14px]">Quotation </span>
                  </div>
                </Link>
              </li>

              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/AdManagment">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive([
                        "/AdminDashboard/AdManagment",
                        "/AdminDashboard/CreateAd",
                      ])
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive([
                            "/AdminDashboard/AdManagment",
                            "/AdminDashboard/CreateAd",
                          ])
                            ? "/icons/adblue.png"
                            : "/icons/Ad.png"
                        }
                        alt="Good Day/Bad Day icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-[14px]">Ad Management</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/DiscountCode">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive([
                        "/AdminDashboard/DiscountCode",
                        "/AdminDashboard/AddDiscount",
                      ])
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive([
                            "/AdminDashboard/Payments",
                            "/AdminDashboard/Financials",
                          ])
                            ? "/icons/offerwhite.png"
                            : "/icons/offer.png"
                        }
                        alt="Good Day/Bad Day icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-[14px]">Offers Management</span>
                  </div>
                </Link>
              </li>

              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Brands">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive("/AdminDashboard/Help")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive([
                            "/AdminDashboard/Brands",
                            "/AdminDashboard/AddBrand",
                          ])
                            ? "/icons/brandblue.png"
                            : "/icons/brand.png"
                        }
                        alt="Good Day/Bad Day icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-[14px]">Brand Management</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Adminstartors">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive([
                        "/AdminDashboard/Adminstartors",
                        "/AdminDashboard/AddAdminstartor",
                      ])
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive([
                            "/AdminDashboard/Adminstartors",
                            "/AdminDashboard/AddAdminstartor",
                          ])
                            ? "/icons/permissionblue.png"
                            : "/icons/permission.png"
                        }
                        alt="Good Day/Bad Day icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-[14px]">Permission Management</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Performance ">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-bold ${
                      isActive("/AdminDashboard/Performance")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Performance")
                            ? "/icons/performanceblue.png"
                            : "/icons/performance.png"
                        }
                        alt="Daily"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-[14px]">Performance Monitoring</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
