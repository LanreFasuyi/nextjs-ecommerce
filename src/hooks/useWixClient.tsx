import { WixClientContext } from "@/context/WixContext";

import { useContext } from "react";

export const useWixClient = () => {
  const WixClient = useContext(WixClientContext);
  if (!WixClient) {
    throw new Error("useWixClient must be used within a WixClientProvider");
  }
  return WixClient;
};
