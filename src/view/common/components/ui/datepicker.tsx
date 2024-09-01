import { cn } from "@/view/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type CalendarProps = React.ComponentProps<typeof DayPicker>;

type DatePickerProps = {
  date?: Date;
  placeholder?: string;
  setDate?: SelectSingleEventHandler;
  formatDate?: string;
} & CalendarProps;

export const DatePicker: React.FC<DatePickerProps> = ({
  date,
  placeholder,
  formatDate,
  setDate,
  ...calendarProps
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "w-full justify-start text-left font-normal",
          !date && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? (
          format(date, formatDate || "PPP")
        ) : (
          <span>{placeholder || "Pick a date"}</span>
        )}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0 z-[130]">
      <Calendar
        mode="single"
        selected={date}
        // @ts-ignore
        onSelect={setDate}
        initialFocus
        shouldCloseOnSelect={true}
        {...calendarProps}
      />
    </PopoverContent>
  </Popover>
);
