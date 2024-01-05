import {
  Flex,
  Text,
  Button,
  Container,
  Box,
  Separator,
  TextField,
  Avatar,
  DropdownMenu,
  IconButton,
} from "@radix-ui/themes";
import {
  MagnifyingGlassIcon,
  CaretDownIcon,
  CaretSortIcon,
  PlusCircledIcon,
  CheckIcon,
  LockOpen1Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";

function DashHeader() {
  return (
    <Box mt="2">
      <Flex gap="3" justify="between" align="center">
        <Box width="20%">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Box className="submenu">
                <Flex gap="3" align="center">
                  <Avatar
                    size="1"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" size="2">
                      Özay Özdemir
                    </Text>
                  </Box>
                  <Box>
                    <CaretSortIcon />
                  </Box>
                </Flex>
              </Box>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <Text size="1">Personal Account</Text>
              <DropdownMenu.Item>
                Özay Özdemir <CheckIcon />
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <Text size="1">Teams</Text>
              <DropdownMenu.Item>Acme AB</DropdownMenu.Item>
              <DropdownMenu.Item>Monster AB</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="blue">
                Create team <PlusCircledIcon />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
        <Box
          width="50%"
          display={{ initial: "none", xs: "block", md: "block" }}
          className="mainmenu"
        >
          <Flex gap="3" justify="start" align="center">
            <a href="#" className="active">
              Overview
            </a>
            <a href="#">Customers</a>
            <a href="#">Products</a>
            <a href="#">Settings</a>
          </Flex>
        </Box>
        <Box width="20%" display={{ initial: "none", xs: "none", md: "block" }}>
          <TextField.Root>
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input placeholder="Search the docs…" />
          </TextField.Root>
        </Box>

        {/* Mobile menu */}
        <Box width="10%" display={{ initial: "block", xs: "none", md: "none" }}>
          {/* Mobile Search */}
          <IconButton className="burgermenu" mr="2">
            <MagnifyingGlassIcon width="18" height="18" />
          </IconButton>
          {/* Mobile Search End */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton className="burgermenu">
                <HamburgerMenuIcon width="20" height="20" />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Overview</DropdownMenu.Item>
              <DropdownMenu.Item>Customers</DropdownMenu.Item>
              <DropdownMenu.Item>Products</DropdownMenu.Item>
              <DropdownMenu.Item>Settings</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <Text as="div" size="2" weight="bold">
                  ozayo
                </Text>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Text as="div" size="1">
                  ozay.ozdemir@chasacademy.se
                </Text>
              </DropdownMenu.Item>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Profile</DropdownMenu.Item>
              <DropdownMenu.Item>Billing</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red">
                Log out
                <LockOpen1Icon />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
        {/* Mobile menu end */}
        <Box
          width="10%"
          display={{ initial: "none", xs: "block", md: "block" }}
        >
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                size="2"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                radius="full"
                fallback="T"
                className="userlink"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <Text size="2" weight="bold">
                ozayo
              </Text>
              <Text size="1">ozay.ozdemir@chasacademy.se</Text>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Profile</DropdownMenu.Item>
              <DropdownMenu.Item>Billing</DropdownMenu.Item>
              <DropdownMenu.Item>Settings</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red">
                Log out
                <LockOpen1Icon />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </Flex>
      <Separator my="3" size="4" />
    </Box>
  );
}

export default DashHeader;
