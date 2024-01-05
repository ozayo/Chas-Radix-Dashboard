import React, { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { Popover, Button } from "@radix-ui/themes";
import { CalendarIcon } from "@radix-ui/react-icons";

function Test() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  const footer = selectedDay ? (
    <p>{format(selectedDay, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="outline">
          <CalendarIcon />
          {footer}
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }}>
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
          footer={footer}
        />
      </Popover.Content>
    </Popover.Root>
  );
}

export default Test;
