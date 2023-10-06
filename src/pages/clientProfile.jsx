import Layout from "../layout/page-layout";
import Button from "../components/button";
import { updateClient } from "../api/clients/updateClient";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClient } from "../api/clients/getClient";
import { loadPage } from "../components/page-loader";
import { PencilIcon } from "@heroicons/react/24/outline";

const ClientProfile = () => {
  const params = useParams();
  const [clientInfo, setClientInfo] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    loadPage(true);
    getClient(params.id).then((res) => setClientInfo(res));
    return loadPage(false);
  }, [params]);

  const handleProfileUpdate = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData(e.target);
    await updateClient(params.id, {
      first_name: data.get("first-name"),
      last_name: data.get("last-name"),
      gender: data.get("gender"),
      dob: data.get("dob"),
    });
    setLoading(false);
  };

  const handleImageUpdate = async (e) => {
    // setImgFile();
    // e.preventDefault();
    // await upload(e.target.files[0], params.id);
  };

  return (
    <Layout pageName="Profile">
      {/* Settings forms */}
      <div className="divide-y divide-gray/5">
        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <form
            className="md:col-span-2"
            onSubmit={(e) => handleProfileUpdate(e)}
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
              <div className="col-span-full flex items-center gap-x-8 ">
                <div className="h-32 w-32 rounded-full relative overflow-hidden shadow-md">
                  <img
                    className="h-full w-full rounded-full flex-none object-cover bg-gray-50"
                    // src="https://www.smartlayers.io/img/Fortress%20Enebei%20-%20Software-Engineer.jpeg"
                    // src="https://media.licdn.com/dms/image/C4D03AQFw9Us-4vQB2Q/profile-displayphoto-shrink_400_400/0/1650474411691?e=1701302400&v=beta&t=vCEnf_uX1FwRt1K8D0UsIN7eDP63iU5x48WLXH-aMRM"
                    src="https://media.licdn.com/dms/image/D4D03AQGwPozmTfU5bw/profile-displayphoto-shrink_400_400/0/1676495990759?e=1701302400&v=beta&t=tA0bNOzo7t-49_tD9d9CpZjLFFNe11vqCFRm1Qh4C68"
                    alt=""
                  />
                  <label
                    htmlFor="file-input"
                    className="w-full h-4 flex items-center justify-center py-1 absolute bottom-0 hover:bg-[#004792]/20  hover:h-full transition-all duration-300"
                  >
                    <PencilIcon
                      className="h-4 w-4 text-white"
                      aria-hidden="true"
                    />
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    name="image"
                    className="hidden"
                    onChange={(e) => handleImageUpdate(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    defaultValue={clientInfo?.user_profile?.first_name}
                    className="block w-full rounded-md border-0 bg-gray/5 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    defaultValue={clientInfo?.user_profile?.last_name}
                    className="block w-full rounded-md border-0 bg-gray/5 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Date of birth
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="date"
                    name="dob"
                    id="dob"
                    defaultValue={clientInfo?.user_profile?.dob}
                    className="block w-full rounded-md border-0 bg-gray/5 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    className="block w-full rounded-md border-0 bg-gray/5 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                  >
                    <option disabled>Select gender</option>
                    <option
                      selected={
                        clientInfo?.user_profile?.gender === "Male" ?? false
                      }
                    >
                      Male
                    </option>
                    <option
                      selected={
                        clientInfo?.user_profile?.gender === "Female" ?? false
                      }
                    >
                      Female
                    </option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    required
                    disabled
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={clientInfo?.email}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-gray/5 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex">
              <Button type="submit" text="save" loading={loading} />
            </div>
          </form>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              Change password
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Update your password associated with your account.
            </p>
          </div>

          <form className="md:col-span-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Current password
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="current-password"
                    name="current_password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 bg-gray/5 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  New password
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="new-password"
                    name="new_password"
                    type="password"
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 bg-gray/5 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Confirm password
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="confirm-password"
                    name="confirm_password"
                    type="password"
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 bg-gray/5 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex">
              <button
                type="submit"
                className="rounded-md bg-[#004792] px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              Log out other sessions
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Please enter your password to confirm you would like to log out of
              your other sessions across all of your devices.
            </p>
          </div>

          <form className="md:col-span-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="logout-password"
                  className="block text-sm font-medium leading-6 text-gray-600"
                >
                  Your password
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="logout-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 bg-gray/5 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex">
              <button
                type="submit"
                className="rounded-md bg-[#004792] px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Log out other sessions
              </button>
            </div>
          </form>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              Delete account
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              No longer want to use our service? You can delete your account
              here. This action is not reversible. All information related to
              this account will be deleted permanently.
            </p>
          </div>

          <form className="flex items-start md:col-span-2">
            <button
              type="submit"
              className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400"
            >
              Yes, delete my account
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ClientProfile;
