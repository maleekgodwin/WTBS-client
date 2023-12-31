import { Link } from "react-router-dom";
import Layout from "../layout/page-layout";
import { PaperClipIcon } from "@heroicons/react/20/solid";

const TherapistProfile = () => {
  return (
    <Layout pageName={"Therapist / profile"}>
      <div className="lg:w-[90%] m-auto">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Therapists Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mt-6 md:w-[60%] w-full">
            <dl className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative flex items-center ">
                <div
                  style={{
                    backgroundImage:
                      "url(https://media.licdn.com/dms/image/D4D03AQEYU1mLzUWQ5A/profile-displayphoto-shrink_800_800/0/1695402183990?e=1701907200&v=beta&t=9U_t5xx5tkUBRPZtfwhTQ71_49oFyBnglNpJP5DS7Jw)",
                  }}
                  className="hoverEff flex-shrink-0 h-20 w-20 rounded-lg"
                ></div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Oghenevwede Emeni
                  </p>
                  <p className="truncate text-sm text-gray-500">
                    Clinical Social Worker
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                  Oghenevwede Emeni
                </dd>
              </div>
              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Experience
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                  24 years of practice
                </dd>
              </div>
              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                  genevwe@example.com
                </dd>
              </div>
              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Billing
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                  $60/Sessions
                </dd>
              </div>
              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Education
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                  Stanford University
                </dd>
              </div>
            </dl>
            <button className="rounded-md bg-[#004792] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#004792]/80">
              Book session
            </button>
          </div>
          <div className="md:w-[35%] w-full shadow-md rounded-lg p-4">
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                About
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                Best-selling author Dr. Oghenevwede Emeni is the founder of the
                Behavioral Clinic in Denver, Colorado. She has more than 20
                years of clinical experience as a licensed marriage and family
                therapist, and nearly 20 years of experience running a private
                practice. Her work focuses on helping fellow therapists find
                purpose and fulfillment in private practice by exploring their
                deepest motivations in life. Dr. Oghenevwede Emeni currently
                lives in the Denver area with his partner, two children, and
                GoldenDoodle named Roxy.
              </dd>
            </div>

            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Attachments
              </dt>
              <dd className="mt-2 text-sm text-gray-900">
                <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          resume_back_end_developer.pdf
                        </span>
                        <span className="flex-shrink-0 text-gray-400">
                          2.4mb
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          coverletter_back_end_developer.pdf
                        </span>
                        <span className="flex-shrink-0 text-gray-400">
                          4.5mb
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </Link>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TherapistProfile;
