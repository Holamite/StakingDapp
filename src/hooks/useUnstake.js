import { ethers } from "ethers";
import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import contractAbi from "../constants/stakingpool.json";
import tokenAbi from "../constants/tokenAbi.json";
import { toast } from "react-toastify";

const useUnstake = (id) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  //   console.log("looking for me? :", amount);

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return toast.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    console.log(signer, readWriteProvider);
    console.log(
      import.meta.env.VITE_staking_contract_address,
      readWriteProvider
    );

    const stakingContract = new ethers.Contract(
      import.meta.env.VITE_staking_contract_address,
      contractAbi,
      signer
    );

    try {
      const unStaked = await stakingContract.unstake(id);
      console.log("Unstaked");

      const receipt = await unStaked.wait();
      console.log("trying 3", receipt);

      if (receipt.status) {
        return toast.success("Stake Successful!");
      }

      return toast.error(" Failed to Stake");
    } catch (err) {
      console.log(err);
      return err;
    }
  }, [id, chainId, walletProvider]);
};
export default useUnstake;
