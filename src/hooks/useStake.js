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

const useStake = (id) => {
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

    const stakeTokenContract = new ethers.Contract(
      import.meta.env.VITE_Stake_token_address,
      tokenAbi,
      signer
    );

    const value = ethers.parseUnits("100", 18);

    try {
      console.log(`trying to approve ${value}`);
      const approve = await stakeTokenContract.approve(
        import.meta.env.VITE_staking_contract_address,
        value
      );

      const approveReceipt = await approve.wait();

      console.log("trying to stake", approveReceipt);
      if (approveReceipt.status) {
        const staked = await stakingContract.stake(id, value);
        console.log("staked");

        const receipt = await staked.wait();
        console.log("trying 3", receipt);

        if (receipt.status) {
          return toast.success("Stake Successful!");
        }

        return toast.error(" Failed to Stake");
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }, [id, chainId, walletProvider]);
};
export default useStake;
