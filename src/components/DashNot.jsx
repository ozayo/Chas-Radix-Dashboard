import React, { useState } from "react";
import {
  Flex,
  Callout,
  Strong,
  Box,
  AlertDialog,
  Button,
} from "@radix-ui/themes";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

function Notification({ title, content, type }) {
  const color = type === "important" ? "red" : "green";
  const icon =
    type === "important" ? <ExclamationTriangleIcon /> : <InfoCircledIcon />;

  return (
    <Callout.Root size="2" color={color} my="3">
      <Callout.Icon>{icon}</Callout.Icon>
      <Callout.Text>
        <Strong>{title}</Strong>
        <br />
        {content}
      </Callout.Text>
    </Callout.Root>
  );
}

const DashNot = () => {
  const [notifications, setNotifications] = useState([
    {
      title: "Payment issue!",
      content:
        "A payment of 1.920,00$ made by Olivia Martin on 05/11/2023 was declined by the bank.",
      type: "important",
    },
    {
      title: "Unanswered support messages!",
      content: "24 support messages have gone unanswered since 1 week.",
      type: "important",
    },
    {
      title: "Security alert!",
      content:
        "A security vulnerability has been detected in the system. Please contact with Ozay :)",
      type: "important",
    },
    {
      title: "New customers!",
      content:
        "185 new customers have been added to the system in the past month. This represents a 27% increase from the previous month.",
      type: "other",
    },
    {
      title: "Target sales amount exceeded!",
      content:
        "149.540$ in sales has been made this month. This exceeds the monthly target sales amount of 100.000$ by 49%.",
      type: "other",
    },
    {
      title: "New product success!",
      content:
        "520 units of the [New Product Name] product have been sold in the past month. This represents a new record for the product.",
      type: "other",
    },
  ]);

  const handleDeleteAllNotifications = () => {
    setNotifications([]);
    setButtonVisible(false);
  };

  const [buttonVisible, setButtonVisible] = useState(true);

  return (
    <Box>
      {notifications.map((notification) => (
        <Notification
          key={notification.title}
          title={notification.title}
          content={notification.content}
          type={notification.type}
        />
      ))}

      {buttonVisible && (
        <Box mt="6" align="end">
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button color="red" size="2" radius="small">
                <TrashIcon />
                Clear notifications
              </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content style={{ maxWidth: 450 }}>
              <AlertDialog.Title>Clear notifications</AlertDialog.Title>
              <AlertDialog.Description size="2">
                Are you sure?
                <br /> This notifications will no longer be accessible.
              </AlertDialog.Description>

              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button
                    variant="solid"
                    color="red"
                    onClick={handleDeleteAllNotifications}
                  >
                    Clear notifications
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </Box>
      )}
      {notifications.length === 0 && !buttonVisible && (
        <Callout.Root size="3">
          <Callout.Icon>
            <CheckCircledIcon />
          </Callout.Icon>
          <Callout.Text>All notifications have been deleted.</Callout.Text>
        </Callout.Root>
      )}
    </Box>
  );
};
export default DashNot;
