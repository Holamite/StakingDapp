import { Box, Card, Flex, Text } from "@radix-ui/themes";

const Balance = () => {
  return (
    <Card size="2" style={{ width: 500, height: 500 }}>
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <Text as="div" weight="bold">
              ETH
            </Text>
            <hr />
          </Flex>
          <Flex align="center">
            <Text>MONIE</Text>
            <hr />
          </Flex>
          <Flex align="center">
            <Text as="div" weight="bold">
              Monie
            </Text>
            <button className="text-white bg-blue-600 py-1 px-4 rounded-md">
              Claim Now
            </button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Balance;
