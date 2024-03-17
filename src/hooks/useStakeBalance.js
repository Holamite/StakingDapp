import { ethers } from "ethers";
import { useEffect, useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import abi from "../constants/stakingpool.json";
import { toast } from "react-toastify";

const useStakeBalance = (poolId) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [Data, setData] = useState(0);

  let balance;

  useEffect(() => {
    async () => {
      if (!isSupportedChain(chainId)) toast.error("Wrong Network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();
      const contract = new ethers.Contract(
        import.meta.env.VITE_staking_contract_address,
        abi,
        signer
      );

      try {
        const transaction = await contract.getUserStakeBalance(
          poolId,
          signer.address
        );
        balance = Number(transaction);

        setData(balance);
      } catch (error) {
        console.log(error);
      }
    };
  }, [chainId]);

  console.log("got here");

  return Data;
};

export default useStakeBalance;
