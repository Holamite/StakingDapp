import { Flex } from "@radix-ui/themes";

export default function Header() {
  return (
    <Flex gap={"4"} align={"center"} justify={"between"} className="p-[2rem]">
      <div className="text-2xl text-red-500">Holamite Staking</div>
      <w3m-button />
    </Flex>
  );
}
