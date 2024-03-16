import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { isAddress } from "ethers";
import { getProvider } from "../Constant/provider";
import stakingPool from "../constants/stakingpool.json";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";

const useCreatePool = (rate) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return toast.error("Wrong network");
    if (!isAddress(rate)) return toast.error("Invalid rate");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = new ethers.Contract(
      import.meta.env.VITE_staking_contract_address,
      stakingPool,
      signer
    );

    try {
      const transaction = await contract.createPool(rate);
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        return toast.success(" successfully created pool!");
      }

      console.log("pool creation failed!");
    } catch (error) {
      toast.error("error: ", error);
    }
  }, [rate, chainId, walletProvider]);
};

export default useCreatePool;
