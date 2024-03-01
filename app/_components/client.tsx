"use client";
import * as React from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CustomSelect() {
  return (
    <Select>
      <SelectTrigger className="min-w-[300px] outline-none border-0 focus-visible:ring-transparent">
        <SelectValue placeholder="Rental type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Rental type</SelectLabel>
          <SelectItem value="option1">Rooms</SelectItem>
          <SelectItem value="option2">Hotels</SelectItem>
          <SelectItem value="option3">Halls</SelectItem>
          <SelectItem value="option4">Parking</SelectItem>
          <SelectItem value="option5">Gurage</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "min-w-[280px] justify-start text-left font-normal outline-none border-0 focus-visible:ring-transparent hover:bg-white",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-6 w-6" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
