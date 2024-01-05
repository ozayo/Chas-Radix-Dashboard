import {
  Flex,
  Text,
  TextField,
  Table,
  IconButton,
  Box,
  Grid,
  Card,
  RadioGroup,
  Switch,
  Checkbox,
  Button,
} from "@radix-ui/themes";
import { DownloadIcon } from "@radix-ui/react-icons";
import MultiSelect from "./MultiSelect";

function DashReport() {
  return (
    <Box>
      <Grid
        columns={{
          initial: "1",
          xs: "1",
          md: "2",
        }}
        gap="5"
        width="auto"
      >
        <Card>
          <Box mb="2">
            <Text size="3" weight="bold">
              Create new reports
            </Text>
            <Box>
              <Text size="2">
                You can create and download new reports here.
              </Text>
            </Box>
          </Box>
          <Flex justify="between" my="5" gap="5">
            <Box width="100%">
              <Text as="p" size="2" weight="bold">
                Report name
              </Text>
              <TextField.Input placeholder="Report name.." />
            </Box>
            <Box width="100%">
              <Text as="p" size="2" weight="bold">
                Report date range
              </Text>
              <MultiSelect />
            </Box>
          </Flex>
          <Box my="5">
            <Text size="2" weight="bold">
              Select report type
            </Text>
            <RadioGroup.Root defaultValue="1" size="1" mt="2">
              <Flex gap="2" direction="row">
                <Text as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value="1" /> Full report
                  </Flex>
                </Text>
                <Text as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value="2" /> Sales report
                  </Flex>
                </Text>
                <Text as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value="3" /> Custom report
                  </Flex>
                </Text>
              </Flex>
            </RadioGroup.Root>
          </Box>
          <Card my="2">
            <Flex align="center">
              <Box width="100%">
                <Text as="p" size="2" weight="bold">
                  Total Revenue
                </Text>
                <Text as="p" size="1">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy
                  text.
                </Text>
              </Box>
              <Box width="9">
                <Switch size="2" defaultChecked />
              </Box>
            </Flex>
          </Card>
          <Card my="2">
            <Flex>
              <Box width="100%">
                <Text as="p" size="2" weight="bold">
                  Sales
                </Text>
                <Text as="p" size="1">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy
                  text.
                </Text>
              </Box>
              <Box width="9">
                <Switch size="2" />
              </Box>
            </Flex>
          </Card>
          <Card my="2">
            <Flex>
              <Box width="100%">
                <Text as="p" size="2" weight="bold">
                  Analytics
                </Text>
                <Text as="p" size="1">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy
                  text.
                </Text>
              </Box>
              <Box width="9">
                <Switch size="2" defaultChecked />
              </Box>
            </Flex>
          </Card>
          <Box my="5" px="2">
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox defaultChecked /> Send a report copy to my email.
              </Flex>
            </Text>
          </Box>

          <Flex mb="4" justify="end">
            <Button size="2" className="download">
              Create a new report
            </Button>
          </Flex>
        </Card>
        <Card>
          <Box mb="3">
            <Text size="3" weight="bold">
              Old reports
            </Text>
            <Box>
              <Text size="2">
                You can find and download previously created reports here.
              </Text>
            </Box>
          </Box>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Report name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Date range</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell align="end">
                  Download
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Sales report Nov</Table.RowHeaderCell>
                <Table.Cell>Nov 1, 2023 - Nov 30, 2023 </Table.Cell>
                <Table.Cell align="end">
                  <IconButton size="1" color="gray" className="downico">
                    <DownloadIcon />
                  </IconButton>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Visitors report Sep</Table.RowHeaderCell>
                <Table.Cell>Sep 1, 2023 - Sep 30, 2023 </Table.Cell>
                <Table.Cell align="end">
                  <IconButton size="1" color="gray" className="downico">
                    <DownloadIcon />
                  </IconButton>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Full report 2023 Q1</Table.RowHeaderCell>
                <Table.Cell>Jan 1, 2023 - Mar 30, 2023 </Table.Cell>
                <Table.Cell align="end">
                  <IconButton size="1" color="gray" className="downico">
                    <DownloadIcon />
                  </IconButton>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>New Customers report</Table.RowHeaderCell>
                <Table.Cell>Jan 1, 2023 - Dec 30, 2023 </Table.Cell>
                <Table.Cell align="end">
                  <IconButton size="1" color="gray" className="downico">
                    <DownloadIcon />
                  </IconButton>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Total Revenue report</Table.RowHeaderCell>
                <Table.Cell>Jan 1, 2023 - Dec 30, 2023 </Table.Cell>
                <Table.Cell align="end">
                  <IconButton size="1" color="gray" className="downico">
                    <DownloadIcon />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Card>
      </Grid>
    </Box>
  );
}

export default DashReport;
