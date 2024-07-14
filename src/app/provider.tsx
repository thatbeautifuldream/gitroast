"use client";

import { ReactQueryProvider } from "~/lib/providers";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Provider;
