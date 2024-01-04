import {
  Flex,
  Button,
  Box,
  Heading,
  Tabs,
  Text,
  Badge,
} from "@radix-ui/themes";
import DashCards from "./DashCards";
import { Overview } from "./Overview";
import DashTable from "./DashTable";
import {
  MagnifyingGlassIcon,
  CaretDownIcon,
  CaretSortIcon,
  PlusCircledIcon,
  CheckIcon,
} from "@radix-ui/react-icons";

function DashTop() {
  return (
    <Box mt="5">
      <Flex gap="3" justify="between" align="center">
        <Box>
          <Heading>Dashboard</Heading>
        </Box>
        <Box>
          <Button size="3" color="Violet">
            Download
          </Button>
        </Box>
      </Flex>
      {/* <Flex gap="5" align="center" mt="3" className="dashmenu">
        <Box>
          <Button size="2" radius="small" className="activemenu">
            Overview
          </Button>
        </Box>
        <Box>
          <Button variant="ghost" size="2" radius="small">
            Analytics
          </Button>
        </Box>
        <Box>
          <Button variant="ghost" size="2" radius="small">
            Reports
          </Button>
        </Box>
        <Box>
          <Button variant="ghost" size="2" radius="small">
            Notifications
          </Button>
        </Box>
      </Flex> */}
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
          <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
          <Tabs.Trigger value="notifications">
            Notifications
            <Badge color="crimson" size="1" radius="full">
              2
            </Badge>
          </Tabs.Trigger>
        </Tabs.List>

        <Box my="7">
          <Tabs.Content value="overview">
            <DashCards />
            <Flex gap="5">
              <Box width="100%">
                <Overview />
              </Box>
              <Box width="100%">
                <DashTable />
              </Box>
            </Flex>
          </Tabs.Content>

          <Tabs.Content value="analytics">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="reports">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>
          <Tabs.Content value="notifications">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  );
}

export default DashTop;
