import { Box, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useStake from "../hooks/useStake";
import usePools from "../hooks/UsePools";

const Stake = () => {
  const [id, setId] = useState();
  const [stakeId, setStakeId] = useState(0);
  const handleStake = useStake(stakeId);
  const [amount, setAmount] = useState(0);

  const poolID = usePools();

  const poolIds = [...Array.from({ length: poolID })].map((_, index) => index);

  console.log(poolIds[stakeId], id);

  return (
    <Card size="2" style={{ width: 500, height: 500 }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <Text as="div" weight="bold">
              Stake
            </Text>
            <TextField.Input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Voter's Address"
            />
            <TextField.Input
              value={id}
              onChange={(e) => setId(Number(e.target.value))}
              placeholder="Enter pool Id"
            />
            <button
              className="text-white bg-blue-600 py-1 px-4 rounded-md"
              onClick={() => handleStake(setStakeId(poolIds[id]))}
            >
              Stake
            </button>
          </Flex>
          <Flex align="center">
            <Text>You will receive</Text>
            <Text>MONIE</Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Stake;
