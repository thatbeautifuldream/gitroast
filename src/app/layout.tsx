import "~/styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "~/lib/utils";
import Provider from "~/app/provider";

export const metadata: Metadata = {
  title: "GitRoast",
  description: "Get your github profile roasted by AI.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-red-50 font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Provider>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
