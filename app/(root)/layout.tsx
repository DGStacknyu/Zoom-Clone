import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { FC, ReactNode } from "react";
export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
