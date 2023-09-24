import {
  Cog6ToothIcon,
  VideoCameraIcon,
  CalendarIcon,
  UserCircleIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "../components/logo";

const navigation = [
  {
    name: "Sessions",
    href: "/session",
    current: false,
    icon: VideoCameraIcon,
  },
  {
    name: "Therapist",
    href: "/therapists",
    current: false,
    icon: IdentificationIcon,
  },
  {
    name: "Schedule",
    href: "/schedule",
    current: false,
    icon: CalendarIcon,
  },
  {
    name: "Profile",
    href: "/profile",
    current: false,
    icon: UserCircleIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const currentPage = window.location.pathname;

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-[#f4f7fe] rounded-lg px-6 pb-4">
      <div className="pt-8 flex items-left ">
        <Logo />
      </div>
      <nav className="flex flex-1 flex-col mt-16 border-t border-gray-300">
        <ul className="flex flex-1 flex-col gap-y-7 pt-8">
          <li>
            <ul className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={classNames(
                      currentPage.includes(item.href)
                        ? "bg-gray-200  border-r-2 border-[#004792] text-[#004792]"
                        : "text-gray-700 hover:text-[#004792] hover:bg-gray-100",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        currentPage.includes(item.href)
                          ? "text-[#004792]"
                          : "text-gray-400 group-hover:text-[#004792]",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="mt-auto">
            <Link
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-[#004792]"
            >
              <Cog6ToothIcon
                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-[#004792]"
                aria-hidden="true"
              />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
