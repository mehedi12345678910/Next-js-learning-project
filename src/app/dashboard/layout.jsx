import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 min-h-screen p-4 lg:p-0">
      {/* Sidebar: Full width on mobile, 3 columns on desktop */}
      <div className="col-span-1 lg:col-span-3 border-b-2 lg:border-b-0 lg:border-r-2 pb-5 lg:pb-0 lg:pr-5">
        <h2 className="text-2xl lg:text-3xl font-semibold">Navigation ⚔</h2>

        {/* Flex-row on mobile, flex-col on desktop */}
        <div className="flex flex-row lg:flex-col gap-3 lg:gap-5 mt-6 lg:mt-10 overflow-x-auto lg:overflow-visible">
          <Link
            className="py-2 px-4 whitespace-nowrap bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 whitespace-nowrap bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="py-2 px-4 whitespace-nowrap bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
            href={"/setting"}
          >
            Settings 🛠
          </Link>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-9 py-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;

// 69-8
