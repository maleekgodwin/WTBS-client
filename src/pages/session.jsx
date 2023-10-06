import { Link } from "react-router-dom";
import Layout from "../layout/page-layout";

const Session = () => {
  return (
    <Layout pageName="Session">
      <div className="w-[90%]  lg:w-[65%] m-auto p-12 shadow-md rounded-lg">
        <h1 className="text-xl text-gray-900 font-bold mb-12">
          Upcoming Session
        </h1>

        <div className="flex justify-between flex-col md:flex-row items-start gap-6">
          <div className="w-[90%] md:w-[40%] m-auto">
            <div className="flex justify-between gap-x-8">
              <div className="flex flex-col gap-y-2">
                <span className="text-sm text-gray-500">DATE</span>
                <span className="text-base text-gray-700 font-medium">
                  25th June, 2023
                </span>
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-sm text-gray-500">TIME</span>
                <span className="text-base text-gray-700 font-medium">
                  10:00 AM
                </span>
              </div>
            </div>
            <div className="mt-8">
              <button className="rounded-md bg-[#004792] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#004792]">
                Join Now
              </button>
            </div>
          </div>

          <div className="w-[90%] md:w-[50%] m-auto  bg-white px-6 py-5 hover:border-gray-400">
            <div className="relative flex items-center">
              <img
                className=" flex-shrink-0 h-14 w-14 rounded-full"
                src="https://media.licdn.com/dms/image/C4D03AQFw9Us-4vQB2Q/profile-displayphoto-shrink_400_400/0/1650474411691?e=1701302400&v=beta&t=vCEnf_uX1FwRt1K8D0UsIN7eDP63iU5x48WLXH-aMRM"
                alt=""
              />
              <div className="flex-1 ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Malik Godwin
                </p>
                <p className="truncate text-sm text-gray-500">Psychologist</p>
              </div>
            </div>
            <Link
              to="/therapists/id"
              className="mt-6 inline-block rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              View profile
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Session;
