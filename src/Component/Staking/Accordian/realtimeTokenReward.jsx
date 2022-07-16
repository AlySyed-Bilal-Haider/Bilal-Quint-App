import { formatUnits } from "@ethersproject/units";
import React, { useContext, useEffect, useState } from "react";
import {
  useStakingContract,
  useTokenContract,
} from "../../../ConnectivityAss/hooks";
import { AppContext } from "../../../utils";

export default function RealtimeTokenReward() {
  const { account, signer } = useContext(AppContext);
  const [reward, setreward] = useState(0);
  const stakingContract = useStakingContract(signer);
  const tokenContract = useTokenContract(signer);
  const init = async () => {
    try {
      const tokenDecimals = await tokenContract.decimals();
      setInterval(async () => {
        const reward = await stakingContract.calculateTokenReward(account);
        setreward(formatUnits(reward, tokenDecimals));
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (account) {
      init();
    }
  }, [account]);

  return <>{(+reward).toFixed(4)}</>;
}
