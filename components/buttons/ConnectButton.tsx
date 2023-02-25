import { transact } from "@solana-mobile/mobile-wallet-adapter-protocol-web3js";
import React, { useCallback, useState } from "react";
import { Button } from "react-native";

import useAuthorization from "../../utils/useAuthorization";

export default function ConnectButton() {
  const { authorizeSession } = useAuthorization();
  const [authorizationInProgress, setAuthorizationInProgress] = useState(false);
  const handleConnectPress = useCallback(async () => {
    try {
      if (authorizationInProgress) {
        return;
      }
      setAuthorizationInProgress(true);
      await transact(async (wallet) => {
        await authorizeSession(wallet);
      });
    } finally {
      setAuthorizationInProgress(false);
    }
  }, []);
  return (
    <Button
      title="Connect Wallet"
      disabled={authorizationInProgress}
      onPress={handleConnectPress}
    />
  );
}
