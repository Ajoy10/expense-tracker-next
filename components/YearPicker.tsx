import React from "react";
import { ComboBox } from "./customUI/ComboBox";
import { years } from "@/lib/utils";
import dayjs from "dayjs";

type YearPickerProps = {
  date?: Date;
  onChange?: (value: Date) => void;
};

function YearPicker(props: YearPickerProps) {
  const yearOptions = years.map((year) => ({
    label: year,
    value: year,
  }));
  return (
    <ComboBox
      title="year"
      placeholder="Year"
      options={yearOptions}
      defaultValue={
        props.date?.getFullYear().toString() || dayjs().format("YYYY")
      }
      onChange={(yearAsString) => {
        props.onChange &&
          props.onChange(dayjs(props.date).set("year", yearAsString).toDate());
      }}
    />
  );
}

export default YearPicker;
