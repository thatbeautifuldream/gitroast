import { getRoast } from "~/actions/roast";
import Profile from "./_components/profile";
import GitProfile from "~/components/git-profile";
import { getProfile } from "~/actions/github";

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const roastData = await getRoast({ username: params.id });
  const profileData = await getProfile({ username: params.id });
  return (
    <>
      {/* <pre>{JSON.stringify(roastData, null, 2)}</pre> */}
      <GitProfile profile={profileData} />
      <Profile params={params} />
    </>
  );
}
