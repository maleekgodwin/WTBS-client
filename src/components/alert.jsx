import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";

export const notify = (type, message) => {
  if (type === "success") {
    document.getElementById("successMessage").innerHTML = message;
  } else if (type === "error") {
    document.getElementById("errMessage").innerHTML = message;
  }
  document.getElementById(type).style.display = "block";

  return setTimeout(() => closeAlert(type), 5000);
};

const closeAlert = (type) => {
  document.getElementById(type).style.display = "none";
};

export default function Alert() {
  return (
    <>
      {/* Success  Alert*/}
      <div
        id="success"
        className="hidden shadow-md rounded-md fixed top-10 left-[50%] translate-x-[-50%] w-11/12 sm:w-4/5 lg:w-2/5 mx-auto bg-green-100 p-4 z-[100]"
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p
              id="successMessage"
              className="text-sm font-medium text-green-800"
            ></p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon
                  onClick={() => closeAlert("success")}
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      <div
        id="error"
        className="hidden shadow-md rounded-md fixed top-10 left-[50%] translate-x-[-50%] w-4/5 lg:w-2/5 mx-auto bg-red-100 p-4 z-[100]"
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p id="errMessage" className="text-sm font-medium text-red-800"></p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon
                  onClick={() => closeAlert("error")}
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
