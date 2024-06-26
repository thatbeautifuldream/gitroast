import Profile from "./_components/profile";

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <Profile params={params} />;
}
