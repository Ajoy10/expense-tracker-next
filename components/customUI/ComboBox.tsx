"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ComboBoxProps = {
  options: {
    label: string;
    value: string;
  }[];
  disableDeselect?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;

  title?: string;
  defaultValue?: string;

  onChange?: (value: any) => any;
};

export function ComboBox(props: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(
    props.options.find((opt) => opt.value === props.defaultValue)?.value || ""
  );

  React.useEffect(() => {
    props.onChange && props.onChange(value);
  }, [value, props]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? props.options.find((option) => option.value === value)?.label
            : props.placeholder ||
              "Select" + (props.title ? " " + props.title : "") + "..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder={
              props.placeholder ||
              "Search" + (props.title ? " " + props.title : "") + "..."
            }
          />
          <CommandEmpty>
            {props.title ? `No ${props.title}` : "Nothing"} found.
          </CommandEmpty>
          <CommandGroup>
            {props.options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(
                    currentValue === value
                      ? props.disableDeselect
                        ? currentValue
                        : ""
                      : currentValue
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
