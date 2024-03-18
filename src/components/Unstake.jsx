import { Box, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useUnstake from "../hooks/useUnstake";
import usePools from "../hooks/UsePools";

const Unstake = () => {
  const poolID = usePools();

  const [id, setId] = useState(0);
  const [unstakeId, setUnstakeId] = useState(0);

  const handleUntake = useUnstake(unstakeId);

  const poolIds = [...Array.from({ length: poolID })].map((_, index) => index);

  return (
    <Card size="2" style={{ width: 500, height: 500 }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <Text as="div" weight="bold">
              Unstake
            </Text>
            <TextField.Input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter pool Id"
            />
            <button
              className="text-white bg-blue-600 py-1 px-4 rounded-md"
              onClick={() => handleUntake(setUnstakeId(poolIds[id]))}
            >
              Unstake
            </button>
          </Flex>
          <Flex align="center">
            <Text>You will receive</Text>
            <Text>MONIE</Text>
          </Flex>
          <Flex align="center">
            <Text>Staking APR</Text>
            <Text>0.5% Daily</Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Unstake;
