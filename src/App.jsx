import { Flex, Text, Button, Container, Heading } from "@radix-ui/themes";
import DashHeader from "./components/DashHeader";
import DashTop from "./components/DashTop";
// import DashCards from "./components/DashCards";
// import { Overview } from "./components/Overview";

function App() {
  return (
    <Container>
      <DashHeader />
      <DashTop />
      {/* <DashCards /> */}
      {/* <Overview /> */}
    </Container>
  );
}

export default App;
