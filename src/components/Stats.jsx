import { Box, Card, Flex, Text, Avatar } from "@radix-ui/themes";
import CreatePool from "./CreatePool";
import useStakeBalance from "../hooks/useStakeBalance";
import usePools from "../hooks/UsePools";

const Stats = () => {
  const poolID = usePools();

  const amount = useStakeBalance();
  console.log(poolID);

  const poolIds = [...Array.from({ length: poolID })].map((_, index) => index);

  return (
    <Card size="2" style={{ width: 500, height: 500 }} className="mt-5 mb-5">
      <CreatePool />

      <div className="overflow-y-scroll h-[340px]">
        {poolIds.length === 0 ? (
          <Text>No pool yet!!!</Text>
        ) : (
          poolIds.map((id) => {
            return (
              <Card style={{ maxWidth: 600 }}>
                <Flex gap="3" align="center">
                  <Avatar size="3" radius="full" fallback={id} />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Pool{id}
                    </Text>
                    <Text as="div" size="2" color="gray">
                      Amount Staked: {amount}
                    </Text>

                    <Text as="div" size="2" color="gray">
                      Reward rate: 0
                    </Text>
                  </Box>
                </Flex>
              </Card>
            );
          })
        )}
      </div>
    </Card>
  );
};

export default Stats;
