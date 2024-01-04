import { Card, Text, Table, Avatar, Box } from "@radix-ui/themes";

function DashTable() {
  return (
    <Card>
      <Box mb="2">
        <Text size="3" weight="bold" mb="5">
          Recent Sales
        </Text>
      </Box>
      <Table.Root>
        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>
              <Avatar src="https://ui.shadcn.com/avatars/01.png" fallback="A" />
            </Table.RowHeaderCell>
            <Table.Cell>
              <Text weight="bold">Olivia Martin</Text>
              <br />
              <Text size="1">olivia.martin@email.com</Text>
            </Table.Cell>
            <Table.Cell>
              <Text weight="bold" size="3">
                +$1,999.00
              </Text>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>
              <Avatar src="https://ui.shadcn.com/avatars/02.png" fallback="A" />
            </Table.RowHeaderCell>
            <Table.Cell>
              <Text weight="bold">Jackson Lee</Text>
              <br />
              <Text size="1">jackson.lee@email.com</Text>
            </Table.Cell>
            <Table.Cell>
              <Text weight="bold" size="3">
                +$39.00
              </Text>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>
              <Avatar src="https://ui.shadcn.com/avatars/03.png" fallback="A" />
            </Table.RowHeaderCell>
            <Table.Cell>
              <Text weight="bold">Isabella Nguyen</Text>
              <br />
              <Text size="1">isabella.nguyen@email.com</Text>
            </Table.Cell>
            <Table.Cell>
              <Text weight="bold" size="3">
                +$299.00
              </Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>
              <Avatar src="https://ui.shadcn.com/avatars/04.png" fallback="A" />
            </Table.RowHeaderCell>
            <Table.Cell>
              <Text weight="bold">William Kim</Text>
              <br />
              <Text size="1">will@email.com</Text>
            </Table.Cell>
            <Table.Cell>
              <Text weight="bold" size="3">
                +$99.00
              </Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>
              <Avatar src="https://ui.shadcn.com/avatars/05.png" fallback="A" />
            </Table.RowHeaderCell>
            <Table.Cell>
              <Text weight="bold">Danilo Sousa </Text>
              <br />
              <Text size="1">danilo@example.com</Text>
            </Table.Cell>
            <Table.Cell>
              <Text weight="bold" size="3">
                +$1,999.00
              </Text>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Card>
  );
}
export default DashTable;
