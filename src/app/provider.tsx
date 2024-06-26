"use client";

import { ReactQueryProvider, AuthSessionProvider } from "~/lib/providers";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <AuthSessionProvider>{children}</AuthSessionProvider>
    </ReactQueryProvider>
  );
};

export default Provider;
