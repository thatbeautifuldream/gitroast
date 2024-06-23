"use client";

import { readStreamableValue } from "ai/rsc";
import { useEffect, useState } from "react";
import { getProfile, type Profile } from "~/actions/github";
import { streamTextAction } from "~/actions/groq";
import { Loader } from "lucide-react";
// import { saveRoast } from "~/actions/roast";
import GradientFillButton from "~/components/gradient-fill-button";

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
      setProfile(data ?? {});
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, [id]);

  if (!profile)
    return (
      <Loader className="flex h-screen animate-spin items-center justify-center" />
    );

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

            // await saveRoast({
            //   username: profile?.login ?? "",
            //   message: generation,
            // });
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
