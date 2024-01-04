import { Flex, Text, Button, Container, Heading } from "@radix-ui/themes";

function Header() {
  return (
    <Container>
      <Heading as="h1" size="8" mb="5">
        Dashboard
      </Heading>
    </Container>
  );
}

export default Header;
