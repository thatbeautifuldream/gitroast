import Image from "next/image";
import Hero from "~/components/hero";

const people = [
  {
    name: "Milind Mishra",
    title: "bio",
    status: "Roasted",
    twitter: "https://x.com/milindmishra_",
    github: "https://github.com/thatbeautifldream",
    imageUrl: "https://avatars.githubusercontent.com/u/28717686?v=4",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {people.map((person) => (
          <li
            key={person.twitter}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <Image
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                width={128}
                height={128}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">{person.title}</dd>
                <dt className="sr-only">Status</dt>
                <dd className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                    {person.status}
                  </span>
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
