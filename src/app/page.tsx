import { getProfileMetrics } from "~/actions/github";

export default async function HomePage() {
  const metrics = await getProfileMetrics();
  return <pre>{JSON.stringify(metrics, null, 2)}</pre>;
}
