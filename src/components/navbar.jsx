import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from "react";

export default function Navbar({ setSidebarOpen, pageName }) {
  const currentUser = JSON.parse(localStorage.getItem("user_client")) ?? {};
  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-sm">
      <div>
        <div className="h-6 w-[300px] pt-1">
          <Link
            className="text-sm font-normal text-grey-700 hover:underline "
            to="session"
          >
            Page
          </Link>
          <span className="mx-1 text-sm text-grey-700 hover:text-grey-700">
            /
          </span>
          <Link
            className="text-sm font-normal capitalize text-grey-700 hover:underline"
            to="#"
          >
            {pageName}
          </Link>
        </div>

        <p className="shrink text-[33px] capitalize text-grey-700">
          <Link to="#" className="font-bold capitalize hover:text-grey-700">
            {pageName}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-[#e6edf4] text-grey-700 xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-[#e6edf4] text-sm font-medium text-grey-700 outline-none placeholder:!text-gray-400  sm:w-fit"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 xl:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Bars3Icon className="h-5 w-5" />
        </span>
        <span
          className="flex cursor-pointer text-xl text-gray-600"
          onClick={() => setSidebarOpen(true)}
        >
          <BellIcon className="h-5 w-5" />
        </span>

        {/* Profile & Dropdown */}

        <Menu as="div" className="relative">
          <Menu.Button className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="hidden lg:flex lg:items-center">
              <ChevronDownIcon
                className="ml-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-56 origin-top-right bg-white py-2 rounded-md shadow-xl shadow-shadow-500 ring-1 ring-gray-900/5 focus:outline-none">
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700">
                    👋 Hi, {currentUser?.user_profile?.first_name}
                  </p>{" "}
                </div>
              </div>
              <div className="h-px w-full bg-gray-200  " />

              <div className="flex flex-col p-4">
                <a href=" " className="text-sm text-gray-800">
                  Profile Settings
                </a>

                <a
                  href=" "
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  Log Out
                </a>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}
