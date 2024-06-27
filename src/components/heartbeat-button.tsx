const HeartbeatButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <button className="animate-buttonheartbeat m-9 rounded-md bg-red-500 px-4 py-1 text-sm font-semibold text-white">
        {children}
      </button>
    </div>
  );
};

export default HeartbeatButton;
