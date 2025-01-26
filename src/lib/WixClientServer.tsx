import { OAuthStrategy, createClient } from "@wix/sdk";

import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export const WixClientServer = async () => {
  try {
    const cookieStore = cookies();
    type RefreshToken = {
      value: string;
      expiresAt: number | string;
      role: any;
    };

    const refreshToken: RefreshToken = cookieStore.get("refreshToken")?.value
      ? JSON.parse(cookieStore.get("refreshToken")?.value as string)
      : null;

    const wixClient = createClient({
      modules: { products, collections },
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_SECRET || "",
        tokens: {
          accessToken: { value: "", expiresAt: 0 },
          refreshToken: refreshToken || { value: "", expiresAt: 0 },
        },
      }),
    });

    return wixClient;
  } catch (error) {
    console.log(error);
  }
};
