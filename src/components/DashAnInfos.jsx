import { Flex, Text, Box, Card, Table, Grid, Badge } from "@radix-ui/themes";
import {
  AvatarIcon,
  LightningBoltIcon,
  RocketIcon,
  TargetIcon,
} from "@radix-ui/react-icons";

function DashAnInfos() {
  return (
    <Box mt="6">
      <Grid
        columns={{
          initial: "1",
          xs: "2",
          md: "2",
        }}
        gap="5"
        width="auto"
      >
        <Card>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell width="50%">
                  Countries
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell width="50%">
                  Visitors
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>
                  <img src="https://analytics.netnet.nu/images/flags/se.png" />{" "}
                  Sweden
                </Table.RowHeaderCell>
                <Table.Cell>
                  34.876 <Badge color="blue">55%</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <img src="https://analytics.netnet.nu/images/flags/dk.png" />{" "}
                  Denmark
                </Table.RowHeaderCell>
                <Table.Cell>
                  12.167 <Badge color="blue">32%</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <img src="https://analytics.netnet.nu/images/flags/us.png" />{" "}
                  United States
                </Table.RowHeaderCell>
                <Table.Cell>
                  8.142 <Badge color="blue">12%</Badge>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Card>
        <Card>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell width="50%">
                  Browsers
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell width="50%">
                  Visitors
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>
                  <img src="https://analytics.netnet.nu/images/browsers/chrome.png" />{" "}
                  Chrome
                </Table.RowHeaderCell>
                <Table.Cell>
                  34.876 <Badge color="blue">55%</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <img src="https://analytics.netnet.nu/images/browsers/ios.png" />{" "}
                  iOS
                </Table.RowHeaderCell>
                <Table.Cell>
                  12.167 <Badge color="blue">32%</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <img src="https://analytics.netnet.nu/images/browsers/firefox.png" />{" "}
                  Firefox
                </Table.RowHeaderCell>
                <Table.Cell>
                  8.142 <Badge color="blue">12%</Badge>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Card>
        <Card>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell width="50%">
                  Devices
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell width="50%">
                  Visitors
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>
                  <img
                    src="https://analytics.netnet.nu/images/device/mobile.png"
                    width="15px"
                  />{" "}
                  Mobile
                </Table.RowHeaderCell>
                <Table.Cell>
                  34.876 <Badge color="blue">55%</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <img
                    src="https://analytics.netnet.nu/images/device/desktop.png"
                    width="15px"
                  />{" "}
                  Desktop
                </Table.RowHeaderCell>
                <Table.Cell>
                  12.167 <Badge color="blue">32%</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <img
                    src="https://analytics.netnet.nu/images/device/tablet.png"
                    width="15px"
                  />{" "}
                  Tablet
                </Table.RowHeaderCell>
                <Table.Cell>
                  8.142 <Badge color="blue">12%</Badge>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Card>
        <Card>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell width="50%">OS</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell width="50%">
                  Visitors
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>
                  <img
                    src="https://analytics.netnet.nu/images/os/windows-10.png"
                    width="15px"
                  />{" "}
                  Windows 10
                </Table.RowHeaderCell>
                <Table.Cell>
                  34.876 <Badge color="blue">55%</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <img
                    src="https://analytics.netnet.nu/images/os/android-os.png"
                    width="15px"
                  />{" "}
                  Android OS
                </Table.RowHeaderCell>
                <Table.Cell>
                  12.167 <Badge color="blue">32%</Badge>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>
                  <img
                    src="https://analytics.netnet.nu/images/os/mac-os.png"
                    width="15px"
                  />{" "}
                  macOS
                </Table.RowHeaderCell>
                <Table.Cell>
                  8.142 <Badge color="blue">12%</Badge>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Card>
      </Grid>
    </Box>
  );
}
export default DashAnInfos;
