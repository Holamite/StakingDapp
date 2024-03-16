import { Box, Card, Flex, Text } from "@radix-ui/themes";

const Stats = () => {
  return (
    <Card size="2" style={{ width: 500, height: 500 }} className="mt-5 mb-5">
      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <Text as="div" weight="bold">
              $ MONIE
            </Text>
            <Text as="div" weight="bold">
              Total Staked Monie
            </Text>
          </Flex>
          <Flex align="center">
            <div>
              <Text>You will receive</Text>
              <Text>APR</Text>
            </div>
            <Text>NO. of Stakers</Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default Stats;
