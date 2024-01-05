import React, { useState } from "react";

import { format, isAfter, isBefore, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { Popover, Button } from "@radix-ui/themes";
import { CalendarIcon } from "@radix-ui/react-icons";

function MultiSelect() {
  const [selectedRange, setSelectedRange] = useState();
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const handleFromChange = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, "LL-dd-y", new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, "LL-dd-y", new Date());

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };

  const handleRangeSelect = (range) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, "PP"));
    } else {
      setFromValue("");
    }
    if (range?.to) {
      setToValue(format(range.to, "PP"));
    } else {
      setToValue("");
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button className="multidatebut">
          <CalendarIcon color="gray" />
          {
            <form className="ma2">
              <input
                placeholder="From Date"
                value={fromValue}
                onChange={handleFromChange}
              />
              {"-"}
              <input
                placeholder="To Date"
                value={toValue}
                onChange={handleToChange}
              />
            </form>
          }
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }}>
        <DayPicker
          mode="range"
          selected={selectedRange}
          onSelect={handleRangeSelect}
        />
      </Popover.Content>
    </Popover.Root>
  );
}

export default MultiSelect;
