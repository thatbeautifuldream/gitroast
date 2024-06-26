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
      const data = await getProfile({ username: id });
      setProfile(data ?? null);
    }

    void fetchData();
  }, [id]);

  useEffect(() => {
    if (profile) {
      async function generateText() {
        const result = await findOrGenerateTextAction({ profile });
        setGeneration(result);
      }

      void generateText();
    }
  }, [profile]);

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
