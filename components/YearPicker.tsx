import React from "react";
import { ComboBox } from "./customUI/ComboBox";
import { years } from "@/lib/utils";

function YearPicker() {
  const yearOptions = years.map((year) => ({
    label: year,
    value: year,
  }));
  return (
    <ComboBox
      title="year"
      placeholder="Year"
      options={yearOptions}
      defaultValue="2023"
    />
  );
}

export default YearPicker;
