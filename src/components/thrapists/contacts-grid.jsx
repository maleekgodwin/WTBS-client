import { UserIcon, VideoCameraIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const people = [
  {
    name: "Bukola Yemi",
    title: "Behavioral Health Therapist",
    bill: "$50/session",
    email: "bukolayemi@example.com",
    telephone: "+234-810-009-0122",
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQFKywxsyh34uw/profile-displayphoto-shrink_400_400/0/1662368124289?e=1701907200&v=beta&t=mxhAY5HTOg5qwmjsiQsU9RXgF7SiyAw93YI9Fvyo2Fk",
  },
  {
    name: "Olasunkanmi Ajibola",
    title: "Counselor/Therapist",
    bill: "$70/session",
    email: "olasunkanmi@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQEazkqcGRrlFw/profile-displayphoto-shrink_400_400/0/1662898124522?e=1701907200&v=beta&t=PHw1EQ6U5-HfE64iOqqSoZGjZdAignGDRNTqi7BTlK8",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQEYU1mLzUWQ5A/profile-displayphoto-shrink_800_800/0/1695402183990?e=1701907200&v=beta&t=9U_t5xx5tkUBRPZtfwhTQ71_49oFyBnglNpJP5DS7Jw",

    name: "Oghenevwede Emeni",
    title: "Clinical Social Worker",
    bill: "$55/session",
    email: "genevwe@example.com",
    telephone: "+1-202-555-0170",
  },
  {
    name: "Malik Godwin",
    title: "Clinical Therapist",
    bill: "$50/session",
    email: "malik@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQFw9Us-4vQB2Q/profile-displayphoto-shrink_400_400/0/1650474411691?e=1701302400&v=beta&t=vCEnf_uX1FwRt1K8D0UsIN7eDP63iU5x48WLXH-aMRM",
  },
];

export default function TherapistContactList() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {person.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.title}</dd>
              <dt className="sr-only">bill</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.bill}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <Link
                  to={"/therapists/id"}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <UserIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  View profile
                </Link>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <Link
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <VideoCameraIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Book Session
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
