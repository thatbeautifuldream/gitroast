import Image from "next/image";
import Link from "next/link";
import type { Profile } from "~/actions/github";

export default function GitProfile({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col justify-center gap-4 px-4 py-10 sm:items-center sm:px-6">
      <div className="flex justify-between sm:hidden">
        <div className="relative h-16 w-16">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <Image
              className="border-1 flex h-16 w-16 items-center justify-center rounded-full border-white bg-white bg-cover bg-center bg-no-repeat object-cover transition-opacity hover:opacity-90"
              src={profile?.avatar_url}
              alt={profile?.name ?? ""}
              width="64"
              height="64"
            />
          </div>
        </div>
      </div>
      <div className="hidden hover:cursor-pointer sm:block">
        <div className="relative h-20 w-20">
          <div className="h-20 w-20 overflow-hidden rounded-full">
            <Image
              className="border-1 flex h-20 w-20 items-center justify-center rounded-full border-white bg-white bg-cover bg-center bg-no-repeat object-cover transition-opacity hover:opacity-90"
              src={profile?.avatar_url}
              alt={profile?.name ?? ""}
              width="80"
              height="80"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2 sm:items-center">
        <h1 className="text-lg font-semibold">{profile?.name}</h1>
        <div className="flex gap-2 sm:items-center">
          <Link
            href={profile?.html_url}
            target="_blank"
            className="text-sm font-semibold"
          >
            @{profile?.login}
          </Link>
          {profile?.twitter_username && (
            <>
              <span className="text-gray-gray1k text-sm font-normal">·</span>
              <Link
                href={`https://x.com/${profile?.twitter_username}`}
                target="_blank"
                className="text-sm font-semibold"
              >
                @{profile?.twitter_username}
              </Link>
            </>
          )}
        </div>
        <h2 className="text-gray-gray1k text-sm font-normal sm:text-center">
          {profile?.bio}
        </h2>
        <div className="flex gap-2 sm:items-center">
          <h3 className="text-sm font-semibold">{profile?.followers}</h3>
          <p className="text-gray-gray1k text-sm font-normal">followers</p>
          <span className="text-gray-gray1k text-sm font-normal">·</span>
          <h3 className="text-sm font-semibold">{profile?.following}</h3>
          <p className="text-gray-gray1k text-sm font-normal">following</p>
        </div>
      </div>
    </div>
  );
}
