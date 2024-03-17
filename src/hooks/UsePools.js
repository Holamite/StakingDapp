// import { ethers } from "ethers";
// import { useCallback, useEffect } from "react";
// import { isSupportedChain } from "../utils";
// import { getProvider } from "../constants/providers";
// import {
//   useWeb3ModalAccount,
//   useWeb3ModalProvider,
// } from "@web3modal/ethers/react";
// import contractAbi from "../constants/stakingpool.json";
// import { toast } from "react-toastify";

// const usePools = () => {
//   console.log("looking for me? :");
//   const { chainId } = useWeb3ModalAccount();
//   const { walletProvider } = useWeb3ModalProvider();

//   return useEffect(async () => {
//     if (!isSupportedChain(chainId)) return toast.error("Wrong network");
//     const readWriteProvider = getProvider(walletProvider);
//     const signer = await readWriteProvider.getSigner();

//     console.log(signer, readWriteProvider);
//     console.log(
//       import.meta.env.VITE_staking_contract_address,
//       readWriteProvider
//     );

//     const stakingContract = new ethers.Contract(
//       import.meta.env.VITE_staking_contract_address,
//       contractAbi,
//       signer
//     );
//     toast.info("contracted");

//     try {
//       toast.info("trying to approve");

//       const createPool = await stakingContract.id();
//       console.log("staked");

//       return toast.success("Pool receive", Number(createPool));
//     } catch (err) {
//       console.log(err);
//       return err;
//     }
//   }, [chainId, walletProvider]);
// };
// export default usePools;

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import abi from "../constants/stakingpool.json";

const usePools = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [Data, setData] = useState(0);

  let poolrealID;

  useEffect(() => {
    (async () => {
      if (!isSupportedChain(chainId)) return console.error("Wrong Network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();
      const contract = new ethers.Contract(
        import.meta.env.VITE_staking_contract_address,
        abi,
        signer
      );

      try {
        const transaction = await contract.id();
        poolrealID = Number(transaction);

        setData(poolrealID);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [chainId]);

  console.log("got here");

  return Data;
};

export default usePools;
