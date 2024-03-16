import { Box, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";

const Stake = () => {
  const [amount, setAmount] = useState(0);

  return (
    <Card
      size="2"
      style={{ width: 500, height: 500 }}
      align="center"
      justify="center"
    >
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
            <button
              className="text-white bg-blue-600 py-1 px-4 rounded-md"
              // onClick={() => handleVote(id)}
            >
              Approve
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

export default Stake;
