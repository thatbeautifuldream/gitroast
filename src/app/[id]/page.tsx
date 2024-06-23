import { getProfile } from "~/actions/github";
import GitProfile from "~/components/git-profile";
import Profile from "./_components/profile";

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const profileData = await getProfile({ username: params.id });
  // const roastData = await getRoast({ username: params.id });
  return (
    <>
      {/* <pre>{JSON.stringify(roastData, null, 2)}</pre> */}
      <GitProfile profile={profileData} />
      <Profile params={params} />
    </>
  );
}
