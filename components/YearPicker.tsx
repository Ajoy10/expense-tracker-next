import React, { useEffect, useState } from "react";
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

  const [date, setDate] = useState(props.date || new Date());

  useEffect(() => {
    props.onChange && props.onChange(date);
  }, [date, props]);
  return (
    <ComboBox
      title="year"
      placeholder="Year"
      options={yearOptions}
      value={date.getFullYear().toString()}
      onChange={(yearAsString) => {
        setDate(dayjs(date).set("year", yearAsString).toDate());
      }}
      disableDeselect
    />
  );
}

export default YearPicker;
