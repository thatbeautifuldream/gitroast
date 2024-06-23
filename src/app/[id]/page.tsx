"use client";

import { Button } from "~/components/ui/button";
import { streamTextAction } from "~/actions/groq";
import { useEffect, useState } from "react";
import { readStreamableValue } from "ai/rsc";
import { type Profile, getProfile } from "~/actions/github";
import GradientFillButton from "~/components/gradient-fill-button";

export default function Page({
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
      setProfile(data ?? {});
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, [id]);

  return (
    <>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <div className="space-y-4">
        <GradientFillButton
          onClick={async () => {
            const result = await streamTextAction({
              profile: profile,
            });
            for await (const delta of readStreamableValue(result))
              setGeneration(delta ?? "");
          }}
        >
          Roast {profile?.login ?? "this user"}
        </GradientFillButton>
        <p
          className="text-center"
          dangerouslySetInnerHTML={{ __html: generation }}
        />
      </div>
    </>
  );
}
