import { configureWeb3Modal } from "./connection";
import "./output.css";
import "@radix-ui/themes/styles.css";
import { Flex, Box, Container } from "@radix-ui/themes";
import Header from "./components/Header.jsx";
import Stake from "./components/Stake.jsx";
import AppTabs from "./components/AppTabs";
import Unstake from "./components/Unstake.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stats from "./components/Stats";
import Balance from "./components/Balance";

configureWeb3Modal();
function App() {
  return (
    <>
      <Container className="bg-[#7950f2]">
        <Header />

        <Flex gap="4">
          <Box>
            <Stats className="mt-5" />
            <Balance />
          </Box>

          <AppTabs Stake={<Stake />} Unstake={<Unstake />} />
        </Flex>
        <ToastContainer />
      </Container>
    </>
  );
}

export default App;
