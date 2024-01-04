import { Flex, Text, Box, Card, Badge, Grid } from "@radix-ui/themes";
import {
  AvatarIcon,
  LightningBoltIcon,
  RocketIcon,
  TargetIcon,
} from "@radix-ui/react-icons";

function DashAnCards() {
  return (
    <Grid
      columns={{
        initial: "2",
        xs: "2",
        md: "4",
      }}
      gap="5"
      width="auto"
      mb="5"
    >
      <Card size="3" className="DashCard">
        <Flex justify="between">
          <Text size="2">Views</Text>
          <TargetIcon />
        </Flex>
        <Flex direction="column">
          <Text weight="bold" size="6">
            87.248
          </Text>
          <Text size="1">
            <Badge color="green">+48%</Badge>from last month
          </Text>
        </Flex>
      </Card>
      <Card size="3" className="DashCard">
        <Flex justify="between">
          <Text size="2">Visitors</Text>
          <AvatarIcon />
        </Flex>
        <Flex direction="column">
          <Text weight="bold" size="6">
            45.345
          </Text>
          <Text size="1">
            <Badge color="green">+48%</Badge> from last month
          </Text>
        </Flex>
      </Card>
      <Card size="3" className="DashCard">
        <Flex justify="between">
          <Text size="2">Bounce rate</Text>
          <RocketIcon />
        </Flex>
        <Flex direction="column">
          <Text weight="bold" size="6">
            47%
          </Text>
          <Text size="1">
            <Badge color="red">-12%</Badge> from last month
          </Text>
        </Flex>
      </Card>
      <Card size="3" className="DashCard">
        <Flex justify="between">
          <Text size="2">Average visit time</Text>
          <LightningBoltIcon />
        </Flex>
        <Flex direction="column">
          <Text weight="bold" size="6">
            8m 7s
          </Text>
          <Text size="1">
            <Badge color="green">+18%</Badge> since last month
          </Text>
        </Flex>
      </Card>
    </Grid>
  );
}

export default DashAnCards;
