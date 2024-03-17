import { Card, Box, Flex, Button, Text, TextField } from "@radix-ui/themes";
import useCreatePool from "../hooks/useCreatePool";
import { useState } from "react";
import usePools from "../hooks/UsePools";

usePools;

const CreatePool = () => {
  const [rate, setRate] = useState("");
  const handlePool = useCreatePool(rate);

  return (
    <Card size="2" style={{ width: 425 }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Reward Rate
              </Text>
              <TextField.Input
                placeholder="Enter pool rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </label>
            <Button onClick={() => handlePool()}>Create Pool</Button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default CreatePool;
