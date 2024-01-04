import { Flex, Text, Link, Container, Box } from "@radix-ui/themes";

function Footer() {
  return (
    <Container align="center" my="5">
      <Text size="1" align="center">
        Chas Academy - React & Radix Dashboard
      </Text>
      <Box>
        <Link
          href="https://github.com/ozayo/Chas-Radix-Dashboard"
          target="_blank"
          size="1"
        >
          Ozay Ozdemir
        </Link>
      </Box>
    </Container>
  );
}

export default Footer;
