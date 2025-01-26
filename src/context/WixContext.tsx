"use client";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext, ReactNode } from "react";

import { members } from "@wix/members";
type RefreshToken = {
  value: string;
  role: any;
};

const refreshToken: RefreshToken | null = Cookies.get("refreshToken")
  ? JSON.parse(Cookies.get("refreshToken") as string)
  : {};

const myWixClient = createClient({
  modules: { products },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_SECRET || "",
    tokens: {
      accessToken: { value: "", expiresAt: 0 },
      refreshToken: refreshToken || { value: "", expiresAt: 0 },
    },
  }),
});

export type WixClient = typeof myWixClient;

export const WixClientContext = createContext<WixClient>(myWixClient);

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={myWixClient}>
      {children}
    </WixClientContext.Provider>
  );
};
