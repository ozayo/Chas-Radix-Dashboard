import {
  Flex,
  Button,
  Box,
  Heading,
  Tabs,
  Text,
  Badge,
  Grid,
} from "@radix-ui/themes";
import DashCards from "./DashCards";
import { Overview } from "./Overview";
import DashTable from "./DashTable";
import DashNot from "./DashNot";
import DashAnCards from "./DashAnCards";
import DashAnCarts from "./DashAnCarts";
import DashAnInfos from "./DashAnInfos";
import DashReport from "./DashReport";
import MultiSelect from "./MultiSelect";

function DashTop() {
  return (
    <Box mt="5">
      <Flex
        gap="3"
        justify="between"
        align="center"
        mb="4"
        direction={{
          initial: "column",
          xs: "row",
          md: "row",
        }}
      >
        <Box>
          <Heading>Dashboard</Heading>
        </Box>
        <Box>
          <MultiSelect />
          <Button size="2" className="download" ml="2">
            Download
          </Button>
        </Box>
      </Flex>
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
          <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
          <Tabs.Trigger value="notifications">
            Notifications{" "}
            <Badge color="crimson" size="1" radius="full" className="notbadge">
              3
            </Badge>
          </Tabs.Trigger>
        </Tabs.List>

        <Box my="7">
          <Tabs.Content value="overview">
            <DashCards />
            <Grid
              columns={{
                initial: "1",
                xs: "1",
                md: "2",
              }}
              gap="5"
              width="auto"
              mb="5"
            >
              <Box width="100%">
                <Overview />
              </Box>
              <Box width="100%">
                <DashTable />
              </Box>
            </Grid>
          </Tabs.Content>

          <Tabs.Content value="analytics">
            <DashAnCards />
            <DashAnCarts />
            <DashAnInfos />
          </Tabs.Content>

          <Tabs.Content value="reports">
            <DashReport />
          </Tabs.Content>
          <Tabs.Content value="notifications">
            <DashNot />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  );
}

export default DashTop;
