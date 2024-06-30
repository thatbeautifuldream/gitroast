"use client";

import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { getProfile, type Profile } from "~/actions/github";
import { findOrGenerateTextAction } from "~/actions/groq";
import GitProfile from "~/components/git-profile";

export default function Profile({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const id = params.id;
  const [profile, setProfile] = useState<Profile | null>(null);
  const [generation, setGeneration] = useState("");

  useEffect(() => {
    async function fetchData() {
      const profileData = getProfile({ username: id });
      const generationData = profileData.then((data) => {
        if (data) {
          return findOrGenerateTextAction({ profile: data });
        }
        return Promise.resolve("");
      });

      void Promise.all([profileData, generationData]).then(
        ([profileResult, generationResult]) => {
          setProfile(profileResult ?? null);
          setGeneration(generationResult);
        },
      );
    }

    void fetchData();
  }, [id]);

  if (!profile)
    return (
      <Loader className="flex h-screen animate-spin items-center justify-center" />
    );

  return (
    <>
      <GitProfile profile={profile} />
      <div className="space-y-4">
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          {generation}
        </blockquote>
      </div>
    </>
  );
}
