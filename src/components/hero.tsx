import HeartbeatButton from "~/components/heartbeat-button";

export default function Hero() {
  return (
    <div>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            GET GIT ROASTED
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Roast so good, you&apos;ll want to frame it.
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-6">
            <HeartbeatButton>Get Roasted</HeartbeatButton>
          </div>
        </div>
      </div>
    </div>
  );
}
